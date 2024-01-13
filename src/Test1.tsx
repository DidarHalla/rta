import "./style/Test1.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "./Router.tsx";

function Test1() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div>
        <div className="wrapper-test1">
          <b id="rta">rta:</b>
          <div className="text-wrapper-test1">
            <div>Как и любой девушке, первым делом мне важно</div>
            <div>
              узнать&nbsp;<b>знак зодиака</b> своего будущего
            </div>
            <div>спутника!</div>
            <div>Выбери из списка свою стихию:</div>
            <div className="zodiac-signs">
              <div>
                <input
                  type="radio"
                  name="element"
                  value="fire"
                  checked={selectedOption === "fire"}
                  onChange={handleOptionChange}
                />
                <span>Огонь (Овен / Лев / Стрелец)</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="element"
                  value="fire"
                  checked={selectedOption === "earth"}
                  onChange={handleOptionChange}
                />
                <span>Земля (Телец / Дева / Козерог)</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="element"
                  value="fire"
                  checked={selectedOption === "air"}
                  onChange={handleOptionChange}
                />
                <span>Воздух (Близнецы / Весы / Водолей)</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="element"
                  value="fire"
                  checked={selectedOption === "water"}
                  onChange={handleOptionChange}
                />
                <span>Вода (Рак / Скорпион / Рыбы)</span>
              </div>
            </div>
          </div>
          <div className="button-wrapper-test1">
            <Link to={Routes.home}>
              <input className="ren-button" type="button" value="Далее" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test1;
