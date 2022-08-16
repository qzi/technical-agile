# The AC of story
# Develop the ac with tester, po and developers and make a agreement

Feature: Landing in page

    Scenario: Login my account
        Given I have previously created a username: kay
        And I have previously created a password: okay
        When I enter my username correctly
        And I enter my passwrod correctly
        And I click on the button "login"
        Then I got a feedback "login successfully"