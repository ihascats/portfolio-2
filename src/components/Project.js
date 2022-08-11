import './styles/Project.css';

export default function Project({
  projectInfo,
  windowWidth,
  direction = true,
}) {
  const name = projectInfo.name;
  const description = projectInfo.description;
  const image = projectInfo.image;
  const stack = projectInfo.stack;
  const live = projectInfo.live;
  const repo = projectInfo.repo;

  const left = (
    <section className="project">
      <div className="projectImage">
        <img src={image} alt=""></img>
      </div>
      <div className="projectText">
        <h2 className="projectName">{name}</h2>
        <div className="stack">
          <div>
            {stack.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
          <div>
            <a href={live} target="_blank">
              <button tabIndex="-1">Live</button>
            </a>
            <a href={repo} target="_blank">
              <button tabIndex="-1">Repo</button>
            </a>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </section>
  );

  const right = (
    <section className="project">
      <div className="projectText">
        <h2 className="projectName">{name}</h2>
        <div className="stack">
          <div>
            {stack.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
          <div>
            <a href={live} target="_blank">
              <button tabIndex="-1">Live</button>
            </a>
            <a href={repo} target="_blank">
              <button tabIndex="-1">Repo</button>
            </a>
          </div>
        </div>
        <p>{description}</p>
      </div>
      <div className="projectImage">
        <img src={image} alt=""></img>
      </div>
    </section>
  );

  return windowWidth <= 1080 ? (
    <div className="projectContainer">{left}</div>
  ) : (
    <div className="projectContainer">{direction ? left : right}</div>
  );
}
