package group.agile.tech.bdddemo.stepdefs.cucumberdemo;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/features/cucumberdemo",
    plugin = {"pretty", "html:target/cucumber/CucumberDemo.html"},
    extraGlue = "group.agile.tech.bdddemo.common")
public class CucumberDemoIntegrationTest {}
