describe("test", () => {
  it("visit", () => {
    cy.visit("/");
    cy.get("h1").should("eq", "퀴즈 설명");
  });
});
