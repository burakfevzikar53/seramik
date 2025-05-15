import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.toLowerCase() === "seher camcı") {
      setIsLoggedIn(true);
    } else {
      alert("Ad boşluk Soyad şeklinde giriniz!");
    }
  };

  const message = `
    Bal Surat’a
    
    Sen benim gördüğüm en güzel sanat eserisin. Hayatıma girdiğin günden beri her anı daha renkli, her anı daha anlamlı hale getirdin. 
    Senin güzelliğin, kalbinin temizliği ve bana kattığın onca güzel şey için sonsuz minnettarım.
    
    Birlikte geçirdiğimiz her an, beni daha iyi bir insan yaptı. Seninle birlikte büyüdüm, geliştim ve hayatı en güzel haliyle deneyimledim. 
    Senin varlığın, hayatımı bir başyapıta dönüştürdü resmen.

    Birlikte daha nice güzellikler yaratmak, hayatımızı sonsuza dek renklendirmek istiyorum. 
    Benimle bu yolculuğa devam eder misin?

    ❤️ Benimle Evlenir Misin? ❤️
  `;

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="login-container">
          <h2>🌸 Hoşgeldin 🌸</h2>
          <input
            type="text"
            placeholder="Adınızı ve Soyadınızı Girin"
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
