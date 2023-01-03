package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.LoginPage;

public class BackgroundStep {
    LoginPage loginPage = new LoginPage();

    @Given("^user launch the Sauce Demo app$")
    public void userLaunchTheSauceDemoApp() throws Throwable {

    }

    @Then("^Sauce Demo app will displayed$")
    public void sauceDemoAppWillDisplayed() throws Throwable {

    }
}
