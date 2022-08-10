import './styles/Project.css';

export default function Project({
  name,
  description,
  image,
  stack,
  direction = true,
  windowWidth,
}) {
  const left = (
    <section className="project">
      <div className="projectImage">
        <img src={image} alt=""></img>
      </div>
      <div className="projectText">
        <h2 className="projectName">{name}</h2>
        <div className="stack">
          {stack.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
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
          {stack.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
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
