import React from 'react';
import './index.css';

import Intro from './Intro/Intro.jsx';
import Me from './Me/Me.jsx';
import Skills from './Skills/Skills.jsx';
import Projects from './Projects/Projects.jsx';
import Experience from './Experience/Experience.jsx';
import Backup from './Backup/Backup.jsx';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Intro />
          <Me />
          <Experience />
          <Projects />
          <Skills />
          <Backup />
        </div>
    );
  }
}
