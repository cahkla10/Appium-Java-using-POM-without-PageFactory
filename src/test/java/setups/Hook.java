package setups;

import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;
import com.testinium.deviceinformation.exception.DeviceNotFoundException;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hook extends DriverSetup{
    Capabilities capabilities = new Capabilities();

    @Before
    public void startDriver() throws IOException, DeviceNotFoundException {
        System.setProperty("device", "android");
        capabilities.android();
        setDriver();
        startAppium();
    }

    @After
    public void stopDriver(){
        getDriverInstance().quit();
        stopAppium();
    }
}
