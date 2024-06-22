import React, { useState } from "react";
import "./Register.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { InputOtp } from "primereact/inputotp";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Termbox } from "./Termbox";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const RegisterComponent: React.FC = () => {
  const [token, setTokens] = useState<string | number | undefined>();
  const [phone, setPhone] = useState<string | undefined>();
  const [nick, setNick] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [isAuthVisible, setIsAuthVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsAuthVisible(true);
    }, 1000);
  };

  const handleClose = () => {
    setIsAuthVisible(false);
  };

  const handleHomePage = () => {
    setTimeout(() => {
      navigate("/home");
    }, 500);
  };

  return (
    <>
      <div className="register-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="register-section">
          <h1>Zarejestruj się</h1>
          <p className="input-label">Nazwa użytkownika</p>
          <InputText value={nick} onChange={(e) => setNick(e.target.value)} />
          <p className="input-label">Numer telefonu</p>
          <InputMask
            className="register-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mask="999-999-999"
            placeholder="999-999-999"
          />
          <br />
          <Termbox onAcceptChange={setTermsAccepted} />
          <Button
            className="register-button"
            label="Zarejestruj"
            icon="pi pi-check"
            loading={loading}
            onClick={load}
            disabled={!termsAccepted} // Disable button if terms are not accepted
          />
        </div>

        <div className={`auth-section ${isAuthVisible ? "visible" : ""}`}>
          <Button
            className="close-button"
            icon="pi pi-times"
            rounded
            text
            raised
            severity="danger"
            aria-label="Cancel"
            onClick={handleClose}
          />

          <p className="auth-label">W celu uwierzytelnienia, wpisz kod SMS</p>

          <InputOtp
            value={token}
            length={6}
            onChange={(e) => setTokens(e.value)}
          />
          <Button
            className="auth-button"
            label="IDĘ"
            loading={loading}
            onClick={handleHomePage}
          />

          <Button
            label="Wyślij ponownie"
            link
            onClick={() => window.open("https://chatgpt.com/", "_blank")}
          />
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
