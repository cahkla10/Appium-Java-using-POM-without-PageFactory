package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.LoginPage;

public class LoginStep {
    LoginPage loginPage = new LoginPage();

    @Given("^user input username \"([^\"]*)\"$")
    public void userInputUsername(String arg1) throws Throwable {
        loginPage.inputUsername();
    }

    @And("^user input password \"([^\"]*)\"$")
    public void userInputPassword(String arg1) throws Throwable {
        loginPage.inputPassword();
    }

    @And("^user click Login button$")
    public void userClickLoginButton() throws Throwable {
        loginPage.clickLogin();
        Thread.sleep(5000);
    }

    @Then("^user redirected to Product page$")
    public void userRedirectedToProductPage() throws Throwable {

    }

    @Then("^warning message appear \"([^\"]*)\"$")
    public void warningMessageAppear(String arg1) throws Throwable {

    }
}