import { useState } from "react";
import { asia } from "../mock-data/asia";
import CurrentQuestion from "../components/CurrentQuestion";
import TrackScore from "./TrackScore";
import Answer from "../components/Answer";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(null);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const item = asia[index];

  const handleAnswer = (value) => {
    setAnswers(value);
    setSelected(true);
    if (value) setScore(score + 1);
  };
  
  const handleSelected = () => {
    setSelected(false);
    setIndex(index + 1);
  }

  return (
    <div className="flex flex-col gap-5 p-5 rounded-2xl bg-white shadow-xl/5">
      <h2 className="text-2xl text-slate-500 pb-4 border-b border-slate-200">What is the capital of {item.country}?</h2>
      <img className="object-cover w-100 h-50 rounded-lg" src={`../assets/images/category/asia/${item.country.toLowerCase().replace(/ /g, '-')}.jpg`}/>
      <div className="flex gap-5">
        <button className="cursor-pointer flex-1 text-white px-5 py-2 rounded bg-slate-400 hover:bg-sky-700" onClick={() => handleAnswer(true)}>{item.correctCapital}</button>
        <button className="cursor-pointer flex-1 text-white px-5 py-2 rounded bg-slate-400 hover:bg-sky-700" onClick={() => handleAnswer(false)}>{item.wrongOption}</button>
      </div>
      <div className="flex justify-between">
        <div>
          <span>Current Question:
          <CurrentQuestion current={index} total={asia.length} /></span>
        </div>
        <div>
          <span>Track Score:</span>
          <TrackScore score={score} total={asia.length} />
        </div>
      </div>
      {selected && <Answer current={index} selected={selected} answers={answers} handleSelected={handleSelected} />}
    </div>
  );
}