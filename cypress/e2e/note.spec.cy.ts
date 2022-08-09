describe("note 페이지", () => {
  it("렌더링 테스트", () => {
    cy.visit("/note");

    cy.url().should("include", "/note");

    cy.get("title").contains("오답 노트");

    cy.get("h1").contains("오답노트");

    cy.get("[data-cy=empty]").contains("작성된 오답 노트가 없습니다.");

    cy.get("button").contains("나가기");
  });

  it("나가기 버튼 테스트", () => {
    cy.get("button").contains("나가기").click();

    cy.url().should("include", "");
  });

  it("오답노트 CRUD 테스트", () => {
    cy.get("button").contains("퀴즈 시작").click();

    const createData = () => {
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

      cy.get("h1")
        .contains("오답:")
        .then((value) => {
          const length = value[0].outerText.length;

          if (length < 5) {
            createData();
          }
        });
    };

    createData();

    cy.wait(500);

    cy.get("button").contains("오답 노트").click();

    cy.url().should("include", "/note");

    cy.get("[data-cy=memoList]")
      .children()
      .should("have.length.greaterThan", 0);

    cy.get("[data-cy=memo0").click();

    cy.get("button").contains("제거");

    cy.get("button").contains("저장");

    cy.get("h3").contains("문제:");

    cy.get("div").contains("정답: ");

    cy.get("div").contains("오답: ");

    cy.get("textarea").should("exist");

    cy.wait(500);

    cy.get(".ReactModal__Overlay").click("topLeft");

    cy.get("textarea").should("not.exist");

    cy.wait(500);

    cy.get("[data-cy=memoList]")
      .children()
      .first()
      .click()
      .then((node) => {
        const question = node[0].innerText;

        cy.wait(500);

        cy.get("button").contains("제거").click();

        cy.get("[data-cy=memoList]")
          .children()
          .first()
          .click()
          .then((newNode) => {
            const newQuestion = newNode[0].innerText;

            expect(question).not.equal(newQuestion);
          });
      });

    cy.wait(500);

    cy.get("textarea").type("내용 수정 테스트 입니다.");

    cy.wait(500);

    cy.get("button").contains("저장").click();

    cy.wait(500);

    cy.get("[data-cy=memoList]").children().first().click();

    cy.get("textarea").then((node) => {
      const text = node[0].innerHTML;

      expect(text).to.equal("내용 수정 테스트 입니다.");
    });

    cy.wait(500);

    cy.get(".ReactModal__Overlay").click("topLeft");

    cy.clearLocalStorage();

    cy.wait(500);

    cy.get("button").contains("나가기").click();
  });
});
