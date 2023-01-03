package setups;

import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;
import com.testinium.deviceinformation.exception.DeviceNotFoundException;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;
import java.net.MalformedURLException;

public class Hook extends DriverSetup{
    @Before
    public void before() throws IOException, DeviceNotFoundException {
        System.setProperty("device", "android");
        startAppium();
        setDriver();
    }

    @After
    public void after(){
        getDriverInstance().quit();
        stopAppium();
    }
}
