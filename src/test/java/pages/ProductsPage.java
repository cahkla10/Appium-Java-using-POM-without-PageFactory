package pages;

import helpers.Common;
import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public class ProductsPage {

    private By productTitlePage = By.xpath("//*[@text='PRODUCTS']");
    private MobileBy productName = (MobileBy) MobileBy.AccessibilityId("test-Item title");
    private MobileBy productPrice = (MobileBy) MobileBy.AccessibilityId("test-Price");
    private MobileBy addToCartBtn = (MobileBy) MobileBy.AccessibilityId("test-ADD TO CART");
    private MobileBy removeBtn = (MobileBy) MobileBy.AccessibilityId("test-REMOVE");

    Common common = new Common();

    public void readTitlePage(String exTitle) {
        common.verifyText(productTitlePage, exTitle);
    }
}
