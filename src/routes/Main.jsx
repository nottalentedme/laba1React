import React, { useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Main.scss";
import HelloCard from "../components/HelloCard";
import InstructionCard from "../components/InstructionCard";

const MainPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [login, setLogin] = useState("POPA");
  const [password, setPassword] = useState("POPA");

  const [showLogin, setShowLogin] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const sendData = () => {
    setShowLogin(login);
    setShowPassword(password);
  };

  const texts = useMemo(
    () => [
      "Снова работать с Никитой Ичетовкиным",
      "привет мир",
      "здравствуй, реальность",
    ],
    []
  );

  const [textHello, setTextHello] = useState(texts[0]);

  const handleNext = useCallback(() => {
    setTextHello((prev) => {
      const i = texts.indexOf(prev);
      const next = texts[(i + 1) % texts.length];
      return next;
    });
  }, [texts]);

  return (
    <>
      <div className="main">
        <div></div>
        <div className="main__container">
          <HelloCard text={textHello} onNext={handleNext} />
          {showLogin} / {showPassword}
          <br></br>
          <input
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            type="text"
          ></input>
          <br></br>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          ></input>
          <br></br>
          <button className="btn btn-primary" onClick={sendData}>
            Отправить
          </button>
          <InstructionCard />
        </div>
      </div>
    </>
  );
};

export default MainPage;
