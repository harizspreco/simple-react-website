import React, { useState, useEffect } from "react";

function Vrijeme(props) {
  // Definišemo stanje za čuvanje podataka o vremenu i datumu za određeni grad
  const [vrijeme, setVrijeme] = useState({
    datetime: "",
    timezone: "",
    abbreviation: "",
  });

  // Definišemo funkciju za dohvaćanje podataka sa WorldTimeAPI
  const fetchVrijeme = async () => {
    // Gradimo URL za dohvaćanje podataka za određenu vremensku zonu
    const url = `http://worldtimeapi.org/api/timezone/${props.zona}`;
    // Koristimo fetch metodu za slanje zahtjeva na URL
    const response = await fetch(url);
    // Provjeravamo da li je odgovor uspješan
    if (response.ok) {
      // Pretvaramo odgovor u JSON objekat
      const data = await response.json();
      // Ažuriramo stanje sa podacima iz JSON objekta
      setVrijeme({
        datetime: data.datetime,
        timezone: data.timezone,
        abbreviation: data.abbreviation,
      });
    } else {
      // Ako je odgovor neuspješan, prikazujemo grešku u konzoli
      console.error("Greška pri dohvaćanju podataka o vremenu");
    }
  };

  // Koristimo useEffect kuku za dohvaćanje podataka nakon prvog renderovanja i svake sekunde
  useEffect(() => {
    // Pozivamo funkciju za dohvaćanje podataka
    fetchVrijeme();
    // Postavljamo tajmer koji će pozivati funkciju za dohvaćanje podataka svake sekunde
    const timer = setInterval(fetchVrijeme, 1000);
    // Vraćamo funkciju za čišćenje tajmera kada se komponenta odmontira
    return () => clearInterval(timer);
  }, []); // Prilikom definisanja ovisnosti, ostavljamo prazan niz, jer želimo da se funkcija izvrši samo jednom nakon prvog renderovanja

  // Vraćamo JSX element koji prikazuje ime grada i podatke o vremenu i datumu
  return (
    <div className="vrijeme">
      <h4>{props.grad}</h4>
      <p>
        {vrijeme.datetime.slice(11, 19)} {vrijeme.abbreviation}
      </p>
      <p>{vrijeme.datetime.slice(0, 10)}</p>
    </div>
  );
}

export default Vrijeme;
