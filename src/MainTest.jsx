import React from 'react'
import ReactDOM from 'react-dom/client'
import Answer from './components/Answer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Answer
            current={0}
            onNext={() => console.log("คลิกไปต่อ!")}
            // [จุดสำคัญ] ต้องส่งเป็นก้อน selected แบบนี้ถึงจะไม่ขาว
            selected={{
                isCorrect: true,
                countryName: "Peru"
            }}
        />
    </React.StrictMode>
)