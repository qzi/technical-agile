package group.agile.tech.bdddemo.stepdefs.cucumberforjava;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/cucumberforjava",
        plugin = {"pretty", "html:target/cucumber/CucumberForJava.html"},
        extraGlue = "group.agile.tech.bdddemo.common")
public class CucumberForJavaIntegrationTest {

}
