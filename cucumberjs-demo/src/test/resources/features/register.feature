Feature: Landing in page

  Scenario: register account
    Given I am in register page
    And I have provided below information to create an account
      | userName    | random    |
      | password    | 123456789 |
      | firstName   | random    |
      | lastName    | random    |
      | phoneNumber | random    |
      | email       | random    |
      | city        | random    |
      | zipcode     | random    |
      | country     | mars      |
    When I submit the details
    Then the registration should be successful
