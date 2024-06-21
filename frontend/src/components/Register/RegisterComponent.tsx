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

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container">
      <p className="input-label">
        Aby się zarejestrować podaj numer telefonu oraz nazwę użytkownika.
      </p>
      <InputMask
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        mask="999-999-999"
        placeholder="999-999-999"
      />
      <InputText value={nick} onChange={(e) => setNick(e.target.value)} />
      <div className="card flex flex-wrap justify-content-center gap-3">
        <Button
          label="Zarejestruj"
          icon="pi pi-check"
          loading={loading}
          onClick={load}
        />
      </div>
      <p className="input-label">
        Uwierzytelnij swoje konto Proszę wpisać kod przesłany na Twój telefon.
      </p>
      <div className="input-wrapper">
        <InputOtp
          value={token}
          length={6}
          onChange={(e) => setTokens(e.value)}
        />
      </div>
    </div>
  );
};

export default RegisterComponent;
