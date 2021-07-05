export function Hero() {
  const openTab = () => {
    window.open("https://bit.ly/3AFzNgX", "_blank");
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__container-title">Hi, my name is</h1>
      </div>
      <div className="hero__container">
        <h2 className="hero__container-name">Julio Contreras.</h2>
      </div>
      <div className="hero__container">
        <h3 className="hero__container-profession">
          I am a Software Engineer.
        </h3>
      </div>
      <div className="hero__container">
        <p className="hero__container-description">
          I'm a Mexico-based software engineer who specializes in JavaScript
          technologies (like React, Angular and NodeJS/Express) With C# and .NET
          Core knowledge. Currently i'm looking for job opportunities 😄
        </p>
      </div>
      <div className="hero__container">
        <button onClick={openTab} className="hero__container-button">
          Download CV
        </button>
      </div>
    </section>
  );
}
