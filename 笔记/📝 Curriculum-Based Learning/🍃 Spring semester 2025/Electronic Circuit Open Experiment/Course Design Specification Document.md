### Project Overview

The **ESP32 Smart Audio Visualization Terminal v2.0** is an intelligent multimedia information display system based on the ESP32 microcontroller. This project focuses on real-time audio analysis and visualization, while also integrating WiFi connectivity, real-time weather updates, and network time synchronization. With an ST7735 TFT color display, it provides intuitive audio spectrum analysis and environmental information in a user-friendly interface.

### Key Features

- **WiFi Connectivity**: Automatically connects to WiFi to fetch network time and weather data.

- **Real-Time Audio Analysis**: Utilizes FFT for audio signal analysis and visualization.

- **Multi-Interface Display**: Supports multiple display modes including boot screen, connection status, and main interface.

- **Intelligent Update Mechanism**: Optimized display refresh strategy to minimize unnecessary screen updates.

- **Modular Architecture**: Clean separation of display management, network management, and audio analysis modules for maintainability and scalability.

### Hardware Configuration

#### Core Components

1. **ESP32 Development Board**
    - Main controller: ESP32
    - Supports WiFi and Bluetooth
    - Multiple GPIO pins for peripheral connections

2. **ST7735 TFT Display**
    - Resolution: 128x160 pixels
    - Interface: SPI
    - Supports 65K color display

3. **MAX4466 Audio Sensor**
    - High-precision electret microphone
    - Built-in amplifier circuit
    - Outputs analog audio signal

#### Pin Connections

##### ST7735 TFT Display

| ESP32 Pin | TFT Pin | Function              |
|-----------|---------|----------------------|
| GPIO5     | CS      | Chip Select          |
| GPIO4     | RST     | Reset                |
| GPIO2     | DC      | Data/Command Select  |
| GPIO23    | MOSI    | SPI Data Input       |
| GPIO18    | SCLK    | SPI Clock            |
| GPIO15    | BL      | Backlight Control    |
| 3.3V      | VCC     | Power Supply         |
| GND       | GND     | Ground               |

##### MAX4466 Audio Sensor

| ESP32 Pin | Sensor Pin | Function                |
|-----------|------------|------------------------|
| 3.3V      | VCC        | Power Supply           |
| GND       | GND        | Ground                 |
| GPIO36    | OUT        | Audio Output (ADC1_CH0)|

---

### Software Architecture

#### Modular Design

The project adopts a modular structure, divided into the following main components:

```
src/
├── main.cpp                 # Main application file
lib/
├── display_manager/         # Display management module
│   ├── display_manager.h
│   └── display_manager.cpp
├── network_manager/         # Network management module
│   ├── network_manager.h
│   └── network_manager.cpp
└── audio_analyzer/          # Audio analysis module
     ├── audio_analyzer.h
     └── audio_analyzer.cpp
```

#### Dependencies

The project relies on the following third-party libraries:

- **Adafruit ST7735**: Driver for the ST7735 TFT display
- **Adafruit GFX**: Core graphics library
- **ArduinoJson**: JSON data parsing
- **arduinoFFT**: Fast Fourier Transform for audio analysis

#### Core Class Structure

##### 1. DisplayManager

Handles all display-related functionalities.

**Key Responsibilities:**

- Display initialization and control
- Multiple interface modes (boot, connection, main, error)
- Smart update mechanism (only updates when data changes)
- Audio visualization
- Internal clock management

**Key Methods:**

```cpp
bool begin();                                    // Initialize display
void showBootScreen();                           // Show boot screen
void showMainInterface();                        // Show main interface
void updateTimeOnly(const char* time);           // Smart time update
void updateMainAudioVisualization();             // Update audio visualization
```

##### 2. NetworkManager

Manages all network-related functionalities.

**Key Responsibilities:**

- WiFi connection management
- Network time synchronization (NTP)
- Weather information retrieval (OpenWeatherMap API)
- Network status monitoring
- Auto-reconnect mechanism

**Data Structures:**

```cpp
struct WeatherData {
     String city;
     String description;
     int temperature;
     int humidity;
     String icon;
     bool valid;
};

struct TimeData {
     int year, month, day;
     int hour, minute, second;
     String formatted;
     bool valid;
};
```

###### Connection State Management

```cpp
class NetworkManager {
private:
     enum WiFiState {
          WIFI_IDLE,          // Idle, not connected
          WIFI_CONNECTING,    // Attempting to connect
          WIFI_CONNECTED,     // Connected
          WIFI_DISCONNECTED,  // Disconnected
          WIFI_FAILED         // Connection failed
     };

     WiFiState currentState = WIFI_IDLE;
     unsigned long lastConnectionAttempt = 0;
     int connectionRetries = 0;
     const int MAX_RETRIES = 3;
     const unsigned long CONNECTION_TIMEOUT = 10000; // 10 seconds timeout
};
```

1. The `WiFiState` enum defines all possible WiFi connection states.

2. The `currentState` variable (initialized as `WIFI_IDLE`) tracks the current connection status for logic control and state transitions.

3. Connection attempt variables:
     - `lastConnectionAttempt`: Timestamp of the last connection attempt, used for timeout checks.
     - `connectionRetries`: Number of connection attempts made.
     - `MAX_RETRIES`: Maximum number of retries to prevent infinite loops.
     - `CONNECTION_TIMEOUT`: Timeout duration (10 seconds); if exceeded, the connection is considered failed.

###### Intelligent Connection Strategy

```cpp
bool NetworkManager::connect() {
    if (currentState == WIFI_CONNECTING) {
        return false; // Prevent duplicate connections
    }
    
    Serial.print("Connecting to: ");
    Serial.println(ssid);
    
    // Set WiFi mode and power
    WiFi.mode(WIFI_STA);
    WiFi.setTxPower(WIFI_POWER_19_5dBm); // Maximum power
    
    // Optimize connection parameters
    WiFi.setAutoConnect(true);
    WiFi.setAutoReconnect(true);
    WiFi.persistent(true); // Save connection info to Flash
    
    currentState = WIFI_CONNECTING;
    lastConnectionAttempt = millis();
    
    WiFi.begin(ssid, password);
    
    // Non-blocking connection check
    return waitForConnection();
}

bool NetworkManager::waitForConnection() {
    unsigned long startTime = millis();
    
    while (WiFi.status() != WL_CONNECTED) {
        if (millis() - startTime > CONNECTION_TIMEOUT) {
            currentState = WIFI_FAILED;
            connectionRetries++;
            Serial.println("Connection timeout!");
            return false;
        }
        
        // Show connection progress
        static int dots = 0;
        if (millis() % 500 == 0) {
            Serial.print(".");
            dots++;
            if (dots > 20) {
                Serial.println();
                dots = 0;
            }
        }
        
        delay(100);
    }
    
    currentState = WIFI_CONNECTED;
    connectionRetries = 0;
    
    // Post-connection configuration
    configureConnection();
    return true;
}
```

**Core Goals of the Intelligent Connection Strategy:**

1. **Prevent Duplicate Connections**
    - At the start of `connect()`, check if the current state is `WIFI_CONNECTING`. If so, return `false` immediately to avoid redundant connection attempts and potential resource conflicts.

2. **Optimized Connection Parameters**
    - `WiFi.mode(WIFI_STA)`: Set to station mode, ensuring the device acts only as a client.
    - `WiFi.setTxPower(WIFI_POWER_19_5dBm)`: Set transmission power to maximum for better signal strength and connection reliability.
    - `WiFi.setAutoConnect(true)` and `WiFi.setAutoReconnect(true)`: Enable auto-connect and auto-reconnect for seamless recovery after disconnection.
    - `WiFi.persistent(true)`: Save connection info to Flash for automatic reconnection after reboot.

3. **Non-blocking Connection with Timeout**
    - Use `waitForConnection()` for non-blocking connection checks, preventing the main thread from freezing.
    - `CONNECTION_TIMEOUT` limits the maximum wait time. If exceeded, switch to `WIFI_FAILED` and increment retry count for later reconnection or alerting.

4. **Connection Progress Feedback**
    - Print dots periodically to the serial console during connection attempts for intuitive progress feedback, aiding development and debugging.

5. **Post-connection Configuration**
    - On successful connection, call `configureConnection()` for further setup (e.g., IP acquisition, service initialization), ensuring the network environment is ready.

---

###### Connection Quality Optimization

```cpp
void NetworkManager::configureConnection() {
    // Retrieve connection info
    localIP = WiFi.localIP().toString();
    connectedSSID = WiFi.SSID();
    signalStrength = WiFi.RSSI();
    macAddress = WiFi.macAddress();

    Serial.println("WiFi connected successfully!");
    Serial.print("IP: ");
    Serial.println(localIP);
    Serial.print("RSSI: ");
    Serial.print(signalStrength);
    Serial.println(" dBm");
    
    // Trigger connection success callback
    if (onConnected) {
        onConnected();
    }
}
```

**1. Connection Information Collection & Analysis**

- `localIP = WiFi.localIP().toString()`: Get the device's LAN IP address for network communication and troubleshooting.
- `connectedSSID = WiFi.SSID()`: Get the current WiFi network name to confirm correct network connection.
- `signalStrength = WiFi.RSSI()`: Get WiFi signal strength (dBm). Typical ranges:
    - -30 to -50 dBm: Excellent
    - -50 to -60 dBm: Good
    - -60 to -70 dBm: Fair
    - -70 to -80 dBm: Weak
    - Below -80 dBm: Very weak
- `macAddress = WiFi.macAddress()`: Get the device's MAC address for identification and security.

**2. Advanced Connection Quality Monitoring**

```cpp
// Connection quality assessment
String NetworkManager::getConnectionQuality() {
    if (signalStrength >= -50) return "Excellent";
    else if (signalStrength >= -60) return "Good";
    else if (signalStrength >= -70) return "Fair";
    else if (signalStrength >= -80) return "Weak";
    else return "Very Weak";
}

// Connection stability check
bool NetworkManager::isConnectionStable() {
    if (signalStrength < -80) {
        Serial.println("Warning: Weak signal detected!");
        return false;
    }
    if (localIP == "0.0.0.0" || localIP.isEmpty()) {
        Serial.println("Warning: Invalid IP address!");
        return false;
    }
    return true;
}
```

**3. Smart Reconnection Mechanism**

```cpp
void NetworkManager::monitorConnection() {
    if (millis() - lastMonitorTime < MONITOR_INTERVAL) return;
    lastMonitorTime = millis();
    
    if (WiFi.status() == WL_CONNECTED) {
        int rssi = WiFi.RSSI();
        if (rssi < WEAK_SIGNAL_THRESHOLD) {
            consecutiveWeakSignals++;
            if (consecutiveWeakSignals >= MAX_WEAK_COUNT) {
                Serial.println("Signal too weak, reconnecting...");
                reconnect();
            }
        } else {
            consecutiveWeakSignals = 0;
        }
        signalStrength = rssi;
    } else {
        Serial.println("Connection lost, reconnecting...");
        reconnect();
    }
}
```

**4. Callback Mechanism**

`if (onConnected) { onConnected(); }` 

- **Decoupling**: Separates network management from business logic.
- **Asynchronous Handling**: Allows other modules to initialize after a successful connection.
- **Extensibility**: Multiple callbacks can be registered for different post-connection actions.

**5. Diagnostic Output**

Serial output provides valuable diagnostics for debugging and monitoring.

