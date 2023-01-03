package setups;

import com.testinium.deviceinformation.exception.DeviceNotFoundException;
import helpers.GlobalVariables;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.service.local.AppiumDriverLocalService;

import java.io.IOException;
import java.net.URL;

public class DriverSetup extends DriverPool{
    private static final String DEVICE = System.getProperty("device");
    private AppiumDriverLocalService service = AppiumDriverLocalService.buildDefaultService();

    public void setDriver() throws IOException, DeviceNotFoundException {
        switch (DEVICE.toLowerCase()){
            case "android":
                Capabilities capabilities = new Capabilities();
                AppiumDriver driver = new AndroidDriver(new URL(GlobalVariables.APPIUMURL), capabilities.android());
                setDriverInstance(driver);
                System.out.println("Driver: " + driver + "is running!");
                break;
        }
    }

    public void startAppium(){
        service.start();
        String service_url = service.getUrl().toString();
        System.out.println("Appium Service: " + service_url + "is running!");
    }

    public void stopAppium(){
        service.stop();
        String service_url = service.getUrl().toString();
        System.out.println("Appium Service: " + service_url + "is stopped!");
    }
}
