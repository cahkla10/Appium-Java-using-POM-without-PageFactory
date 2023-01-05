package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.LoginPage;
import pages.ProductsPage;

public class LoginStep {
    LoginPage loginPage = new LoginPage();
    ProductsPage productsPage = new ProductsPage();

    @Given("^user input username \"([^\"]*)\"$")
    public void userInputUsername(String username) {
        loginPage.inputUsername(username);
    }

    @And("^user input password \"([^\"]*)\"$")
    public void userInputPassword(String password) {
        loginPage.inputPassword(password);
    }

    @And("^user click Login button$")
    public void userClickLoginButton() {
        loginPage.clickLogin();
    }

    @Then("^user redirected to \"([^\"]*)\" page$")
    public void userRedirectedToProductPage(String exTitle) {
        productsPage.readTitlePage(exTitle);
    }

    @Then("^warning message appear \"([^\"]*)\"$")
    public void warningMessageAppear(String expected) {
        loginPage.readErrorMessage(expected);
    }
}