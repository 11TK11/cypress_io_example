// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import Navigation from "../integration/pages/Navigation";
import Login from "../integration/pages/Login";
import Card from "../integration/pages/card_pages/Card";
import JsonCreator from "./utils/JsonCreator";

/**
 * Login to the product using the users of users.json. 
 * @param userType to select which user will be used.
 */
Cypress.Commands.add('login', (userType) => {

    cy.visit(Navigation.root);
    cy.get(Login.loginBtn.selector).contains(Login.loginBtn.text)
      .click()

    cy.fixture('users.json').then((userList) => {
        try {
            let user = Cypress._.find(userList, function(userInfo) { return userType == userInfo.type ? userInfo : undefined;});            

                cy.get(Login.userTxt)
                  .type(user.email);

                cy.get(Login.passwordTxt)
                  .type(user.password);

                cy.get(Login.loginForm)
                  .submit();

          } catch (error) {
              cy.log('Login error: ' + error.message)
          }
    });
});

/**
 * makes api requests and validate the status.
 * @param action POST, GET, DELETED.
 * @param endpoint it comes from api.
 * @param body depend of the endpoint.
 */
Cypress.Commands.add('api_request', (action, endpoint, body) => {
    cy.fixture('api_config.json').then((apiJson) => {
        cy.request(action, apiJson.url.concat(endpoint), JsonCreator.jsonRequest(body, apiJson)).then((response) => {
                expect(response.status).to.eq(200);
        });
    });
});

/**
 * drag and drop for card.
 * @param title title of the card.
 * @param newListName name of the list where it will be dropped  
 */
Cypress.Commands.add('move_card', (title, newListName) => {
  let cardX, newlistX;
    cy.get(Card.cardTitle).contains(title).then((card)=>{
        cardX = card.offset().left;

        cy.get(Card.list).contains(newListName).parent('div').parent('div')
          .children(Card.cardLocation).then((list)=>{

              newlistX = list.offset().left;
              // method for drag and drop cards.
              cy.get(Card.cardTitle).contains(title).trigger('mousedown', { which: 1, pageX: cardX, pageY: 100 })
                .trigger('mousemove', { which: 1, pageX: newlistX, pageY: 100 })
                .trigger('mouseup');
      });
    });
});