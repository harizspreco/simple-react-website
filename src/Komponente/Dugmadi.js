function Dugmadi() {
    return (
      <div className="dugmadi">
        <button onClick={() => window.open("mailto:bing@microsoft.com")}>
          Pošalji mi e-mail
        </button>
        <button onClick={() => window.open("tel:+1234567890")}>
          Pozovi me
        </button>
        <button onClick={() => window.open("https://www.facebook.com/bing")}>
          Prati me na Facebooku
        </button>
      </div>
    );
  }
  
  export default Dugmadi;
  