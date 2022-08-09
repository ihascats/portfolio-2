import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header>
        <nav>
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Projects</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="introduction"></section>
      <section className="about"></section>
      <section className="projects"></section>
      <section className="contact"></section>
      <footer></footer>
    </div>
  );
}

export default App;
