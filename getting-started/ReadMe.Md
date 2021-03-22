# Webpack 이란?

Webpack이란 모듈 번들러를 의미한다.

여기서 모듈 번들러란? css, js, html 등을 각각의 파일들을 하나의 구성으로 압축하여 실행할 수 있게 만들어주는 라이브러리다.

## 1. 간단한 예제 만들어보기

이번에는 webpack을 이용해서 간단한 개발환경을 만들어보는 예제를 진행하겠습니다.
<br/><br/>

### package.json 만들어주기

package.json을 사용할 수 있는 환경 만들어주기

```
yarn init -y
```

### webpack 및 사용할 라이브러리 설치하기

webpack을 yarn을 통해서 devDependencies에 설치하고 lodash는 dependencies에서 설치해줍니다.

```
yarn add -D webpack webpack-cli
yarn add lodash
```

### 사용할 html 및 js 파일 만들어주기

- index.html

```{.html}
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Webpack Demo</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
</head>
<body>
    <script src='src/index.js'></script>
</body>
</html>
```

- src/index.js

```{.javascript}
const component = ()=>{
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());
```
<br>

### webpack 적용해보기

webpack을 적용해보기 위해 일부 html과 js를 수정해봅시다. 

- index.html

```{.html}
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset='utf-8'>
                <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                <title>Webpack Demo</title>
                <meta name='viewport' content='width=device-width, initial-scale=1'>
                <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
                <!-- <script src="https://unpkg.com/lodash@4.16.6"></script> -->
            </head>
            <body>
                <script src='./dist/bundle.js'></script>
            </body>
        </html>
```

- index.js

```{.javascript}
import _ from "loadsh";

const component = ()=>{
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());
```
<br>

### package.json 수정

package.json scripts 부분을 수정해서 webpack의 모드를 None으로 바꾸어 주었다.
<br>
<br>
`
"build":"webpack --mode=none"
`
<br>
<br>
yarn run build라고 터미널에 작성해주면 dist 폴더에 main.js가 생성된 것을 확인할 수 있다.

<br>

### webpack 설정파일 만들어보기

webpack.configure.js라는 파일명으로 webpack의 실행 옵션을 넘겨줄 수 있다.

<br>

```{.javascript}
const path = require("path");

module.exports = {
    mode : 'none',
    entry:'./src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

<br>

webpack을 실행 후 관리자 도구를 확인해보면 요청되어서 받아오는 파일을 확인할 수 있는데 webpack을 적용했을 경우 압축된 하나의 파일 main.js가 받아와 지는 것을 알 수 있다.

![스크린샷 2021-03-23 오전 1 19 10](https://user-images.githubusercontent.com/23521909/112023349-7f1de700-8b76-11eb-833f-d00d47d6f6a8.png)

<br>
<br>

### webpack main.js

main.js 함수 내부를 살펴보면 우리가 사용했던 lodash와 index.js가 위치한 것을 알 수 있다. webpack의 js 즉시실행함수로 위치한 것을 알 수 있다.

<br>

![image](https://user-images.githubusercontent.com/23521909/112024020-213dcf00-8b77-11eb-91a2-6ced34e34635.png)
