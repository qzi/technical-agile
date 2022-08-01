package group.agile.tech.bdddemo.controller.cucumberforjava;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("bdd")
public class CucumberForJavaController {

    Logger logger = LoggerFactory.getLogger(CucumberForJavaController.class);

    @GetMapping("/checkout")
    public void checkout() {
        logger.info("Checkout Test");
    }

}
