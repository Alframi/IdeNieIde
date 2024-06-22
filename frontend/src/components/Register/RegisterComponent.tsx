import React, { useState } from "react";
import "./Register.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { InputOtp } from "primereact/inputotp";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const RegisterComponent: React.FC = () => {
  const [token, setTokens] = useState<string | number | undefined>();
  const [phone, setPhone] = useState<string | undefined>();
  const [nick, setNick] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [isAuthVisible, setIsAuthVisible] = useState(false);

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

  return (
    <div className="container">
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
        <Button
          className="register-button"
          label="Zarejestruj"
          icon="pi pi-check"
          loading={loading}
          onClick={load}
        />
      </div>

      <div className={`auth-section ${isAuthVisible ? "visible" : ""}`}>
        <p className="auth-label">W celu uwieżytelnienia, wpisz kod SMS</p>

        <InputOtp
          value={token}
          length={6}
          onChange={(e) => setTokens(e.value)}
        />
        <Button
          className="auth-button"
          label="IDĘ"
          loading={loading}
          onClick={handleClose}
        />
      </div>
    </div>
  );
};

export default RegisterComponent;
