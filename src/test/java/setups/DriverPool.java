package setups;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class DriverPool {
    private static AppiumDriver driverInstance;

    public static AppiumDriver getDriverInstance() {
        return DriverPool.driverInstance;
    }

    public void setDriverInstance(AppiumDriver instance) {
        DriverPool.driverInstance = instance;
    }
}
