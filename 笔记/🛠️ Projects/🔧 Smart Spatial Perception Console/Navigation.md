![[笔记/pic/cover-25-04-14(project).png]]

### Project Overview

This project is based on the Arduino development board and combines multiple sensors and peripherals (MPU6050, joystick, servo, ultrasonic sensor and OLED screen) to realize radar & warning functions:

**Radar mode**: Use the joystick to control the rotation of the servo, change the direction of the ultrasonic sensor, measure the distance in real time and display the radar scanning effect on the OLED screen.

### Main design architecture

| Components | Functional roles | Innovation points |
| ------------ | ------- | ----------------- |
| ​**Analog joystick** | Dual-mode switcher | Press the button to achieve "physical-virtual" mode transition |
| ​**Ultrasonic sensor** | Environmental radar probe | Polar coordinate visualization of scan data |
| ​**180° servo** | Programmable gimbal | Compatible with manual control and automatic scanning modes |
| ​**OLED screen** | Mixed reality display | Support radar map and 3D cube rendering at the same time |
| ​**Buzzer** | Alarm | ? |

Includes requirements such as [**Integrate multiple sensor elements**] and [**Continuous functional demonstration**]

![[笔记/pic/sensor_architecture.png]]  

### Simulation platform

Since it is inconvenient to bring the development board set back, I used the [WOKWI platform](https://wokwi.com/) to initially verify the feasibility of the solution. Due to ~~evil capitalism (you need to become a member to extend the compilation time)~~, the compilation time of the platform is limited, and ~~I am too lazy to find the firmware file of Arduino UNO to compile the code locally~~, so I wrote a castrated version of the code. Due to traffic restrictions, the video is not provided here for the time being. You can go to the platform to do some simulation according to the configuration. The function is already available:

For specific principles, please refer to the [[Principle.md]] document

#### Wiring

**Buzzer wiring:**

```
VCC -> Arduino 5V
GND -> Arduino GND
IO -> Arduino D6
```

**Joystick wiring:**

```
VCC -> Arduino 5V
GND -> Arduino GND
VERT (corresponding to VRY) -> Arduino A0
HORZ (corresponding to VRX) -> Arduino A1
SEL (corresponding to SW) -> Arduino D3
```

**Servo wiring:**

```
Red wire (VCC) -> Arduino 5V
Brown wire (GND) -> Arduino GND
Yellow wire (signal) -> Arduino D9
```

**Ultrasonic sensor wiring:**

```
VCC -> Arduino 5V
GND -> Arduino GND
TRIG -> Arduino D4
ECHO -> Arduino D5
```

**OLED screen wiring:**

```
VCC -> Arduino 5V
GND -> Arduino GND
SCL -> Arduino A5
SDA -> Arduino A4
```

##### diagram.json
```json
{
  "version": 1,
  "author": "Anonymous maker",
  "editor": "wokwi",
  "parts": [
    { "type": "wokwi-breadboard-mini", "id": "bb1", "top": 46.6, "left": 74.4, "attrs": {} },
    { "type": "wokwi-breadboard", "id": "bb2", "top": 342.6, "left": -179.6, "attrs": {} },
    { "type": "wokwi-arduino-uno", "id": "uno", "top": 0, "left": 0, "attrs": {} },
    { "type": "wokwi-mpu6050", "id": "imu1", "top": 263.02, "left": 194.32, "attrs": {} },
    {
      "type": "board-ssd1306",
      "id": "oled1",
      "top": 12.74,
      "left": -191.77,
      "attrs": { "i2cAddress": "0x3c" }
    },
    {
      "type": "wokwi-hc-sr04",
      "id": "ultrasonic1",
      "top": 107.1,
      "left": -186.5,
      "attrs": { "distance": "400" }
    },
    { "type": "wokwi-analog-joystick", "id": "joystick1", "top": 201, "left": 293.4, "attrs": {} },
    { "type": "wokwi-servo", "id": "servo1", "top": 218.8, "left": -172.8, "attrs": {} }
  ],
  "connections": [
    [ "uno:5V", "bb2:35t.a", "red", [ "v0" ] ],
    [ "uno:GND.2", "bb2:37t.a", "black", [ "v0" ] ],
    [ "imu1:VCC", "bb2:35t.b", "red", [ "v0" ] ],
    [ "imu1:GND", "bb2:37t.b", "black", [ "v0" ] ],
    [ "imu1:SCL", "uno:A5", "green", [ "v0" ] ],
    [ "imu1:SDA", "uno:A4", "green", [ "v0" ] ],
    [ "imu1:AD0", "bb2:37t.c", "green", [ "v0" ] ],
    [ "imu1:INT", "uno:2", "green", [ "v0" ] ],
    [ "joystick1:VCC", "bb2:35t.c", "red", [ "v0" ] ],
    [ "joystick1:GND", "bb2:37t.c", "black", [ "v0" ] ],
    [ "joystick1:VERT", "uno:A0", "green", [ "v0" ] ],
    [ "joystick1:HORZ", "uno:A1", "green", [ "v0" ] ],
    [ "joystick1:SEL", "uno:3", "green", [ "v0" ] ],
    [ "servo1:V+", "bb2:35t.d", "green", [ "h0" ] ],
    [ "servo1:GND", "bb2:37t.d", "black", [ "h0" ] ],
    [ "servo1:PWM", "uno:9", "green", [ "h0" ] ],
    [ "ultrasonic1:VCC", "bb2:35t.e", "red", [ "v0" ] ],
    [ "ultrasonic1:GND", "bb2:37t.e", "black", [ "v0" ] ],
    [ "ultrasonic1:TRIG", "uno:4", "green", [ "v0" ] ],
    [ "ultrasonic1:ECHO", "uno:5", "green", [ "v0" ] ],
    [ "uno:5V", "bb2:35b.f", "red", [ "v0" ] ],
    [ "oled1:VCC", "bb2:35b.g", "red", [ "v0" ] ],
    [ "oled1:GND", "bb2:37b.g", "black", [ "v0" ] ],
    [ "uno:GND.2", "bb2:37b.f", "black", [ "v0" ] ],
    [ "oled1:SCL", "uno:A5", "green", [ "v0" ] ],
    [ "oled1:SDA", "uno:A4", "green", [ "v0" ] ]
  ],
  "dependencies": {}
}
```

#### Test code

```cpp
// 测试版代码
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <MPU6050.h>
#include <Servo.h>

// OLED
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

#define JOYSTICK_X_PIN  A0
#define JOYSTICK_BTN    3
#define SERVO_PIN       9
#define TRIG_PIN        4
#define ECHO_PIN        5

MPU6050 mpu;
Servo myServo;
int currentMode = 0;
bool buttonPressed = false;
unsigned long lastDebounceTime = 0;

// 姿态角
float pitch = 0;
float roll = 0;

void setup() {
  Serial.begin(9600);
  
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 initialization failed"));
    for(;;);
  }
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.println("starting up...");
  display.display();
  
  // 初始化I2C和MPU6050
  Wire.begin();
  mpu.initialize();
  
  // 初始化按钮和舵机
  pinMode(JOYSTICK_BTN, INPUT_PULLUP);
  myServo.attach(SERVO_PIN);
  myServo.write(90);
  
  // 初始化超声波
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  
  delay(1000);
  display.clearDisplay();
  display.println("Ready!");
  display.display();
}

void loop() {
  // 检测模式切换按钮
  if (digitalRead(JOYSTICK_BTN) == LOW) {
    if (!buttonPressed && (millis() - lastDebounceTime) > 200) {
      currentMode = 1 - currentMode;
      buttonPressed = true;
      lastDebounceTime = millis();
      
      display.clearDisplay();
      display.println(currentMode == 0 ? "Mode: Radar" : "Mode: Attitude");
      display.display();
      delay(500);
    }
  } else {
    buttonPressed = false;
  }

  // 根据模式执行功能
  if (currentMode == 0) {
    radarMode();
  } else {
    attitudeMode();
  }
  
  delay(50); // 减少刷新率以提高稳定性
}

void radarMode() {
  // 获取摇杆控制舵机
  int joystickValue = analogRead(JOYSTICK_X_PIN);
  int servoAngle = map(joystickValue, 0, 1023, 0, 180);
  myServo.write(servoAngle);
  
  // 测量距离
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  
  long duration = pulseIn(ECHO_PIN, HIGH);
  int distance = duration * 0.034 / 2;
  distance = constrain(distance, 0, 100);
  
  // 绘制简化雷达界面
  display.clearDisplay();
  
  // 雷达基础绘制
  int centerX = SCREEN_WIDTH / 2;
  int centerY = SCREEN_HEIGHT - 1;
  int radius = SCREEN_HEIGHT - 10;
  
  display.drawFastHLine(0, centerY, SCREEN_WIDTH, SSD1306_WHITE);
  
  // 绘制扫描线和距离点
  float radAngle = radians(servoAngle);
  int lineX = centerX + round(radius * cos(PI - radAngle));
  int lineY = centerY - round(radius * sin(PI - radAngle));
  display.drawLine(centerX, centerY, lineX, lineY, SSD1306_WHITE);
  
  float scaledDistance = map(distance, 0, 100, 0, radius);
  int pointX = centerX + round(scaledDistance * cos(PI - radAngle));
  int pointY = centerY - round(scaledDistance * sin(PI - radAngle));
  display.fillCircle(pointX, pointY, 2, SSD1306_WHITE);
  
  // 显示数据
  display.setCursor(0, 0);
  display.print("angle:");
  display.print(servoAngle);
  display.print(" distance:");
  display.print(distance);
  display.println("cm");
  
  display.display();
}

void attitudeMode() {
  // 读取MPU6050
  int16_t ax, ay, az;
  mpu.getAcceleration(&ax, &ay, &az);
  
  // 简化的姿态计算
  float accelX = ax / 16384.0;
  float accelY = ay / 16384.0;
  float accelZ = az / 16384.0;
  
  roll = atan2(accelY, accelZ) * 180.0 / PI;
  pitch = atan2(-accelX, sqrt(accelY * accelY + accelZ * accelZ)) * 180.0 / PI;
  
  display.clearDisplay();
  
  // 绘制简化立方体
  drawSimpleCube(pitch, roll);
  
  // 显示数据
  display.setCursor(0, 0);
  display.print("P:");
  display.print(pitch, 0);
  display.print(" R:");
  display.print(roll, 0);
  
  display.display();
}

void drawSimpleCube(float pitch, float roll) {
  int centerX = SCREEN_WIDTH / 2;
  int centerY = SCREEN_HEIGHT / 2;
  int size = 20;
  
  // 根据姿态调整方块形状
  int xOffset = constrain(roll / 3, -10, 10);
  int yOffset = constrain(pitch / 3, -10, 10);
  
  // 简化绘制：只绘制一个变形矩形代表立方体
  display.drawRect(
    centerX - size + xOffset,
    centerY - size + yOffset,
    size * 2,
    size * 2,
    SSD1306_WHITE
  );
  
  // 添加一条斜线表示方向
  display.drawLine(
    centerX + xOffset,
    centerY + yOffset,
    centerX + xOffset + size/2,
    centerY + yOffset + size/2,
    SSD1306_WHITE
  );
}
```

#### Full version code

```cpp
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <Servo.h>

// OLED设置
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

#define JOYSTICK_X_PIN  A0  // 水平轴
#define SERVO_PIN       9   // 舵机
#define TRIG_PIN        4   // （超声波）触发引脚
#define ECHO_PIN        5   // （超声波）回响引脚
#define BUZZER_PIN      6   // 蜂鸣器引脚

Servo myServo;

void setup() {
  Serial.begin(9600);

  // 初始化（不要动！！！）
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 initialization failed"));
    for (;;);
  }
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.println("Starting up...");
  display.display();

  // 舵机初始化
  myServo.attach(SERVO_PIN);
  myServo.write(90);

  // 超声波初始化
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  // 蜂鸣器初始化
  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);

  delay(1000);
  display.clearDisplay();
  display.println("Ready!");
  display.display();
}

void loop() {
  // 读取摇杆的X轴
  int joystickX = analogRead(JOYSTICK_X_PIN);
  int servoAngle = map(joystickX, 0, 1023, 0, 180);
  myServo.write(servoAngle);

  // 测量距离
  int distance = measureDistance();

  // 如果距离过近，启动蜂鸣器并显示警告
  if (distance > 0 && distance < 10) {
    digitalWrite(BUZZER_PIN, HIGH); // 打开蜂鸣器
    displayWarning(distance);       // 显示警告
  } else {
    digitalWrite(BUZZER_PIN, LOW);   // 关闭蜂鸣器
    drawRadar(servoAngle, distance); // 绘制雷达界面
  }

  delay(20); // 刷新速度
}

int measureDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH, 30000); // 超声波回响时间，最大30ms
  if (duration == 0) return 100;                  // 超时返回最大距离

  int distance = duration * 0.034 / 2;            // 根据时间计算距离
  return constrain(distance, 0, 100);
}

void drawRadar(int angle, int distance) {
  display.clearDisplay();

  // 绘制雷达背景
  int centerX = SCREEN_WIDTH / 2;
  int centerY = SCREEN_HEIGHT - 1;
  int radius = SCREEN_HEIGHT - 10;

  display.drawCircle(centerX, centerY, radius, SSD1306_WHITE);
  display.drawCircle(centerX, centerY, radius * 2 / 3, SSD1306_WHITE);
  display.drawCircle(centerX, centerY, radius / 3, SSD1306_WHITE);

  // 绘制扫描线
  float radAngle = radians(angle);
  int lineX = centerX + radius * cos(PI - radAngle);
  int lineY = centerY - radius * sin(PI - radAngle);
  display.drawLine(centerX, centerY, lineX, lineY, SSD1306_WHITE);

  // 绘制目标点
  float scaledDistance = map(distance, 0, 100, 0, radius);
  int targetX = centerX + scaledDistance * cos(PI - radAngle);
  int targetY = centerY - scaledDistance * sin(PI - radAngle);
  display.fillCircle(targetX, targetY, 3, SSD1306_WHITE);

  // 显示角度和距离信息
  display.setCursor(0, 0);
  display.print("Angle: ");
  display.print(angle);
  display.print(" Dist: ");
  display.print(distance);
  display.println("cm");

  display.display();
}

void displayWarning(int distance) {
  display.clearDisplay();

  // 显示警告信息
  display.setTextSize(2);
  display.setCursor(0, 0);
  display.println("WARNING!");
  display.setTextSize(1);
  display.setCursor(0, 20);
  display.print("Too close: ");
  display.print(distance);
  display.println("cm");
  display.display();
}
```