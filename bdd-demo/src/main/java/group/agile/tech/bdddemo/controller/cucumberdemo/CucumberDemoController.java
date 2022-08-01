package group.agile.tech.bdddemo.controller.cucumberdemo;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("bdd")
public class CucumberDemoController {

    Logger logger = LoggerFactory.getLogger(CucumberDemoController.class);

    @GetMapping("/smoke-test")
    public void smokeTest() {
        logger.info("Smoke Test");
    }

    @GetMapping("/smoke-test-json")
    @ResponseBody
    public String smokeTestJson() {
        
        return "{'key':'value'}";
    }
}
