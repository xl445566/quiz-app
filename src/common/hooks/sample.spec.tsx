/// <reference types="cypress" />

describe("test", () => {
  it("visit", () => {
    cy.visit("/");
    cy.get("h1").contains("코드 설명");
  });
});
