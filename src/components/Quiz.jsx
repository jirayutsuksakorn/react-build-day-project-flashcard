import { useState } from "react";
import { asia } from "../mock-data/asia";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(null);
  const item = asia[index];

  const handleAnswer = (value) => setAnswers(value);

  return (
    <div className="flex flex-col gap-5 p-5 rounded-2xl bg-white">
      <h2 className="border-b border-slate-200">What is the capital of {item.country}?</h2>
      <img className="object-cover w-100 h-75 rounded-lg" src={`./src/assets/images/category/asia/${item.country.toLowerCase().replace(/ /g, '-')}.jpg`}/>
      <div>
        <button onClick={() => handleAnswer(true)}>{item.correctCapital}</button>
        <button onClick={() => handleAnswer(false)}>{item.wrongOption}</button>
      </div>
    </div>
  );
}