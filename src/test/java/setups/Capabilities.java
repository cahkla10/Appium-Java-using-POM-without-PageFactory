package setups;

import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;
import com.testinium.deviceinformation.DeviceInfo;
import com.testinium.deviceinformation.DeviceInfoImpl;
import com.testinium.deviceinformation.device.DeviceType;
import com.testinium.deviceinformation.exception.DeviceNotFoundException;
import com.testinium.deviceinformation.model.Device;
import helpers.GlobalVariables;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.IOException;

public class Capabilities {

    public DesiredCapabilities android() throws IOException, DeviceNotFoundException {
        DesiredCapabilities androidCapabilities = new DesiredCapabilities();
        DeviceInfo deviceInfo = new DeviceInfoImpl(DeviceType.ALL);
        Device device = deviceInfo.getFirstDevice();

        System.out.println("=======CAPABILITIES========");
        System.out.println("Platform Name: " + device.getDeviceProductName());
        System.out.println("Platform Version: " + device.getProductVersion());
        System.out.println("Device Name: " + device.getModelNumber());
        System.out.println("App Path: " + GlobalVariables.USERDIR + "/src/test/resources/app/AndroidSauceLabs.apk");


        androidCapabilities.setCapability("platformName", device.getDeviceProductName()); //OS which tested
        androidCapabilities.setCapability("platformVersion", device.getProductVersion()); //Android version
        androidCapabilities.setCapability("deviceName", "emulator-5554"); //device serial number
        androidCapabilities.setCapability("app", GlobalVariables.USERDIR + "/src/test/resources/app/AndroidSauceLabs.apk");
        androidCapabilities.setCapability("appPackage", "com.swaglabsmobileapp"); //apk package (can get from inspector)
        androidCapabilities.setCapability("clearSystemFiles", "true"); //option for caching files
        androidCapabilities.setCapability("noReset", "false"); //option for app will not reseting
        androidCapabilities.setCapability("appWaitActivity","*"); //option for run in first activity
        androidCapabilities.setCapability("autoGrantPermissions","true"); //option for auto Allow in each of permission pop up

        return androidCapabilities;
    }
}
