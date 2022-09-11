# agree among tester, developer and PO, replace test case
Feature: Landing in page

  @account
  Scenario: Login my account
      Given I have previously created a username: kay
      And I have previously created a password: okay
      When I enter my username correctly
      And I enter my passwrod correctly
      And I click on the button "login"
      Then I got a feedback "login successfully"
 