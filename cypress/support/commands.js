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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js
import 'cypress-if';

Cypress.Commands.add('removeLoadingAndScreenshot', (screenshotName, options) => {
    cy.get('body').then(($body) => {
        // 删除 class 为 loading 的元素

        const loadingElements = $body.find('.we-toast');
        if (loadingElements.length > 0) {
            loadingElements.remove();
        }
    });

    // 等待一段时间以确保元素已经删除（可选）
    cy.wait(100);

    // 截图
    cy.screenshot(screenshotName, options);
});

