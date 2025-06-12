### ESP32智能小车 (ESP32 Smart Car)


### 核心特性

<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
    /* 基础字体和图表容器样式 */
    .simulation-container { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
    .chart-container { position: relative; width: 100%; max-width: 600px; margin-left: auto; margin-right: auto; height: 300px; max-height: 400px; }
    @media (min-width: 768px) { .chart-container { height: 350px; } }
</style>

<section id="simulation" class="simulation-container my-8 md:my-12 p-4 bg-slate-100 rounded-lg">
    <h2 class="text-3xl font-bold text-center mb-8 text-slate-900">核心功能模拟</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-4 text-center">智能避障模拟</h3>
            <div id="avoidance-sim" class="relative w-full h-64 bg-slate-100 rounded-md flex justify-center items-center">
                <div id="car-body" class="w-16 h-24 bg-slate-800 rounded-md relative flex justify-center items-center text-white font-bold">CAR</div>
                <div id="front-sensor-beam" class="absolute top-0 w-full h-8 bg-green-500/20 transition-all duration-300" style="clip-path: polygon(30% 0, 70% 0, 100% 100%, 0% 100%); top:-32px;"></div>
                <div id="rear-sensor-beam" class="absolute bottom-0 w-full h-8 bg-green-500/20 transition-all duration-300" style="clip-path: polygon(0 0, 100% 0, 70% 100%, 30% 100%); bottom:-32px;"></div>
                <div id="front-obstacle" class="absolute w-24 h-4 bg-slate-400 rounded-sm" style="top: 10px; display: none;"></div>
            </div>
            <div id="avoidance-status" class="mt-4 text-center font-semibold text-lg text-green-600">状态: 安全</div>
            <div class="flex justify-center mt-4 space-x-4">
                <button id="toggle-obstacle-btn" class="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition">模拟前方障碍物</button>
            </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-4 text-center">音频分析仪</h3>
            <div class="chart-container">
                <canvas id="audioChart"></canvas>
            </div>
            <div class="flex justify-center mt-4 space-x-4">
                <button id="waveform-btn" class="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition">声音示波器</button>
                <button id="fft-btn" class="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">音频频谱仪</button>
            </div>
        </div>
    </div>
</section>

<script>
    // 确保脚本在DOM加载完成后执行
    document.addEventListener('DOMContentLoaded', function() {
        // --- 智能避障模拟逻辑 ---
        const toggleObstacleBtn = document.getElementById('toggle-obstacle-btn');
        const frontObstacle = document.getElementById('front-obstacle');
        const frontSensorBeam = document.getElementById('front-sensor-beam');
        const avoidanceStatus = document.getElementById('avoidance-status');
        let obstacleVisible = false;

        // 检查元素是否存在，防止在某些环境中报错
        if (toggleObstacleBtn) {
            toggleObstacleBtn.addEventListener('click', () => {
                obstacleVisible = !obstacleVisible;
                if (obstacleVisible) {
                    frontObstacle.style.display = 'block';
                    frontSensorBeam.classList.remove('bg-green-500/20');
                    frontSensorBeam.classList.add('bg-red-500/30');
                    avoidanceStatus.textContent = '状态: 前方障碍物！已制动';
                    avoidanceStatus.classList.remove('text-green-600');
                    avoidanceStatus.classList.add('text-red-600');
                    toggleObstacleBtn.textContent = '移除障碍物';
                } else {
                    frontObstacle.style.display = 'none';
                    frontSensorBeam.classList.remove('bg-red-500/30');
                    frontSensorBeam.classList.add('bg-green-500/20');
                    avoidanceStatus.textContent = '状态: 安全';
                    avoidanceStatus.classList.remove('text-red-600');
                    avoidanceStatus.classList.add('text-green-600');
                    toggleObstacleBtn.textContent = '模拟前方障碍物';
                }
            });
        }

        // --- 音频分析仪逻辑 ---
        const canvasElement = document.getElementById('audioChart');
        if (canvasElement) {
            const ctx = canvasElement.getContext('2d');
            let audioChart;
            let chartInterval;

            const chartConfigBase = {
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: { duration: 200 },
                    scales: {
                        y: { beginAtZero: true, ticks: { color: '#64748b' } },
                        x: { ticks: { color: '#64748b' } }
                    },
                    plugins: { legend: { display: false } }
                }
            };

            const generateWaveformData = () => Array.from({length: 50}, () => Math.sin(Math.random() * Date.now()) * 50 + 50);
            const generateFFTData = () => Array.from({length: 9}, () => Math.random() * 100);

            function createChart(type) {
                if (audioChart) audioChart.destroy();
                if (chartInterval) clearInterval(chartInterval);

                let config;
                if (type === 'waveform') {
                    config = {
                        type: 'line',
                        data: {
                            labels: Array.from({length: 50}, (_, i) => i + 1),
                            datasets: [{
                                label: '时域波形',
                                data: generateWaveformData(),
                                borderColor: 'rgb(59, 130, 246)',
                                tension: 0.4,
                                pointRadius: 0
                            }]
                        },
                        ...chartConfigBase
                    };
                    chartInterval = setInterval(() => {
                        if (audioChart) {
                            audioChart.data.datasets[0].data = generateWaveformData();
                            audioChart.update('none'); // 使用'none'动画类型以获得更流畅的实时感
                        }
                    }, 400);
                } else if (type === 'fft') {
                    config = {
                        type: 'bar',
                        data: {
                            labels: ['63', '125', '250', '500', '1k', '2k', '4k', '8k', '16k'],
                            datasets: [{
                                label: '频域图谱',
                                data: generateFFTData(),
                                backgroundColor: 'rgba(139, 92, 246, 0.7)',
                                borderColor: 'rgb(139, 92, 246)',
                                borderWidth: 1
                            }]
                        },
                        ...chartConfigBase
                    };
                    chartInterval = setInterval(() => {
                        if (audioChart) {
                            audioChart.data.datasets[0].data = generateFFTData();
                            audioChart.update('none');
                        }
                    }, 400);
                }
                if (ctx) audioChart = new Chart(ctx, config);
            }

            const waveformBtn = document.getElementById('waveform-btn');
            const fftBtn = document.getElementById('fft-btn');

            if (waveformBtn) waveformBtn.addEventListener('click', () => createChart('waveform'));
            if (fftBtn) fftBtn.addEventListener('click', () => createChart('fft'));

            // 默认显示示波器
            createChart('waveform');
        }
    });
</script>

### 📦 软件与依赖 (Software & Dependencies)

- **开发环境:** `Arduino IDE` 或 `PlatformIO IDE`。

- **核心库:**
    - `Wire.h`: I2C通信库，用于OLED。
    - `Adafruit_GFX.h`: Adafruit图形库。
    - `Adafruit_SSD1306.h`: SSD1306 OLED驱动库。

### 🔌 接线图 (Wiring Diagram)



```cpp
# include <Arduino.h>
# include <Wire.h>
# include <Adafruit_GFX.h>
# include <Adafruit_SSD1306.h>

// 电机A（左轮）
# define PWMA  PA0
# define AIN1  PA1
# define AIN2  PA2
// 电机B（右轮）
# define PWMB  PA3
# define BIN1  PA4
# define BIN2  PA5
// 舵机
# define SERVO_PIN PB0
// OLED
# define SCREEN_WIDTH 128
# define SCREEN_HEIGHT 64
# define OLED_RESET    -1

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setMotor(int pwmA, int dirA, int pwmB, int dirB) {
    // 左轮
    analogWrite(PWMA, abs(pwmA));
    digitalWrite(AIN1, dirA > 0 ? HIGH : LOW);
    digitalWrite(AIN2, dirA < 0 ? HIGH : LOW);
    // 右轮
    analogWrite(PWMB, abs(pwmB));
    digitalWrite(BIN1, dirB > 0 ? HIGH : LOW);
    digitalWrite(BIN2, dirB < 0 ? HIGH : LOW);
}

void setServoAngle(int angle) {
    int pulse = map(angle, 0, 180, 500, 2500);
    for (int i = 0; i < 50; i++) {
        digitalWrite(SERVO_PIN, HIGH);
        delayMicroseconds(pulse);
        digitalWrite(SERVO_PIN, LOW);
        delay(20 - pulse / 1000);
    }
}

void showStatus(const char* status) {
    display.clearDisplay();
    display.setTextSize(2);
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(0, 0);
    display.println(status);
    display.display();
}

void setup() {
    pinMode(PWMA, OUTPUT); pinMode(AIN1, OUTPUT); pinMode(AIN2, OUTPUT);
    pinMode(PWMB, OUTPUT); pinMode(BIN1, OUTPUT); pinMode(BIN2, OUTPUT);
    pinMode(SERVO_PIN, OUTPUT);

    // OLED初始化
    Wire.begin();
    display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
    display.clearDisplay();
    showStatus("STOP");
}

void loop() {
    // 前进
    setMotor(200, -1, 200, 1); // 左右轮正转
    setServoAngle(90);        // 舵机居中
    showStatus("FORWARD");
    delay(2000);

    // 左转
    setMotor(150, -1, 150, 1);
    setServoAngle(45);        // 舵机左转
    showStatus("LEFT");
    delay(2000);

    // 右转
    setMotor(150, -1, 150, 1);
    setServoAngle(135);       // 舵机右转
    showStatus("RIGHT");
    delay(2000);

    // 停止
    setMotor(0, 0, 0, 0);
    setServoAngle(90);
    showStatus("STOP");
    delay(2000);
}
```