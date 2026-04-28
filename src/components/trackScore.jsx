// ไฟล์ TrackScore.jsx
const TrackScore = ({ score, total }) => {
  // score คือ คะแนนที่แม่นับมาให้แล้ว (นับเฉพาะที่ตอบ true)
  // total คือ จำนวนข้อทั้งหมด
  
  return (
    <div className="flex justify-center items-baseline gap-2 py-4">
      <span className="text-xl font-bold text-gray-500">Score:</span>
      <span className="text-3xl font-extrabold text-green-600">
        {score}
      </span>
      <span className="text-gray-400 font-medium text-xl">
        / {total}
      </span>
    </div>
  );
};

export default TrackScore;