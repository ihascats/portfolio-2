import './App.css';
import Icons from './js/Icons';

function App() {
  const iconPack = Icons();

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
      <section className="introduction">
        <div>
          <h1>Stefan Pavlović</h1>
          <h2>Full Stack Developer</h2>
          <h3>
            {iconPack.html}
            {iconPack.css}
            {iconPack.javascript}
            {iconPack.react}
            {iconPack.firebase}
          </h3>
        </div>
      </section>
      <section className="about">
        <div>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </p>
        </div>
      </section>
      <section className="projects"></section>
      <section className="contact"></section>
      <footer></footer>
    </div>
  );
}

export default App;
