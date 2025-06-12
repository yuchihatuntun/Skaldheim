### ESP32智能小车 (ESP32 Smart Car)


### 核心特性



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