import Icon from '@mdi/react';
import {
  mdiFirebase,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiReact,
} from '@mdi/js';

export default function Icons() {
  const html = (
    <Icon
      path={mdiLanguageHtml5}
      title="HTML 5"
      size={1.5}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const css = (
    <Icon
      path={mdiLanguageCss3}
      title="CSS 3"
      size={1.5}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const javascript = (
    <Icon
      path={mdiLanguageJavascript}
      title="Javascript"
      size={1.5}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const react = (
    <Icon
      path={mdiReact}
      title="React"
      size={1.5}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const firebase = (
    <Icon
      path={mdiFirebase}
      title="Firebase"
      size={1.5}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const icons = {
    html,
    css,
    javascript,
    react,
    firebase,
  };

  return icons;
}
