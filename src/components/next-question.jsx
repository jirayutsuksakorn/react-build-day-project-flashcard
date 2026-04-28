import { useState } from 'react';


export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0); //สร้างStateสำหรับจำเลขข้อ

    //ข้อมูลคำถาม
    const questions = [
        { id: 1, question: "เมืองหลวง?", answer: "ชื่อเมืองหลวง", image: "..."},
        { id: 2, question: "เมืองหลวง?", answer: "ชื่อเมืองหลวง", image: "..."},

    ];
    
    //ฟังก์ชั่นเปลี่ยนข้อ
    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1); //สั่งงเปลี่ยนเลขข้อ
        }
    };

    return (
        <div>
            {/* ดึงข้อมูลมาแสดงตามเลขข้อปัจจุบัน */}
            <h1>ข้อที่ {currentIndex + 1} </h1>
            <p>{questions[currentIndex].question}</p>

            {/* ปุ่มกด */}
            <button onClick={nextQuestion}>Next Question</button>
        </div>
    )
}