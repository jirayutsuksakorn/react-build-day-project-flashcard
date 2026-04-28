import React from 'react';

/**
 * @param {Object} result - Parameter ตัวที่ 1: เก็บข้อมูลผลลัพธ์ (isCorrect, countryName, imageUrl)
 * @param {Number} index - Parameter ตัวที่ 2: ลำดับข้อ (รับมาจากเปรม)
 * @param {Function} onNext - ฟังก์ชันกดไปต่อ (รับมาจากแก็ป)
 */
function Answer({ result = {}, index, onNext }) {
    // ดึงค่าออกจาก result มาใช้งาน
    const { isCorrect, countryName, imageUrl } = result;

    return (
        <div style={styles.wrapper}>
            <div style={{
                ...styles.card,
                // เปลี่ยนสีพื้นหลังตามสถานะ true/false
                backgroundColor: isCorrect ? '#1a1a1a' : '#2d1a1a'
            }}>

                {/* ส่วนที่ 1: รูปภาพเฉลย (Reveal Answer) - แสดงเฉพาะเมื่อตอบถูก */}
                {isCorrect && (
                    <div style={styles.imageContainer}>
                        <img
                            src={imageUrl}
                            alt={countryName}
                            style={styles.bgImage}
                        />
                        <div style={styles.gradientOverlay}></div>
                    </div>
                )}

                {/* ส่วนที่ 2: เนื้อหาข้อมูล */}
                <div style={styles.content}>

                    {/* แสดงลำดับข้อปัจจุบัน (หน้าที่ของเปรม) */}
                    <div style={styles.indexTag}>
                        QUESTION #{index + 1}
                    </div>

                    {/* Badge แสดงสถานะ Success / Failed */}
                    <div style={{
                        ...styles.statusBadge,
                        backgroundColor: isCorrect ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        color: isCorrect ? '#4ade80' : '#f87171',
                        border: `1px solid ${isCorrect ? '#4ade80' : '#f87171'}`
                    }}>
                        {isCorrect ? '✓ DISCOVERY SUCCESS' : '✕ EXPLORATION FAILED'}
                    </div>

                    <div style={styles.textGroup}>
                        {isCorrect ? (
                            <>
                                <span style={styles.subTitle}>DESTINATION REVEALED</span>
                                <h1 style={styles.mainTitle}>{countryName}</h1>
                                <div style={styles.decorativeLine}></div>
                            </>
                        ) : (
                            <h1 style={{ ...styles.mainTitle, fontSize: '32px', textTransform: 'none' }}>
                                อุ๊ย! คำตอบยังไม่ถูกต้อง
                            </h1>
                        )}
                    </div>

                    <div style={styles.descriptionBox}>
                        <p style={styles.description}>
                            {isCorrect
                                ? `เก่งมากคุณการ์ด! คุณรู้จัก ${countryName} เป็นอย่างดี`
                                : "ไม่ต้องเสียใจไป ลองรวบรวมสมาธิแล้วไปลุยใหม่ข้อหน้า!"
                            }
                        </p>
                    </div>

                    {/* ปุ่มกดไปต่อ (หน้าที่ของแก็ป) */}
                    <button
                        className="next-button"
                        style={styles.nextButton}
                        onClick={onNext}
                    >
                        {isCorrect ? 'CONTINUE JOURNEY' : 'TRY AGAIN'}
                    </button>
                </div>
            </div>

            {/* Animation ส่วนตัวของการ์ด */}
            <style>
                {`
                @keyframes zoomIn { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
                @keyframes slideUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
                .next-button { transition: all 0.3s ease !important; }
                .next-button:hover { 
                    background-color: #f0f0f0 !important; 
                    transform: scale(1.05);
                }
                `}
            </style>
        </div>
    );
}

const styles = {
    wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, background: '#000000', zIndex: 999, overflow: 'hidden' },
    card: { width: '90%', maxWidth: '400px', height: '600px', position: 'relative', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', animation: 'slideUp 0.6s ease' },
    imageContainer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 },
    bgImage: { width: '100%', height: '100%', objectFit: 'cover', animation: 'zoomIn 10s infinite alternate ease-in-out' },
    gradientOverlay: { position: 'absolute', bottom: 0, width: '100%', height: '70%', background: 'linear-gradient(to top, rgba(0,0,0,1) 20%, transparent 100%)' },
    content: { position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '35px', color: 'white', fontFamily: "'Prompt', sans-serif" },
    indexTag: { position: 'absolute', top: '35px', left: '35px', fontSize: '14px', fontWeight: 'bold', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px' },
    statusBadge: { alignSelf: 'flex-start', padding: '6px 14px', borderRadius: '100px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '15px' },
    subTitle: { fontSize: '10px', letterSpacing: '4px', color: '#bbb', display: 'block' },
    mainTitle: { fontSize: '42px', fontWeight: 'bold', margin: '5px 0', lineHeight: '1.1' },
    decorativeLine: { width: '40px', height: '4px', backgroundColor: '#fff', margin: '15px 0' },
    descriptionBox: { marginBottom: '30px' },
    description: { fontSize: '13px', lineHeight: '1.6', color: '#ccc', margin: 0 },
    nextButton: { background: 'white', color: 'black', border: 'none', padding: '16px 25px', borderRadius: '100px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', letterSpacing: '1px' }
};

export default Answer;