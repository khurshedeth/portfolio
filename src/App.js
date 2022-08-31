import "./app.css";

function App() {
  return (
    < >
      <header>
        <nav>
          <div className="logo">
            <h1>
              Portfo<span>lio</span>
            </h1>
          </div>
          <div className="menu">
            <a href="#">Home </a>
            <a href="#">about </a>
            <a href="#">service </a>
            <a href="#">skill </a>
            <a href="#">contact us </a>
          </div>
        </nav>

        <main>
          <section>
            <h3>my name is </h3>
            <h1>khurshed alam</h1>
            <p>i am a developer &designer</p>
            <div className="btn">
            <button type="button">enter email</button>
            <button type="button">lets chat</button>
            </div>

          </section>
        </main>
      </header>
     
  { /* to another content */}
<footer>

</footer>
  

    </>
  );
}

export default App;
