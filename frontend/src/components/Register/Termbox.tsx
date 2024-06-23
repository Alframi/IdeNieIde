import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import "./Termbox.css";

export const Termbox: React.FC<{
  onAcceptChange: (accepted: boolean) => void;
}> = ({ onAcceptChange }) => {
  const [termsVisible, setTermsVisible] = useState(false);
  const [privacyVisible, setPrivacyVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const termsRef = useRef<HTMLDivElement>(null);
  const privacyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (
      ref: React.RefObject<HTMLDivElement>,
      setAccepted: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      if (ref.current) {
        const { scrollTop, scrollHeight, clientHeight } = ref.current;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
          setAccepted(true);
        }
      }
    };

    const termsListener = () => handleScroll(termsRef, setAccepted);
    const privacyListener = () => handleScroll(privacyRef, setAccepted);

    const termsElement = termsRef.current;
    const privacyElement = privacyRef.current;

    if (termsElement) {
      termsElement.addEventListener("scroll", termsListener);
    }

    if (privacyElement) {
      privacyElement.addEventListener("scroll", privacyListener);
    }

    return () => {
      if (termsElement) {
        termsElement.removeEventListener("scroll", termsListener);
      }

      if (privacyElement) {
        privacyElement.removeEventListener("scroll", privacyListener);
      }
    };
  }, []);

  const termsContent = (
    <div ref={termsRef} style={{ maxHeight: "300px", overflowY: "auto" }}>
      <p>
        <span style={{ fontWeight: "bold", fontSize: "larger" }}>1. Wstęp</span>
        <br />
        Niniejsze Warunki Korzystania ("Warunki") regulują korzystanie z
        aplikacji mobilnej [Nazwa Aplikacji] ("Aplikacja"). Korzystając z
        Aplikacji, użytkownik akceptuje i zobowiązuje się przestrzegać
        niniejszych Warunków. Prosimy o uważne przeczytanie Warunków przed
        rozpoczęciem korzystania z Aplikacji.
      </p>
      <p>
        <span style={{ fontWeight: "bold", fontSize: "larger" }}>
          2. Rejestracja
        </span>
        <br />
        Aby korzystać z Aplikacji, użytkownik musi dokonać rejestracji, podając
        numer telefonu komórkowego. Numer ten jest niezbędny do weryfikacji
        tożsamości użytkownika i zapewnienia bezpieczeństwa konta.
      </p>
      <p>
        <span style={{ fontWeight: "bold", fontSize: "larger" }}>
          3. Bezpieczeństwo Przechowywania Danych
        </span>
        <br />
        Ochrona Danych Osobowych: Wszelkie dane osobowe, w tym numer telefonu,
        są przechowywane zgodnie z obowiązującymi przepisami o ochronie danych
        osobowych. Stosujemy zaawansowane technologie zabezpieczające, aby
        chronić dane użytkowników przed nieuprawnionym dostępem, ujawnieniem lub
        zniszczeniem.
        <br />
        Szyfrowanie: Dane przesyłane między urządzeniem użytkownika a naszymi
        serwerami są szyfrowane przy użyciu protokołów SSL/TLS, co zapewnia ich
        poufność i integralność.
        <br />
        Dostęp do Danych: Dostęp do danych użytkowników mają wyłącznie
        upoważnione osoby, które są zobowiązane do zachowania poufności.
        Regularnie przeprowadzamy audyty bezpieczeństwa, aby upewnić się, że
        nasze procedury są skuteczne i zgodne z najlepszymi praktykami.
        <br />
        Przechowywanie Danych: Dane osobowe są przechowywane na zabezpieczonych
        serwerach znajdujących się w bezpiecznych centrach danych. Serwery te są
        chronione zaawansowanymi systemami zabezpieczeń fizycznych i logicznych.
      </p>
      <p>
        <span style={{ fontWeight: "bold", fontSize: "larger" }}>
          4. Użycie Aplikacji
        </span>
        <br />
        Prawa i Obowiązki Użytkownika: Użytkownik zobowiązuje się do korzystania
        z Aplikacji zgodnie z obowiązującymi przepisami prawa oraz niniejszymi
        Warunkami. Zabrania się używania Aplikacji w sposób naruszający prawa
        innych użytkowników lub osób trzecich.
        <br />
        Aktualizacje i Zmiany: Zastrzegamy sobie prawo do wprowadzania zmian w
        Aplikacji, jej funkcjonalnościach oraz niniejszych Warunkach. O
        wszelkich istotnych zmianach użytkownik zostanie powiadomiony w
        odpowiedni sposób.
      </p>
    </div>
  );

  const privacyContent = (
    <div ref={privacyRef} style={{ maxHeight: "300px", overflowY: "auto" }}>
      <p>
        <span style={{ fontWeight: "bold", fontSize: "larger" }}>
          1. Polityka Prywatności
        </span>
        <br />
        Korzystając z Aplikacji, użytkownik akceptuje zasady zawarte w naszej
        Polityce Prywatności, która jest integralną częścią niniejszych
        Warunków. Polityka Prywatności szczegółowo opisuje, jakie dane zbieramy,
        w jaki sposób je przetwarzamy i chronimy.
      </p>
      <p>
        <span style={{ fontWeight: "bold", fontSize: "larger" }}>
          2. Odpowiedzialność
        </span>
        <br />
        Ograniczenie Odpowiedzialności: W najszerszym zakresie dozwolonym przez
        prawo, nie ponosimy odpowiedzialności za jakiekolwiek szkody
        bezpośrednie, pośrednie, przypadkowe, wynikowe lub specjalne wynikające
        z korzystania lub niemożności korzystania z Aplikacji.
        <br />
        Siła Wyższa: Nie ponosimy odpowiedzialności za niewykonanie lub
        opóźnienie w wykonaniu naszych zobowiązań wynikających z niniejszych
        Warunków spowodowane okolicznościami pozostającymi poza naszą kontrolą,
        takimi jak katastrofy naturalne, wojny, zamieszki, działania rządowe,
        awarie infrastruktury technicznej itp.
      </p>
      <p>
        <span style={{ fontWeight: "bold", fontSize: "larger" }}>
          3. Postanowienia Końcowe
        </span>
        <br />
        Prawo Właściwe: Niniejsze Warunki podlegają prawu obowiązującemu w
        [Jurysdykcja] i będą interpretowane zgodnie z tym prawem.
        <br />
        Kontakt: W przypadku pytań lub wątpliwości dotyczących niniejszych
        Warunków, prosimy o kontakt na adres e-mail: [Adres E-mail].
        <br />
        Zmiany Warunków: Zastrzegamy sobie prawo do zmiany niniejszych Warunków
        w dowolnym czasie. Zmienione Warunki będą publikowane w Aplikacji i
        obowiązują od momentu ich opublikowania.
      </p>
    </div>
  );

  const handleAcceptChange = (e) => {
    setAccepted(e.checked);
    onAcceptChange(e.checked);
  };

  return (
    <div className="termbox">
      <div className="acceptance-line">
        <Checkbox
          inputId="accept"
          checked={accepted}
          onChange={handleAcceptChange}
        />
        <span
          style={{
            marginLeft: "10px",
          }}
        >
          Akceptuję{" "}
          <Button className="p-link" onClick={() => setTermsVisible(true)}>
            Warunki korzystania
          </Button>{" "}
          oraz
          <Button className="p-link" onClick={() => setPrivacyVisible(true)}>
            Politykę prywatności
          </Button>
          .
        </span>
      </div>

      <Dialog
        header="Warunki korzystania"
        visible={termsVisible}
        onHide={() => setTermsVisible(false)}
        style={{ width: "80vw" }}
      >
        {termsContent}
      </Dialog>

      <Dialog
        header="Polityka prywatności"
        visible={privacyVisible}
        onHide={() => setPrivacyVisible(false)}
        style={{ width: "80vw" }}
      >
        {privacyContent}
      </Dialog>
    </div>
  );
};
