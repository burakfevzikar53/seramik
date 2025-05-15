import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.toLowerCase() === "seher") {
      setIsLoggedIn(true);
    } else {
      alert("Bu sayfa sadece Seher için! 🌸");
    }
  };

  const message = `
    Bal Surat’a

    Sen benim en güzel sanat eserimsin. Hayatıma girdiğin günden beri her anı daha renkli, her anı daha anlamlı hale getirdin. 
    Senin güzelliğin, kalbinin temizliği ve bana kattığın onca güzel şey için sonsuz minnettarım.

    Birlikte geçirdiğimiz her an, beni daha iyi bir insan yaptı. Seninle birlikte büyüdüm, geliştim ve hayatı en güzel haliyle deneyimledim. 
    Senin varlığın, hayatımı bir başyapıta dönüştürdü.

    Seninle geçirdiğim her an, hayatımın en değerli eseri. Birlikte daha nice güzellikler yaratmak, hayatımızı sonsuza dek renklendirmek istiyorum. 
    Benimle bu sanat dolu yolculuğa devam eder misin, bal surat?

    Broşürün arkasına bak. ❤️
  `;

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="login-container">
          <h2>Bal Surat'a Özel Giriş</h2>
          <input
            type="text"
            placeholder="Adını Gir"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login-input"
          />
          <button className="login-button" onClick={handleLogin}>
            Giriş Yap
          </button>
        </div>
      ) : (
        <div className="message">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
