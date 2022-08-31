Feature: Registration Screen

Scenario: Complete and valid data
    When I am on the home page
    Then I click the register button
    Then the registration screen will open
    When I fill in the data correctly
    When I select the delivery method
    When I add my driver's license photo
    Then I will click on the finalize registration button
    Then the confirmation window should appear

Scenario: Registration without data
    When I am on the home page
    Then I click the register button
    Then the registration screen will open
    When the fields are empty
    When I do not select the delivery method
    When I don't add my driver's license photo
    Then I will click on the finalize registration button
    Then the error messages should appear