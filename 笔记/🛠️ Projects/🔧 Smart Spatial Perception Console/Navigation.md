### 项目概览

本项目基于Arduino开发板，结合多个传感器和外设（MPU6050、摇杆、舵机、超声波传感器和OLED屏幕），实现了两种主要功能模式：

1. **雷达模式**：通过摇杆控制舵机旋转，改变超声波传感器的方向，实时测量距离并在OLED屏幕上显示雷达扫描效果。
2. **姿态模式**：通过MPU6050传感器获取设备的姿态数据（俯仰角和横滚角），并在OLED屏幕上显示一个模拟当前姿态的立方体。

### 主要设计架构
| 组件           | 功能角色    | 创新点             |
| ------------ | ------- | ----------------- |
| ​**模拟摇杆**    | 双模态切换器  | 下压按键实现"物理-虚拟"模式跃迁 |
| ​**MPU6050** | 空间姿态采集器 | 三轴融合算法解算三维姿态      |
| ​**超声波传感器**  | 环境雷达探头  | 扫描数据极坐标可视化        |
| ​**180°舵机**  | 可编程云台   | 人工操控与自动扫描模式兼容     |
| ​**OLED屏幕**  | 混合现实显示器 | 同时支持雷达图与3D立方体渲染   |

包含了【**集成三种传感元件**】以及【**连续功能演示**】等要求

![[笔记/pic/sensor_architecture.png]]  

### 仿真平台

由于开发板套组不便带回，所以我使用了[WOKWI平台](https://wokwi.com/)初步验证了方案的可行性，由于~~万恶的资本主义（需要开会员延长编译时间）~~，平台的编译时长有限，~~我又懒得去找Arduino UNO的固件文件来本地编译代码~~，于是我编写了一个阉割版的代码，由于流量限制，这里暂不提供视频，可以根据配置自己去平台做一下仿真，功能是已经可以实现的：

具体原理参考[[Principle.md]]文档
#### 接线

**MPU6050接线:**
```
VCC -> Arduino 5V
GND -> Arduino GND
SCL -> Arduino A5
SDA -> Arduino A4
AD0 -> GND（I2C地址设置为0x68）
```

**摇杆接线:**
```
VCC -> Arduino 5V
GND -> Arduino GND
VERT（对应VRY） -> Arduino A0
HORZ（对应VRX） -> Arduino A1
SEL （对应SW） -> Arduino D3
```

**舵机接线:**
```
红线（VCC） -> Arduino 5V
棕线（GND） -> Arduino GND
黄线（信号） -> Arduino D9
```

**超声波传感器接线:**
```
VCC -> Arduino 5V
GND -> Arduino GND
TRIG -> Arduino D4
ECHO -> Arduino D5
```
**OLED屏幕接线:**
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

#### 测试代码
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
#### 完整版代码

```cpp
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
#define JOYSTICK_Y_PIN  A1
#define JOYSTICK_BTN    3
#define SERVO_PIN       9
#define TRIG_PIN        4
#define ECHO_PIN        5

MPU6050 mpu;
Servo myServo;
int currentMode = 0; // 0: 雷达模式, 1: 姿态模式
bool buttonPressed = false;
unsigned long lastDebounceTime = 0;

// 姿态角
float pitch = 0;
float roll = 0;

// 3D立方体顶点坐标
const int8_t cubeVertices[8][3] = {
  {-1, -1, -1}, {1, -1, -1}, {1, 1, -1}, {-1, 1, -1},
  {-1, -1,  1}, {1, -1,  1}, {1, 1,  1}, {-1, 1,  1}
};

// 立方体边的连接关系
const uint8_t cubeEdges[12][2] = {
  {0, 1}, {1, 2}, {2, 3}, {3, 0},
  {4, 5}, {5, 6}, {6, 7}, {7, 4},
  {0, 4}, {1, 5}, {2, 6}, {3, 7}
};

void setup() {
  Serial.begin(9600);

  // OLED初始化部分，保持不变
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 initialization failed"));
    for (;;);
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
      display.println(currentMode == 0 ? "Mode: Radar" : "Mode: 3D Attitude");
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
  delay(15); // 提高刷新率
}

void radarMode() {
  // 读取摇杆的X轴，用来控制舵机角度
  int joystickX = analogRead(JOYSTICK_X_PIN);
  int servoAngle = map(joystickX, 0, 1023, 0, 180);
  myServo.write(servoAngle);

  // 测量距离
  int distance = measureDistance();

  // 绘制雷达显示
  drawRadar(servoAngle, distance);

  delay(20); // 控制刷新速度
}

int measureDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH, 30000); // 超声波回响时间，最大30ms
  if (duration == 0) return 100; // 超时返回最大距离

  int distance = duration * 0.034 / 2; // 根据时间计算距离
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

void attitudeMode() {
  // 获取MPU6050加速度数据
  int16_t ax, ay, az;
  mpu.getAcceleration(&ax, &ay, &az);

  // 计算姿态角
  roll = atan2(ay, az) * 180.0 / PI;
  pitch = atan2(-ax, sqrt(ay * ay + az * az)) * 180.0 / PI;

  // 清屏并绘制3D立方体
  display.clearDisplay();
  draw3DCube(roll, pitch);

  // 显示姿态角数据
  display.setCursor(0, 0);
  display.print("Pitch: ");
  display.print(pitch, 1);
  display.setCursor(0, 10);
  display.print("Roll: ");
  display.print(roll, 1);

  display.display();
}

void draw3DCube(float roll, float pitch) {
  int centerX = SCREEN_WIDTH / 2;
  int centerY = SCREEN_HEIGHT / 2;

  float angleX = radians(roll);
  float angleY = radians(pitch);

  int projectedX[8];
  int projectedY[8];

  for (int i = 0; i < 8; i++) {
    float x = cubeVertices[i][0];
    float y = cubeVertices[i][1];
    float z = cubeVertices[i][2];

    // 旋转变换
    float tempY = y * cos(angleX) - z * sin(angleX);
    float tempZ = y * sin(angleX) + z * cos(angleX);
    float tempX = x * cos(angleY) + tempZ * sin(angleY);
    z = -x * sin(angleY) + tempZ * cos(angleY);
    y = tempY;

    // 投影变换
    float scale = 64 / (64 + z); // 简单透视投影
    projectedX[i] = centerX + int(tempX * scale * 10);
    projectedY[i] = centerY + int(y * scale * 10);
  }

  // 绘制立方体的12条边
  for (int i = 0; i < 12; i++) {
    int start = cubeEdges[i][0];
    int end = cubeEdges[i][1];
    display.drawLine(projectedX[start], projectedY[start], projectedX[end], projectedY[end], SSD1306_WHITE);
  }
}
```