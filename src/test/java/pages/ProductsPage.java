package pages;

import helpers.Common;

public class ProductsPage {

    private String productTitlePage = "//*[@text='PRODUCTS']";
    private String productName = "test-Item title";
    private String productPrice = "test-Price";
    private String addToCartBtn = "test-ADD TO CART";
    private String removeBtn = "test-REMOVE";

    Common common = new Common();

    public void readTitlePage(String exTitle) {
        common.verifyXpathText(productTitlePage, exTitle);
    }
}