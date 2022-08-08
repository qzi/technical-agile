Feature: Landing in page

Scenario: Login my account
    Given I have previously created a username: "username"
    And I have previously created a password: "password"
    When I enter my username correctly
    And I enter my passwrod correctly
    And I click on the button "login"
    Then I got a feedback "login successfully"