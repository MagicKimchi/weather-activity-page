# Weather Activity Page

> 날씨를 확인하는 데서 끝내지 않는다.
> 다음 행동을 결정한다.

도시를 입력하면 활동, 추천 이유, 주의사항을 보여주는 웹 페이지입니다.

복잡한 정보 대신 사용자가 바로 행동할 수 있는 결과를 제공하는 것을 목표로 제작했습니다.

---

## What It Does

도시 이름을 입력하면 해당 도시에 맞는 정보를 출력합니다.

* 추천 활동
* 추천 이유
* 주의사항

현재 버전은 **서울과 부산의 샘플 데이터**를 지원합니다.

---

## How It Works

```text
도시 입력
→ 입력값 확인
→ 샘플 데이터 조회
→ 결과 출력
```

폼 제출 시 페이지 새로고침을 막고, JavaScript가 현재 페이지의 결과 영역을 직접 변경합니다.

---

## Built With

* HTML
* CSS
* JavaScript

---

## Project Structure

```text
weather-activity-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── weather.jpg
```

---

## Run

저장소를 내려받은 뒤 `index.html` 파일을 브라우저에서 실행합니다.

```bash
git clone https://github.com/MagicKimchi/weather-activity-page.git
```

---

## Current Version

현재는 프런트엔드 동작을 구현한 초기 프로토타입입니다.

* 서울·부산 샘플 데이터 조회
* 사용자 입력값 공백 제거
* 등록되지 않은 도시 예외 처리
* DOM을 이용한 결과 출력
* 폼 기본 제출 및 새로고침 방지

---

## Next

향후 실제 날씨 API와 Python 백엔드를 연결하여 다음 구조로 확장할 예정입니다.

```text
도시 입력
→ 실제 날씨 조회
→ 날씨 데이터 분석
→ 활동 추천
→ 결과 출력
```
