## [Quiz-App](https://quizquizapp.netlify.app)

---

한번에 10문제씩 랜덤 퀴즈를 풀어보는 간단한 웹앱 입니다.

<br/><br/>

## 주요 기능

---

- 퀴즈 풀기 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있습니다.

- 퀴즈는 4개의 보기가 존재하고 1개를 선택할 수 있습니다.

- 퀴즈의 4개 보기 중 1개를 선택하면 다음 문항 버튼을 볼 수 있습니다.

  - 선택한 보기가 정답일 경우 선택지의 배경이 파란색으로 표시 됩니다.

  - 선택한 보기가 정답이 아닐 경우 선택지의 배경은 빨간색으로 표시되고 정답이 파란색으로 표시됩니다.

- 10개의 문항을 다 풀면 결과보기 버튼을 볼 수 있습니다.

- 결과보기 버튼을 선택하면 퀴즈를 마칠때 까지 소요된 시간, 정답, 오답 수를 볼 수 있으며 원형의 도넛차트로  
  비율을 확인할 수 있습니다.

- 도넛 차트 아래에는 다시풀기, 처음으로, 오답노트 3개의 버튼이 존재하며 각각 방금 푼 10문제를 다시 풀어보거나,  
  처음 화면으로 돌아가거나 오답노트 화면으로 이동이 가능합니다.

- 오답노트를 클릭하면 틀린 문제가 자동으로 리스트에 역순으로 기입되어 있습니다.

- 오답노트의 각 문항을 클릭하면 모달이 표시되며 모달 안에는 문제, 정답, 오답이 적혀있고 메모도 남길 수 있습니다.

- 모달 창의 외부를 누르면 모달을 닫을 수 있고, 삭제 버튼을 통해 해당 오답노트를 제거할 수 있으며  
  메모 입력 후 저장 버튼을 통해 저장할 수 있습니다.

- 문제를 풀며 새로운 오답이 발생할 경우 해당 문항 수 만큼 리스트 상단에 모여 표시 됩니다.  
  만약 이미 오답노트에 존재하는 문항이 있을 경우 중복으로 생성되지 않고 아래에서 끌어올리게 됩니다.

</br><br/>

## 주요 기술

---

- 메인: Next.js, Type-script

- 상태관리: Zustand

- 저장소: Local-storage

- 스타일: Styled-components

- 테스트: Cypress

- 배포: Netlify

</br><br/>

## 실행 방법

---

### 프로덕션 모드

- yarn build

- yarn start

### 개발 모드

- root 경로에 .env 파일 생성 후 아래의 환경 변수를 입력해 줍니다.  
  API_QUIZ_DATA_URL=https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986

- yarn install

- yarn dev

- 크롬에서 http://localhost:3000 접속

### 테스트 모드

- yarn test 명령 후 실행되는 cypress gui를 통해 e2e 테스트 선택 -> 크롬 선택 -> spec에서 all.spec.cy.ts를 실행하면 모든 케이슬 테스트 할 수 있습니다.

- yarn dev 후 터미널 창을 하나 더 생성 후 yarn cypress:run을 통해 터미널로 테스트를 진행할 수 있습니다.

</br></br>

## 작업을 마치며

---

### Next.js, Type-script

서버사이드 렌더링을 통한 SEO 개선과 getStaticProps, getServerSideProps를 사용한 네트워크 관리를 경험할 수 있었습니다.
또한 아직 많은 부분 미흡하지만 타입스크립트도 적용해보며 코드를 작성하면서 오류가 발생할 부분들을 미리 확인하며 작업할 수 있었고 Local-storage를 사용하기 위해 추상 클래스를 사용해 보았는데 타입스크립트에서 제공해 주는 많은 기능들로 보다 확장성 있고 캡슐화가 가능한 코드를 작성할 수 있었습니다.

</br>

### Styled-components

css파일을 추가적으로 작성하지 않고 컴포넌트화가 쉬우며 다양한 편리 기능이 들어있는 Styled-components를 사용했습니다.
간단하게나마 반응형으로 작업했고 추후에는 tailwind를 사용해보며 장점을 경험할 예정입니다.

</br>

### Zustand

전역상태관리로 Zustand를 사용했습니다. Redux에 비교해 보일러플레이트 코드가 매우 적고 직관적으로 작성해 금방 사용할 수 있었고 이번 작업에서 전역상태가 많지 않았기에 실제로 사용해 보기에 적절하다고 생각해 결정했습니다.

</br>

### Cypress

테스트 코드로는 UI로 확인이 가능한 cypress 통해 e2e테스트를 작성했습니다.
그 동안은 jest를 이용해 단위,통합 테스트를 작성했었는데 cypress를 통해 e2e테스트를 작성하며 UI로 실제 유저가 사용하며 모든 동작이 어우러지는지  
UI로 볼 수 있어 좋은 개발 경험을 얻었습니다. 커버리지는 95% 달성했습니다.
