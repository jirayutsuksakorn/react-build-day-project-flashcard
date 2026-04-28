import React from 'react';

function Answer({ current, selected, answers, handleSelected }) {

    // 1. ป้องกันหน้าขาว: ถ้า selected เป็น null ให้หยุดทำงานตรงนี้ (Return null)
    if (!selected) {
        return null;
    }

    // 2. ใช้ if-else กำหนดค่า (ประกาศตัวแปรไว้รอรับค่า)
    let title = "";
    let message = "";
    let themeColor = "";

    if (selected.isCorrect === true) {
        title = "Correct!";
        message = "ยอดเยี่ยมมาก " + selected.countryName + " คือคำตอบที่ถูก";
        themeColor = "#1a1a1a";
    } else {
        title = "Incorrect";
        message = "คำตอบยังไม่ถูก ลองพยายามใหม่อีกครั้ง";
        themeColor = "#2d1a1a";
    }

    // 3. ส่วนการแสดงผล (นำตัวแปรทุกตัวมาวางในนี้ เส้นแดงข้างบนจะหายไปทันที)
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: themeColor, // ใช้ themeColor แล้ว (เส้นแดงบรรทัด 13 หาย)
            color: 'white',
            zIndex: 9999
        }}>
            <div style={{
                textAlign: 'center',
                padding: '40px',
                borderRadius: '30px',
                border: '1px solid #444',
                maxWidth: '400px',
                width: '90%'
            }}>
                {/* ใช้ current และ answers (เส้นแดงที่พารามิเตอร์หาย) */}
                <p style={{ color: '#888', fontSize: '14px' }}>
                    QUESTION {current + 1} OF {answers?.length || 0}
                </p>

                {/* ใช้ title (เส้นแดงบรรทัด 11 หาย) */}
                <h1 style={{ fontSize: '32px', margin: '10px 0' }}>{title}</h1>

                <h2 style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0' }}>
                    {selected.countryName}
                </h2>

                {/* ใช้ message (เส้นแดงบรรทัด 12 หาย) */}
                <p style={{ marginBottom: '30px', color: '#ccc' }}>{message}</p>

                <button
                    onClick={handleSelected} // ใช้ onNext แล้ว
                    style={{
                        padding: '15px 40px',
                        borderRadius: '50px',
                        border: 'none',
                        backgroundColor: 'white',
                        color: 'black',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    {selected.isCorrect ? "NEXT" : "RETRY"}
                </button>
            </div>
        </div>
    );
}

export default Answer;