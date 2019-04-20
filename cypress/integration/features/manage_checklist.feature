Feature: Manage Checklist
    Basic operations for checklist

@create
Scenario: create a checklist
    Given I create a card with default values
        And I search for the created card
    When I add "Checklist" to card
        And I set the following values:
            | Field | Value |
            | title | tasks |
        And I add the following items to the checklist:
            | Item  |
            | item0 |
            | item1 |
            | item2 |
    Then I validate the checklist is created