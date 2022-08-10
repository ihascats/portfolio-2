import { useEffect, useState } from 'react';
import './App.css';
import Project from './components/Project';
import Icons from './js/Icons';
import ProjectList from './js/ProjectList';

function App() {
  const iconPack = Icons();
  const projectList = ProjectList();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.onresize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {}, [windowWidth]);

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
          <div>
            {iconPack.html}
            {iconPack.css}
            {iconPack.javascript}
            {iconPack.react}
            {iconPack.firebase}
            {iconPack.webpack}
          </div>
        </div>
      </section>
      <section className="about">
        <div>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <section className="projects">
        <h1>Projects</h1>
        {projectList.map((project, index) => {
          if (index % 2 === 0) {
            return (
              <Project
                key={project.name}
                name={project.name}
                description={project.description}
                image={project.image}
                stack={project.stack}
                windowWidth={windowWidth}
              />
            );
          }
          return (
            <Project
              key={project.name}
              name={project.name}
              description={project.description}
              image={project.image}
              stack={project.stack}
              direction={false}
              windowWidth={windowWidth}
            />
          );
        })}
      </section>
      <section className="contact"></section>
      <footer></footer>
    </div>
  );
}

export default App;
