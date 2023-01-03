package setups;

import com.testinium.deviceinformation.exception.DeviceNotFoundException;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;
import java.net.MalformedURLException;

public class Hook extends DriverSetup{
    Capabilities capabilities = new Capabilities();

    @Before
    public void before() throws MalformedURLException {
        System.setProperty("device", "android");
//        startAppium();
        setDriver();
    }

    @After
    public void after(){
        getDriverInstance().quit();
//        stopAppium();
    }
}
