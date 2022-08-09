describe("home 페이지", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("렌더링 테스트", () => {
    cy.get("title").contains("퀴즈 앱");

    cy.get("h1").contains("퀴즈 설명");

    cy.get("li").contains(
      "퀴즈 시작 버튼을 누르시면 퀴즈 풀기를 시작할 수 있습니다."
    );

    cy.get("li").contains(
      "오답 노트 버튼을 누르시면 기록했던 내역을 볼 수 있습니다."
    );

    cy.get("li").contains("퀴즈의 보기 문항은 총 4개 입니다.");

    cy.get("li").contains(
      "답안을 선택하면 맞았는지 틀렸는지 확인이 가능합니다."
    );

    cy.get("li").contains(
      "다음 문제 버튼을 누르시면 다음 문항으로 이동합니다."
    );

    cy.get("li").contains(
      "모든 문항을 다 풀면 소요시간, 정답/오답에 대한 정보를 볼 수 있습니다."
    );

    cy.get("li").contains(
      "다시 풀기, 오답 노트 기능을 누르면 처음부터 문제를 다시 풀거나 오답 노트를 작성할 수 있습니다."
    );

    cy.get("button").contains("퀴즈 시작");

    cy.get("button").contains("오답 노트");
  });

  it("퀴즈 시작 버튼 테스트", () => {
    cy.get("button").contains("퀴즈 시작").click();

    cy.wait(1000);

    cy.url().should("include", "/problem");
  });

  it("오답 노트 버튼 테스트", () => {
    cy.get("button").contains("오답 노트").click();

    cy.url().should("include", "/note");

    cy.wait(1000);

    cy.get("button").contains("나가기").click();
  });
});
