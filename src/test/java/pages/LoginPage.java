package pages;

import helpers.Common;

public class LoginPage {
    private String usernameField = "test-Username";
    private String passwordField = "test-Password";
    private String loginBtn = "test-LOGIN";
    private String errorMessage = "test-Error message";
    private String botImg = "android.widget.ImageView";

    Common common = new Common();

    public void seeBotImg(){
        common.findClassAndRead(botImg, "Bot image is displayed");
    }

    public void inputUsername(String username){
        common.clearAccssId(usernameField);
        common.sendKeysAccssId(usernameField, username);
    }

    public void inputPassword(String password){
        common.clearAccssId(passwordField);
        common.sendKeysAccssId(passwordField, password);
    }

    public void clickLogin(){
        common.clickAccssId(loginBtn);
    }

    public void readErrorMessage(String expected){
        common.findAccssIdAndRead(errorMessage, expected);
    }
}