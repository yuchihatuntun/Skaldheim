### 实验内容（1）——示例代码
（文档中未提供具体代码，可能需要根据实验要求编写）

### 实验内容（2）——闪烁LED
```cpp
int ledPin = 13; // 定义数字13接口

void setup() {
    pinMode(ledPin, OUTPUT); // 定义小灯接口为输出接口
}

void loop() {
    digitalWrite(ledPin, HIGH); // 点亮小灯
    delay(1000); // 延时1秒
    digitalWrite(ledPin, LOW); // 熄灭小灯
    delay(1000); // 延时1秒
}
```

### 实验内容（3）——串口控制Hello World
```cpp
int val; // 定义变量val
int ledpin = 13; // 定义数字接口13

void setup() {
    Serial.begin(9600); // 设置波特率为9600
}

void loop() {
    val = Serial.read(); // 读取PC机发送给Arduino的指令
    if (val == 'R') { // 判断接收到的指令或字符是否是“R”
        digitalWrite(ledpin, HIGH); // 点亮数字13
        delay(500);
        digitalWrite(ledpin, LOW); // 熄灭数字13
        delay(500);
        Serial.println("Hello World!"); // 显示“Hello World！”字符串
    }
}
```

### 实验内容（4）——双色LED实验
```cpp
int redPin = 12;   // 红色LED连接的引脚（数字12）
int greenPin = 11; // 绿色LED连接的引脚（数字11）

void setup() {
    pinMode(redPin, OUTPUT);    // 配置红色引脚为输出
    pinMode(greenPin, OUTPUT);  // 配置绿色引脚为输出
}

void loop() {
    // 红色亮1秒，绿色熄灭
    digitalWrite(redPin, HIGH);
    digitalWrite(greenPin, LOW);
    delay(1000);

    // 绿色亮1秒，红色熄灭
    digitalWrite(redPin, LOW);
    digitalWrite(greenPin, HIGH);
    delay(1000);
}
```
### 实验内容（5）——RGB（光学）-LED显示实验
（文档中未提供具体代码，可能需要根据实验要求编写）

### 实验内容（6）——串口控制RGB-LED实验
（文档中未提供具体代码，可能需要根据实验要求编写）


