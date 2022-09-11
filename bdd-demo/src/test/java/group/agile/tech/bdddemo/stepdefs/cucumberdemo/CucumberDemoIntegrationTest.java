package group.agile.tech.bdddemo.stepdefs.cucumberdemo;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/features/cucumberdemo",
    plugin = {"pretty", "summary", "html:target/cucumber/CucumberDemo.html"},
    extraGlue = "group.agile.tech.bdddemo.common",
    snippets = SnippetType.CAMELCASE)
public class CucumberDemoIntegrationTest {}
