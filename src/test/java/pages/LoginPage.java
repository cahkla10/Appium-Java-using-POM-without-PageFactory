package pages;

import helpers.Common;
import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public class LoginPage {
    private MobileBy usernameField = (MobileBy) MobileBy.AccessibilityId("test-Username");
    private MobileBy passwordField = (MobileBy) MobileBy.AccessibilityId("test-Password");
    private MobileBy loginBtn = (MobileBy) MobileBy.AccessibilityId("test-LOGIN");
    private MobileBy errorMessage = (MobileBy) MobileBy.AccessibilityId("test-Error message");
    private By botImg = By.className("android.widget.ImageView");

    Common common = new Common();

    public void seeBotImg(){
        common.findAndRead(botImg, "Bot image is displayed");
    }

    public void inputUsername(String username){
        common.clear(usernameField);
        common.sendKeys(usernameField, username);
    }

    public void inputPassword(String password){
        common.clear(passwordField);
        common.sendKeys(passwordField, password);
    }

    public void clickLogin(){
        common.click(loginBtn);
    }

    public void readErrorMessage(String expected){
        common.findAndRead(errorMessage, expected);
    }
}
