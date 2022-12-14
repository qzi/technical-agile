package group.agile.tech.bdddemo.stepdefs.cucumberforjava;

import static org.junit.Assert.assertEquals;
import group.agile.tech.bdddemo.common.cucumberforjava.Checkout;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CucumberForJavaStepDefinitions {

  Checkout checkout;
  int bananaPrice = 0;

  @Given("^the price of a \"(.*?)\" is (\\d+)c$")
  public void thePriceOfAIsC(String name, int price) throws Throwable {
    bananaPrice = price;
  }

  @When("^I checkout (\\d+) \"(.*?)\"$")
  public void iCheckout(int itemCount, String itemName) throws Throwable {
    checkout = new Checkout();
    checkout.add(itemCount, bananaPrice);
  }

  @Then("^the total price should be (\\d+)c$")
  public void theTotalPriceShouldBeC(int total) throws Throwable {
    assertEquals(total, checkout.total());
  }
}
