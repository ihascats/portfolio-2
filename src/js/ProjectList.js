import Icons from './Icons';

export default function ProjectList() {
  const iconPack = Icons();

  const project1 = {
    name: 'Weather App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    stack: [iconPack.html, iconPack.css, iconPack.javascript, iconPack.webpack],
  };
  const project2 = {
    name: 'Battleship Game',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    stack: [iconPack.html, iconPack.css, iconPack.javascript, iconPack.webpack],
  };
  const project3 = {
    name: "Where's Waldo",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    stack: [
      iconPack.html,
      iconPack.css,
      iconPack.javascript,
      iconPack.react,
      iconPack.firebase,
    ],
  };
  const project4 = {
    name: 'Buzzer, a Twitter clone',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    stack: [
      iconPack.html,
      iconPack.css,
      iconPack.javascript,
      iconPack.react,
      iconPack.firebase,
    ],
  };

  const projects = [project1, project2, project3, project4];

  return projects;
}
