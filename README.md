## 🔥 Projects!

<p align="middle">
  <img src="./src/images/readme/youtube_classroom_preview.png">
</p>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 

이를 위해서는 우선 npm이 설치되어 있어야 합니다. 

구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 

이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```shell
# dependencies
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import # lint
npm install --save-dev babel-loader @babel/core @babel/preset-env # loader
npm install --save-dev html-webpack-plugin mini-css-extract-plugin # js Plugin
npm install --save-dev webpack webpack-cli webpack-dev-server # webpack

# setup
node_modules/.bin/eslint --init
```

실행은 아래의 커맨드로 할 수 있습니다.

```shell
# linting
npm run lint
# or
node_modules/.bin/eslint --fix .
```

```shell
# execute
npm run start
# or
npx webpack serve --open --mode=development --hot
```

## 📝 License

This project is [MIT](https://github.com/next-step/js-youtube-classroom/blob/main/LICENSE) licensed.
