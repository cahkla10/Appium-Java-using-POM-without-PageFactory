package pages;

import setups.DriverPool;

public class LoginPage {
    private String usernameField = "test-Username";
    private String passwordField = "test-Password";
    private String loginBtn = "test-LOGIN";

    public void inputUsername(){
        DriverPool.getDriverInstance().findElementByAccessibilityId(usernameField).sendKeys("standard_user");
    }

    public void inputPassword(){
        DriverPool.getDriverInstance().findElementByAccessibilityId(passwordField).sendKeys("secret_sauce");
    }

    public void clickLogin(){
        DriverPool.getDriverInstance().findElementByAccessibilityId(loginBtn).click();
    }
}
