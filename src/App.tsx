import { useEffect, useState } from "react";
import "./App.css";

import AdviceCard from "./Components/AdviceCard";

interface AdviceData {
  slip: {
    id: number;
    advice: string;
  };
}

function App() {
  const [dataadvice, setDataAdvice] = useState({
    id: 0,
    advice: "Your Tired ?",
  });

  const adviceApi = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data: AdviceData = await response.json();

    setDataAdvice({
      advice: data.slip.advice,
      id: data.slip.id,
    });
  };

  useEffect(() => {
    adviceApi();
  }, []);

  const handleDice = () => {
    adviceApi();
  };

  return (
    <div className="Main_Container">
      <AdviceCard handlDice={handleDice} dataadvice={dataadvice} />
    </div>
  );
}

export default App;
