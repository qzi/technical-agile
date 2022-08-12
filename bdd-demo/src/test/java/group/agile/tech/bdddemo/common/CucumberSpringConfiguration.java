package group.agile.tech.bdddemo.common;

import io.cucumber.spring.CucumberContextConfiguration;
import org.junit.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CucumberSpringConfiguration {

  private static final Logger logger = LoggerFactory.getLogger(CucumberSpringConfiguration.class);

  @Before
  public void setUp() {
    logger.info(
        "-------------- Spring Context Initialized For Executing Cucumber Tests --------------");
  }
}
