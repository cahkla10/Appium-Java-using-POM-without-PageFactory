package helpers;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import setups.DriverSetup;

import java.util.List;
import static org.junit.Assert.assertEquals;

public class Common {
    WebDriverWait wait = new WebDriverWait(DriverSetup.getAppiumDriver(), GlobalVariables.TIMEOUT);

    public void delay(int delay) throws InterruptedException {
        Thread.sleep(delay);
    }

    public void clear(MobileBy element){
        wait.until(ExpectedConditions.visibilityOfElementLocated(element)).clear();
    }

    public void click(MobileBy element){
        wait.until(ExpectedConditions.visibilityOfElementLocated(element)).click();
    }

    public void sendKeys(MobileBy element, String text){
        wait.until(ExpectedConditions.visibilityOfElementLocated(element)).sendKeys(text);
    }

    public void findAndRead(By element, String outputText){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(element));
        if(list.size() > 0){
            System.out.println(outputText);
        }
    }

    public void findAndClick(MobileBy element, String text){
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(element));
        for(WebElement aList : list){
            if(aList.getText().contains(text)){
                aList.click();
                break;
            }
        }
    }

    public void verifyText(By element, String expected) {
        List<WebElement> list = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(element));
        if(list.size() > 0){
            assertEquals(expected,list.get(0).getText());
        }
    }
}
