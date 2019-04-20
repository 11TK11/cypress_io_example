Feature: Manage Card
    Basic operations for cards

@create @move
Scenario Outline: Create card and move it
    Given I create a board with required values
        And I search for the created board
    When I add a card in the "<originList>" list
        And I set the following values:
            | Field | Value       |
            | title | Card Title1 |
    Then I validate the card is created
    When I move the created card to "<arriveList>" list

Examples:
| Case | originList | arriveList |
| 1    | To Do      | Done       |
| 2    | Doing      | Done       |
| 3    | Doing      | To Do      |
| 4    | To Do      | Doing      |