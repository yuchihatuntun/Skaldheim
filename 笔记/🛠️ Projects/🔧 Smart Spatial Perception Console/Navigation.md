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
VERT -> Arduino A0
HORZ -> Arduino A1
SEL -> Arduino D3
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
// Arduino项目 - 多模式传感器显示系统

#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <MPU6050.h>
#include <Servo.h>

// OLED显示屏设置
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
#define SCREEN_ADDRESS 0x3C
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// 引脚定义
#define JOYSTICK_X_PIN  A0
#define JOYSTICK_Y_PIN  A1
#define JOYSTICK_BTN    3
#define SERVO_PIN       9
#define TRIG_PIN        4
#define ECHO_PIN        5
#define MPU_INT_PIN     2

// 全局变量
MPU6050 mpu;
Servo myServo;

int currentMode = 0;  // 0: 雷达模式, 1: 姿态模式
bool buttonPressed = false;
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 200;

// 姿态角度
float pitch = 0;
float roll = 0;
float yaw = 0;

// 3D立方体的顶点 (x, y, z)
float vertices[8][3] = {
  {-1, -1, -1},
  {1, -1, -1},
  {1, 1, -1},
  {-1, 1, -1},
  {-1, -1, 1},
  {1, -1, 1},
  {1, 1, 1},
  {-1, 1, 1}
};

// 立方体的边
byte edges[12][2] = {
  {0, 1}, {1, 2}, {2, 3}, {3, 0},  // 底面
  {4, 5}, {5, 6}, {6, 7}, {7, 4},  // 顶面
  {0, 4}, {1, 5}, {2, 6}, {3, 7}   // 连接边
};

void setup() {
  Serial.begin(115200);
  
  // 初始化OLED
  if(!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println(F("SSD1306分配失败"));
    for(;;);
  }
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 0);
  display.println(F("启动中..."));
  display.display();
  
  // 初始化I2C总线
  Wire.begin();
  
  // 初始化MPU6050
  Serial.println("初始化MPU6050...");
  mpu.initialize();
  
  // 检查MPU6050连接
  if (!mpu.testConnection()) {
    Serial.println(F("MPU6050连接失败"));
    display.clearDisplay();
    display.setCursor(0, 0);
    display.println(F("MPU6050连接失败!"));
    display.display();
    while(1);
  }
  
  // 配置MPU6050
  mpu.setFullScaleGyroRange(MPU6050_GYRO_FS_250);
  mpu.setFullScaleAccelRange(MPU6050_ACCEL_FS_2);
  
  // 初始化摇杆
  pinMode(JOYSTICK_BTN, INPUT_PULLUP);
  
  // 初始化舵机
  myServo.attach(SERVO_PIN);
  myServo.write(90); // 中间位置
  
  // 初始化超声波
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  
  // 可选：使用MPU6050中断
  pinMode(MPU_INT_PIN, INPUT);
  
  delay(1000);
  display.clearDisplay();
  display.setCursor(0, 0);
  display.println(F("系统就绪!"));
  display.display();
  delay(1000);
  
  // 校准MPU6050 (可选)
  display.clearDisplay();
  display.setCursor(0, 0);
  display.println(F("将设备放平"));
  display.println(F("校准中..."));
  display.display();
  delay(2000); // 给用户时间将设备放平
  
  // 设置零点偏移，这里假设设备放平
  calibrateMPU6050();
  
  display.clearDisplay();
  display.setCursor(0, 0);
  display.println(F("校准完成!"));
  display.display();
  delay(1000);
}

void loop() {
  // 检测模式切换按钮
  if (digitalRead(JOYSTICK_BTN) == LOW) {
    if (!buttonPressed && (millis() - lastDebounceTime) > debounceDelay) {
      currentMode = 1 - currentMode; // 在0和1之间切换
      buttonPressed = true;
      lastDebounceTime = millis();
      
      display.clearDisplay();
      display.setCursor(0, 0);
      display.print(F("切换至模式: "));
      display.println(currentMode == 0 ? F("雷达") : F("姿态"));
      display.display();
      delay(500);
    }
  } else {
    buttonPressed = false;
  }

  // 根据当前模式运行相应功能
  if (currentMode == 0) {
    radarMode();
  } else {
    attitudeMode();
  }
}

// 校准MPU6050
void calibrateMPU6050() {
  long accelX = 0, accelY = 0, accelZ = 0;
  long gyroX = 0, gyroY = 0, gyroZ = 0;
  int samples = 100;
  
  // 收集多个样本求平均值
  for (int i = 0; i < samples; i++) {
    int16_t ax, ay, az, gx, gy, gz;
    mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
    accelX += ax;
    accelY += ay;
    accelZ += az - 16384; // 假设Z轴向下，约16384 (1g)
    gyroX += gx;
    gyroY += gy;
    gyroZ += gz;
    delay(10);
  }
  
  // 计算偏移量
  accelX /= samples;
  accelY /= samples;
  accelZ /= samples;
  gyroX /= samples;
  gyroY /= samples;
  gyroZ /= samples;
  
  // 设置偏移量
  mpu.setXAccelOffset(-accelX);
  mpu.setYAccelOffset(-accelY);
  mpu.setZAccelOffset(-accelZ);
  mpu.setXGyroOffset(-gyroX);
  mpu.setYGyroOffset(-gyroY);
  mpu.setZGyroOffset(-gyroZ);
}

void radarMode() {
  // 获取摇杆X轴读数控制舵机
  int joystickValue = analogRead(JOYSTICK_X_PIN);
  int servoAngle = map(joystickValue, 0, 1023, 0, 180);
  myServo.write(servoAngle);
  
  // 测量距离
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  
  // 读取脉冲时间并计算距离
  long duration = pulseIn(ECHO_PIN, HIGH);
  float distance = duration * 0.034 / 2; // 距离（厘米）
  
  // 限制距离范围，最大显示为200cm
  distance = constrain(distance, 0, 200);
  
  // 绘制雷达界面
  display.clearDisplay();
  
  // 绘制半圆轮廓
  int centerX = SCREEN_WIDTH / 2;
  int centerY = SCREEN_HEIGHT - 1;
  int radius = SCREEN_HEIGHT - 2;
  
  display.drawFastHLine(0, centerY, SCREEN_WIDTH, SSD1306_WHITE);
  
  // 绘制雷达扫描线
  float radAngle = radians(servoAngle);
  int lineX = centerX + round(radius * cos(PI - radAngle));
  int lineY = centerY - round(radius * sin(PI - radAngle));
  display.drawLine(centerX, centerY, lineX, lineY, SSD1306_WHITE);
  
  // 绘制距离点
  float scaledDistance = map(distance, 0, 200, 0, radius);
  int pointX = centerX + round(scaledDistance * cos(PI - radAngle));
  int pointY = centerY - round(scaledDistance * sin(PI - radAngle));
  display.fillCircle(pointX, pointY, 3, SSD1306_WHITE);
  
  // 画出圆弧（雷达范围指示器）
  for (int i = 0; i <= 180; i += 30) {
    float rad = radians(i);
    int arcX = centerX + round(radius * cos(PI - rad));
    int arcY = centerY - round(radius * sin(PI - rad));
    display.drawPixel(arcX, arcY, SSD1306_WHITE);
  }
  
  // 绘制半圆弧线（距离指示器）
  for (int r = radius/3; r <= radius; r += radius/3) {
    for (int i = 0; i <= 180; i += 5) {
      float rad = radians(i);
      int arcX = centerX + round(r * cos(PI - rad));
      int arcY = centerY - round(r * sin(PI - rad));
      display.drawPixel(arcX, arcY, SSD1306_WHITE);
    }
  }
  
  // 显示角度和距离
  display.setCursor(0, 0);
  display.print(F("角度: "));
  display.print(servoAngle);
  display.print(F(" 距离: "));
  display.print((int)distance);
  display.println(F("cm"));
  
  display.display();
  delay(50);
}

void attitudeMode() {
  // 读取MPU6050数据
  int16_t ax, ay, az;
  int16_t gx, gy, gz;
  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
  
  // 将加速度数据转换为倾角 (简化版)
  float accelX = ax / 16384.0;
  float accelY = ay / 16384.0;
  float accelZ = az / 16384.0;
  
  // 计算姿态角度（只用加速度计）
  roll = atan2(accelY, accelZ) * 180.0 / PI;
  pitch = atan2(-accelX, sqrt(accelY * accelY + accelZ * accelZ)) * 180.0 / PI;
  
  // 这里省略了陀螺仪集成的复杂方法如互补滤波或卡尔曼滤波
  // 实际应用中应当结合陀螺仪数据以获得更准确的姿态角度
  
  // 清除屏幕
  display.clearDisplay();
  
  // 绘制3D立方体
  drawCube(pitch, roll, yaw);
  
  // 显示姿态角度数据
  display.setCursor(0, 0);
  display.print(F("P:"));
  display.print(pitch, 1);
  display.print(F(" R:"));
  display.print(roll, 1);
  display.print(F(" Y:"));
  display.print(yaw, 1);
  
  display.display();
  delay(50);
}

void drawCube(float pitch, float roll, float yaw) {
  // 创建旋转后的顶点副本
  float rotated[8][3];
  
  // 旋转立方体
  for (int i = 0; i < 8; i++) {
    float x = vertices[i][0];
    float y = vertices[i][1];
    float z = vertices[i][2];
    
    // 应用旋转 - X轴 (Pitch)
    float temp_y = y;
    float temp_z = z;
    y = temp_y * cos(radians(pitch)) - temp_z * sin(radians(pitch));
    z = temp_y * sin(radians(pitch)) + temp_z * cos(radians(pitch));
    
    // 应用旋转 - Y轴 (Roll)
    float temp_x = x;
    temp_z = z;
    x = temp_x * cos(radians(roll)) + temp_z * sin(radians(roll));
    z = -temp_x * sin(radians(roll)) + temp_z * cos(radians(roll));
    
    // 应用旋转 - Z轴 (Yaw)
    temp_x = x;
    temp_y = y;
    x = temp_x * cos(radians(yaw)) - temp_y * sin(radians(yaw));
    y = temp_x * sin(radians(yaw)) + temp_y * cos(radians(yaw));
    
    // 保存旋转后的坐标
    rotated[i][0] = x;
    rotated[i][1] = y;
    rotated[i][2] = z;
  }
  
  // 3D -> 2D投影点
  int projections[8][2];
  
  // 将旋转后的3D点投影到2D屏幕
  for (int i = 0; i < 8; i++) {
    float scale = 18.0; // 缩放因子
    float distanceFromViewer = 5.0;
    
    // 透视投影
    float z1 = 1 / (distanceFromViewer - rotated[i][2]);
    float px = rotated[i][0] * z1 * scale;
    float py = rotated[i][1] * z1 * scale;
    
    // 转换到屏幕坐标
    int screenX = SCREEN_WIDTH / 2 + px;
    int screenY = SCREEN_HEIGHT / 2 + py;
    
    projections[i][0] = screenX;
    projections[i][1] = screenY;
  }
  
  // 绘制立方体边缘
  for (int i = 0; i < 12; i++) {
    display.drawLine(
      projections[edges[i][0]][0], projections[edges[i][0]][1],
      projections[edges[i][1]][0], projections[edges[i][1]][1],
      SSD1306_WHITE);
  }
}
```