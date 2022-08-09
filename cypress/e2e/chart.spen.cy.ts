describe("chart 페이지", () => {
  beforeEach(() => {
    cy.wait(1000);

    cy.visit("/chart");
  });

  it("렌더링 테스트", () => {
    cy.wait(1000);

    cy.url().should("include", "/chart");

    cy.get("title").contains("결과");

    cy.get("h1").contains("결과");

    cy.get("svg").should("have.length", 1);

    cy.get("circle").should("have.length", 2);

    cy.get("text").should("have.length", 1).contains("초");

    cy.get("h1").contains("정답:");

    cy.get("h1").contains("오답:");

    cy.get("button").should("have.length", 3);

    cy.get("button").contains("다시 풀기");

    cy.get("button").contains("처음 으로");

    cy.get("button").contains("오답 노트");
  });

  it("다시 풀기 버튼 테스트", () => {
    cy.wait(1000);

    cy.get("button").contains("다시 풀기").click();

    cy.url().should("include", "/problem");
  });

  it("처음 으로 버튼 테스트", () => {
    cy.wait(1000);

    cy.get("button").contains("처음 으로").click();

    cy.url().should("include", "");
  });

  it("오답 노트 버튼 테스트", () => {
    cy.wait(1000);

    cy.get("button").contains("오답 노트").click();

    cy.url().should("include", "/note");
  });
});
