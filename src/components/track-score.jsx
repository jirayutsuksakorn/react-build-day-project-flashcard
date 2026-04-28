import { useState } from 'react';

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0); //สร้างStateสำหรับจำเลขข้อ
    const [score, setScore] = useState(0); //เริ่มที่0คะแนน

    //ข้อมูลคำถาม
    const questions = [
        { id: 1, question: "เมืองหลวง?", answer: "ชื่อเมืองหลวง", image: "..." },
        { id: 2, question: "เมืองหลวง?", answer: "ชื่อเมืองหลวง", image: "..." },
    ];

    //ฟังก์ชั่นเปลี่ยนข้อ
    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1); //สั่งเปลี่ยนเลขข้อ
        }
    };

    const handleAnswer = (userAnswer) => {
        //คำตอบที่ส่งมาตรงกับ คำตอบในข้อมูลปัจจุบันไหม
        if (userAnswer === questions[currentIndex].answer) {
            setScore(score + 1);
            alert("True");
        } else {
            alert("False");
        }
        // พอเช็คเสร็จแล้ว ก็เรียกฟังก์ชันเปลี่ยนข้อ ของ next-question
        nextQuestion();
    };

    return (
        <div>
            {/* แสดงคะแนนแบบเรียลไทม์ */}
            <p style={{ fontSize: '1.2rem', color: 'blue' }}>Score: {score}</p>

            <h1>ข้อที่ {currentIndex + 1}</h1>
            <p>{questions[currentIndex].question}</p>

            {/* ปุ่มสำหรับตอบ */}
            <div style={{ margin: '20px' }}>
                {/* ปุ่มส่งคำตอบถูก */}
                <button onClick={() => handleAnswer(questions[currentIndex].answer)}>ตอบถูก</button>
                <button onClick={() => handleAnswer("False Answer")}>ตอบผิด</button>
            </div>

            {/* ปุ่มกดข้ามโดยไม่คิดคะแนน */}
            <button onClick={nextQuestion}>Skip to Next</button>
        </div>
    );
}