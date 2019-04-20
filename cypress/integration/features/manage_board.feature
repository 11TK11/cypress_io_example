Feature: Manage Board
   Basic operations for Boards

@create
Scenario: Create a Board
   When I click on create a new board
      And I set the following values:
         | Field   | Value    |
         | title   | My title |
         | privacy | Public   |
   Then I validate the board is created

@delete
Scenario: Delete a custom board
   Given I create a board with the following values:
      | Field        | Value    |
      | name         | My Board |
      | defaultLists | false    |
      And I search for the created board
   When I click option "More" on right menu
      And I click option "Close Board" on right menu
      And I click on close button in the "Close Board" popup
      And I click on "Permanently Delete Board…" link on "Close" page
      And I click on delete button in the "Delete Board" popup
   Then I validate the "Board not found." title message exist on "Delete" page
      And I validate the "This board may be private. If someone gave you this link, they may need to invite you to one of their boards or teams." description message exist on "Delete" page
   When I go "Boards" page
   Then I validate the created board doesn´t exist

@delete
Scenario: Delete a default board
   Given I create a board with required values
      And I search for the created board
   When I click option "More" on right menu
      And I click option "Close Board" on right menu
      And I click on close button in the "Close Board" popup
      And I click on "Permanently Delete Board…" link on "Close" page
      And I click on delete button in the "Delete Board" popup
   Then I validate the "Board not found." title message exist on "Delete" page
      And I validate the "This board may be private. If someone gave you this link, they may need to invite you to one of their boards or teams." description message exist on "Delete" page
   When I go "Boards" page
   Then I validate the created board doesn´t exist