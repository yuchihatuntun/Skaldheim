### Software and Drivers

- **Development environment**: <span style="background:rgba(252, 163, 180, 0.55)">Platformio</span> plugin for Visual Studio Code

- **Connect Driver**: [STSW-LINK009](https://vip.123pan.cn/1823290578/14142361)

### Environment configuration & test items

We open platformio and create a new project (as for downloading vscode and installing the platformio plug-in, please go to Bilibili to search for it, there are very detailed tutorials and free installation packages)

<p align="center">
    <img src="1.png" alt="alt text" width="400"/>
</p>

This "`BluePill`" is the minimum system development board. Note that there is also a board option "`STM32F103C8`" in the options, which is not suitable for our board


After the project is built, we will see the project directory. What we mainly need to edit is the `main.cpp` file in the "`src`" folder and the `platformio.ini` file.

<p align="center">
    <img src="2.png" alt="alt text" width="200"/>
</p>

#### STSW-LINK009

Download the installation package from the official website or click the link I provided (downloading from the official website may require registration and login, etc., so it is more convenient here)

Then connect the STM32 development board and ST-LINK as follows

```
board -- linker
3V3 ---- 3V3
GND ---- GND
SWO ---- SWDIO
SWCLK -- SWCLK
```
>[!warning] Be careful not to try to connect from the other end of the development board (UART), which is only responsible for power supply, not serial communication function

Then open the device manager of the computer and click the "`Universal Serial Bus Device`" option. If there is an "`ST ST-LINK`" device in it, congratulations, your development board can be **burned**.

#### platformio.ini

My development board configuration is like this

```ini
[env:bluepill_f103c8]
platform = ststm32
board = bluepill_f103c8
framework = arduino
upload_protocol = stlink
debug_tool = stlink
upload_flags = 
    -c set CPUTAPID 0x2ba01477
```
The last item was because such an error occurred at that time

```
Warn : UNEXPECTED idcode: 0x2ba01477
Error: expected 1 of 1: 0x1ba01477
```

This error means that the chip ID read by **OpenOCD** (`0x2ba01477`) does not match the ID it expects (`0x1ba01477`).

#### main.cpp

After the above configuration, we have preliminarily completed the configuration of the environment. Now let's design a small program to test it.

```cpp
#include <Arduino.h>

#define LED_PIN PC13

void setup() {
  // initialize the LED pin as an output
  pinMode(LED_PIN, OUTPUT);
  // initialize serial communication at 9600 bps
  Serial.begin(9600);
  Serial.println("STM32F103C8T6 LED测试");
}

void loop() {
  // Turn on the LED (LED is on when PC13 is LOW)
  digitalWrite(LED_PIN, LOW);
  Serial.println("LED 开");
  delay(500);  // delay 500ms
  
  // Turn off the LED (LED is off when PC13 is HIGH)
  digitalWrite(LED_PIN, HIGH);
  Serial.println("LED 关");
  delay(500);  // delay 500ms
}
```
We tested this using the onboard LED controlled by PC13, the code is as above.

