# AI Academy 웹사이트

AI 강의 신청 사이트로, 파이어베이스를 활용한 데이터 관리 시스템을 포함합니다.

## 기능

### 🎯 주요 기능
- **수강신청 폼**: 이름, 이메일, 휴대폰, 신청동기 입력
- **파이어베이스 연동**: 실시간 데이터 저장 및 관리
- **관리자 대시보드**: 신청 현황 조회 및 관리
- **반응형 디자인**: 모바일 친화적 UI

### 📊 관리자 기능
- 신청 현황 통계 (총 신청 수, 대기 중, 승인됨, 거절됨)
- 신청 목록 조회 및 검색
- 신청 상태 관리 (승인/거절)
- 신청 상세 정보 보기
- 신청 삭제

## 설정 방법

### 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/)에 접속
2. 새 프로젝트 생성
3. Firestore Database 활성화
4. 웹 앱 추가

### 2. Firebase 설정 업데이트

`firebase-config.js` 파일에서 Firebase 설정을 업데이트하세요:

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

### 3. Firestore 보안 규칙 설정

Firestore Database > 규칙에서 다음 규칙을 설정하세요:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /applications/{document} {
      allow read, write: if true; // 개발용 (실제 운영 시 인증 추가 필요)
    }
  }
}
```

## 파일 구조

```
project/
├── index.html          # 메인 페이지
├── admin.html          # 관리자 대시보드
├── firebase-config.js  # Firebase 설정 및 함수
└── README.md          # 프로젝트 설명서
```

## 사용법

### 메인 페이지 (index.html)
1. 웹 브라우저에서 `index.html` 열기
2. "신청하기" 버튼 클릭
3. 수강신청 폼 작성 및 제출
4. 오른쪽 상단 "관리자" 버튼으로 대시보드 접근

### 관리자 대시보드 (admin.html)
1. 신청 현황 통계 확인
2. 신청 목록 조회
3. 신청 상태 관리 (승인/거절)
4. 신청 상세 정보 확인
5. 신청 삭제

## 데이터 구조

### 신청 데이터 (applications 컬렉션)
```javascript
{
    name: "신청자 이름",
    email: "이메일 주소",
    phone: "휴대폰 번호",
    motivation: "신청동기",
    timestamp: "신청일시",
    status: "pending|approved|rejected"
}
```

## 보안 고려사항

⚠️ **중요**: 현재 설정은 개발용입니다. 실제 운영 시 다음 사항을 고려하세요:

1. **인증 시스템 추가**: 관리자 로그인 기능
2. **보안 규칙 강화**: Firestore 보안 규칙 설정
3. **데이터 검증**: 서버 사이드 검증 추가
4. **HTTPS 사용**: SSL 인증서 적용

## 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase Firestore
- **UI/UX**: 반응형 디자인, 모던 UI
- **라이브러리**: Firebase SDK

## 브라우저 지원

- Chrome (권장)
- Firefox
- Safari
- Edge

## 문제 해결

### Firebase 연결 오류
1. Firebase 설정이 올바른지 확인
2. 인터넷 연결 상태 확인
3. 브라우저 콘솔에서 오류 메시지 확인

### 데이터가 저장되지 않는 경우
1. Firestore Database가 활성화되어 있는지 확인
2. 보안 규칙이 올바르게 설정되어 있는지 확인
3. Firebase 프로젝트 설정 재확인

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.