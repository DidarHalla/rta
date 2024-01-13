import "./style/App.css";
import { Link } from "react-router-dom";
import { Routes } from "./Router.tsx";

function App() {
  return (
    <>
      <div>
        <div className="wrapper">
          <b id="rta">rta:</b>
          <div className="text-wrapper">
            <div id="hello">
              <b>Привет!</b>
            </div>
            <div>
              Моё полное имя&nbsp; <strong>real time agenc</strong>, но можнешь
            </div>
            <div>называть меня просто rta:</div>
            <div>сейчас я ищу классного специалиста и хочу</div>
            <div>
              пригласить&nbsp;<b>тебя на "свидание"</b>
            </div>
            <div id="lets">
              <b>Давай познакомимся?</b>
            </div>
          </div>
          <div className="button-wrapper">
            <input className="my-profile" type="button" value="Моя анкета" />
            <Link to={Routes.test1}>
              <input
                className="ren-button"
                type="button"
                value="Пройти тест на совместимость"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
