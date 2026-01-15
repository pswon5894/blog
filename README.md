# Getting Started with Create React App

"react": "^19.2.3",
리액트버전 package.json에 있음

연습 리액트 블로그 만들기
useState 를 이용하여 상태 전환

state변경함수 특징
기존state == 신규state 의 경우 변경안함

정렬, 컴포넌트 문법

자바스크립트의 map 함수 array 자료 우측에 map()함수를 붙이면 자료갯수만큼 코드 반복실행

props는 하위 개체에게 함수값, 상태값 등을 전달

1. 문제 상황: 왜 하얀 화면이 나왔을까?

  문제는 '파일을 찾을 수 없다(404 에러)'

  비유하자면, 친구에게 "우리 집으로 와"라고 했는데, 동네 이름(프로젝트 이름)을 알려주지
  않은 것과 같아요. 친구는 어느 동네로 가야 할지 몰라 헤매게 되죠.

  웹사이트도 마찬가지입니다. React 앱을 만들고 빌드하면 index.html 파일과 여러 개의
  자바스크립트(js), CSS 파일이 생성됩니다. index.html은 이 js와 css 파일들을 불러와야
  화면을 제대로 보여줄 수 있습니다.

  그런데 pswon5894.github.io/blog라는 주소에 배포했을 때, index.html이 파일들을
  /static/js/main.js 와 같은 '최상위 경로'에서 찾으려고 했습니다. 실제 파일들은
  /blog/static/js/main.js 에 있는데 말이죠. 주소가 어긋나니 파일을 못 찾고, 결국
  아무것도 없는 하얀 화면만 보이게 된 것입니다.

  2. 해결 과정: 어떻게 문제를 해결했나?

  1단계: `package.json` 파일 수정

   - package.json 파일은 우리 프로젝트의 '신분증' 같은 역할을 합니다. 프로젝트 이름,
     필요한 도구 목록, 그리고 여러 명령어(시작, 빌드 등)에 대한 정보가 담겨있죠.
   - 이 '신분증'에 "우리 집 주소는 `https://pswon5894.github.io/blog` 이야" 라고 정확히
     명시해주는 작업이 필요했습니다. 이것이 바로 "homepage" 설정입니다.
   - 확인해보니, homepage 설정이 있긴 했지만 browserslist 라는 엉뚱한 항목 안에 들어가
     있었습니다. 마치 주소 스티커를 잘못된 상자에 붙인 것과 같았죠.
   - 그래서 제가 이 homepage 설정을 올바른 위치로 옮겨서, 프로젝트가 자신의 정확한
     주소를 인지하도록 수정했습니다.

  2단계: PowerShell 실행 정책 오류 해결

   - package.json을 수정한 뒤, 다시 배포 명령(npm run deploy)을 실행했을 때 두 번째
     오류가 발생했습니다.
   - 이것은 윈도우의 보안 기능(PowerShell 실행 정책) 때문입니다. 기본적으로 아무
     스크립트 파일이나 함부로 실행되지 않도록 막고 있어서, npm 명령이 거부된 것입니다.
   - 그래서 "이번 한 번만 이 스크립트를 실행하는 것을 허락해 줘" 라고 컴퓨터에 알려주는
     명령을 추가했습니다. (Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope
     Process)
   - 덕분에 보안을 유지하면서도 안전하게 배포 스크립트를 실행할 수 있었습니다.

  3단계: 재배포 (`npm run deploy`)

   - 이 명령어는 두 가지 일을 순서대로 진행합니다.
       1. `npm run build` (빌드): 수정된 package.json의 homepage 주소 정보를 바탕으로,
          파일들이 올바른 경로를 찾아갈 수 있도록 똑똑하게 포장하는 과정입니다. (build
          폴더가 새로 생성됩니다.)
       2. `gh-pages -d build` (배포): 잘 포장된 build 폴더를 GitHub Pages 서버에
          업로드하는 과정입니다.

  결론

  결론적으로 '파일 경로가 잘못된 문제'를 `package.json`의 `homepage` 값을 올바르게
  설정하여 해결했고, 배포 과정에서 발생한 윈도우 보안 문제를 임시로 우회하여 성공적으로
  재배포를 완료했습니다.

  이제 브라우저는 pswon5894.github.io/blog 라는 정확한 주소 안에서 모든 js, css
  파일들을 잘 찾아 화면을 완벽하게 그려낼 수 있게 되었습니다.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
