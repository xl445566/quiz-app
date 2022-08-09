describe("problem 페이지", () => {
  it("렌더링 테스트", () => {
    cy.visit("/problem");

    cy.url().should("include", "/problem");

    cy.get("title").contains("문제 풀이 중...");

    cy.get("button").should("have.length", 0);
  });

  it("문제 풀이 테스트", () => {
    cy.get("[data-cy=answer0]").click();

    cy.get("button").should("have.length", 1);

    cy.get("button").contains("다음 문제");

    cy.get("button").contains("다음 문제").click();

    cy.get("button").should("have.length", 0);
  });

  it("문제 풀이 종료 테스트", () => {
    cy.reload();

    cy.wait(1000);

    for (let i = 0; i < 10; i++) {
      cy.wait(500);

      cy.get("[data-cy=answer0]").click();

      if (i < 9) {
        cy.get("button").contains("다음 문제").click();
      } else {
        cy.get("button").contains("결과 보기");

        cy.get("button").contains("결과 보기").click();

        cy.url().should("include", "/chart");
      }
    }

    cy.wait(1000);

    cy.get("button").contains("처음 으로").click();
  });
});
