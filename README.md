# 변수명 추천 알고리즘

### 번역 알고리즘
> 사용자가 변수에 관련된 내용을 입력하면 번역기로 번역 후 변수명에 알맞은 형태로 가공한다.

### 작업 내용

1. 프론트
    - 레이아웃(HTML, CSS)
    - JS
2. express연동
   - 라우터 구현
   - 통합 연동
3. 입력값에서 영어, 특수문자 제거
4. 번역기(파파고) 연결 
    - 네이버 파파고 API 사용
    - 파파고에서 키 생성 필요
7. 변수명에 알맞은 형태로 전환 
    - 관사 및 전치사 제거 
        - 카멜표기법으로 변경
        - 단어를 언더바로 연결
        - 모음 빼서 축약형 만들고 카멜표기법으로 변경
        - 모음 빼서 축약형 만들고 언더바로 연결

### 작업 결과
1. 첫 화면

![](https://i.imgur.com/XS3abZ9.png)

2. 변수명 입력

![](https://i.imgur.com/uyluLv2.png)

3. 결과 (변수명 추천)

![](https://i.imgur.com/LbfzqSp.png)

#### 다음 팀을 위한 설명
**1. app.js**
- REST API 를 처리하는 미들웨어 부분
```sh
node app.js
```

**2. preprocessing.js**
- 입력 받는 데이터 처리 
  - 입력값은 영어와 특수문자 무시(없앰)

**3. recommand.js**
- 추천 알고리즘

**4. translate.js**
 - 한글을 영어로 번역 
 (파파고 API 사용)

**5. public/**
- 정적인 파일을 처리하는 부분 
  - html/css/js 코드 모음

**6. package.json**
 - 프로그램 실행에 필요한 라이브러리 모음 / 설치 필수
```sh
npm install 
```
