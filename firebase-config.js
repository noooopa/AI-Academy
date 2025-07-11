// Firebase 설정
const firebaseConfig = {
    // apiKey: "your-api-key",
    // authDomain: "your-project.firebaseapp.com",
    // projectId: "your-project-id",
    // storageBucket: "your-project.appspot.com",
    // messagingSenderId: "your-sender-id",
    // appId: "your-app-id"
    apiKey: "AIzaSyBf7CM4A7OIUP378Gk02iY2NFXYzrfZkoo",
    authDomain: "myo-0-33a06.firebaseapp.com",
    projectId: "myo-0-33a06",
    storageBucket: "myo-0-33a06.firebasestorage.app",
    messagingSenderId: "116359206933",
    appId: "1:116359206933:web:bc5a5f33b5c26727b9161c",
    measurementId: "G-HEJB2W8R30"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 데이터 저장 함수
async function saveApplicationData(applicationData) {
    try {
        const docRef = await db.collection('applications').add({
            ...applicationData,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'pending'
        });
        console.log('신청 데이터가 저장되었습니다. ID:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('데이터 저장 중 오류:', error);
        throw error;
    }
}

// 모든 신청 데이터 가져오기
async function getAllApplications() {
    try {
        const snapshot = await db.collection('applications')
            .orderBy('timestamp', 'desc')
            .get();
        
        const applications = [];
        snapshot.forEach(doc => {
            applications.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        return applications;
    } catch (error) {
        console.error('데이터 가져오기 중 오류:', error);
        throw error;
    }
}

// 신청 상태 업데이트
async function updateApplicationStatus(applicationId, status) {
    try {
        await db.collection('applications').doc(applicationId).update({
            status: status,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('상태가 업데이트되었습니다.');
    } catch (error) {
        console.error('상태 업데이트 중 오류:', error);
        throw error;
    }
}

// 신청 삭제
async function deleteApplication(applicationId) {
    try {
        await db.collection('applications').doc(applicationId).delete();
        console.log('신청이 삭제되었습니다.');
    } catch (error) {
        console.error('삭제 중 오류:', error);
        throw error;
    }
} 