package group.agile.tech.bdddemo.stepdefs.cucumberforjava;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/features/cucumberforjava",
    plugin = {"pretty", "summary", "html:target/cucumber/CucumberForJava.html"},
    extraGlue = "group.agile.tech.bdddemo.common",
    snippets = SnippetType.CAMELCASE)
public class CucumberForJavaIntegrationTest {}
