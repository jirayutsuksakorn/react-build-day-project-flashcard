// เอาโค๊ดนี้ไปวางในไฟล์ Quiz.jsx ครับ import CurrentQuestion from './CurrentQuestion';


// {/* ถ้าจะเรียกใช้ใน Quiz.jsx */}
// <CurrentQuestion 
//   current={currentIndex} 
//   total={data.length} 
// />

const CurrentQuestion = ({ current, total }) => {
  // current คือ เลขดัชนี (index) ที่ส่งมาจากเพื่อน มักจะเริ่มจาก 0
  // total คือ จำนวนข้อทั้งหมด
  
  return (
    <div className="flex justify-center items-baseline gap-1 py-4">
      <span className="text-3xl font-extrabold text-blue-600">
        {current + 1}
      </span>
      <span className="text-gray-400 font-medium text-xl">
        / {total}
      </span>
    </div>
  );
};

export default CurrentQuestion;