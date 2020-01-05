# TypeScript-Node.js-Template

TypeScript로 Node.js 서버를 구축하는 템플릿 코드입니다.

환경설정 과정은 (TypeScript로_Node.js_서버_만들기)[https://kooku.netlify.com/node.js/] 에 포스팅 되어 있습니다.

사용하실 때 `package.json` 파일에서 name, description, author은 변경하신 후 사용하시길 바랍니다.

```json
{
  "name": "TypeScript_Node.js_Template",
  "version": "0.0.1",
  "description": "ts-node test",
  "main": "app.ts",
  "scripts": {
    "start:dev": "nodemon --config ./nodemon.json",
    "build": "rd /s build && tsc",
    "start": "set NODE_ENV=production&& node build/app.js"
  },
  "author": "kooku",
  "license": "MIT",
  "dependencies": {
    "@types/express": "^4.17.2",
    "@types/node": "^13.1.1",
    "express": "^4.17.1",
    "nodemon": "^2.0.2",
    "ts-node": "^8.5.4",
    "typescript": "^3.7.4"
  }
}
```

명령어는 window OS를 기본으로 설정되어 있으므로 Linux 혹은 MacOS인 경우 Scripts 명령어를 다음과 같이 바꾸시길 바랍니다.

```json
"scripts": {
    "start:dev": "nodemon --config ./nodemon.json",
    "build": "rm -rf ./build/ && tsc",
    "start": "NODE_ENV=production&& node build/app.js"
  },
```

start, build, start:dev 기본적인 기능만 설정되어 있습니다. 계속해서 보완할 예정입니다.
