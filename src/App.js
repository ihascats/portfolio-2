import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ContactForm } from './components/ContactForm';
import Project from './components/Project';
import Icons from './js/Icons';
import ProjectList from './js/ProjectList';

function App() {
  const iconPack = Icons();
  const projectList = ProjectList();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // code from https://www.youtube.com/watch?v=oszUqCqTGHo&ab_channel=ProgramWithAbu
  const aboutSection = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 55,
      behavior: 'smooth',
    });
  };
  //

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
              <button onClick={() => scrollToSection(aboutSection)}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(projectsSection)}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(contactSection)}>
                Contact
              </button>
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
      <section ref={aboutSection} className="about">
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
      <section ref={projectsSection} className="projects">
        <h1>Projects</h1>
        {projectList.map((project, index) => {
          if (index % 2 === 0) {
            return (
              <Project
                key={project.name}
                projectInfo={project}
                windowWidth={windowWidth}
              />
            );
          }
          return (
            <Project
              key={project.name}
              projectInfo={project}
              windowWidth={windowWidth}
              direction={false}
            />
          );
        })}
      </section>
      <section ref={contactSection} className="contact">
        <h1>Contact</h1>
        <ContactForm />
      </section>
      <footer>
        Made by{' '}
        <a href="https://github.com/ihascats" target="_blank" rel="noreferrer">
          ihascats
        </a>
      </footer>
    </div>
  );
}

export default App;
