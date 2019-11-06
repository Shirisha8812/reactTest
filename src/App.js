import React from 'react';
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
} from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/Main';


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="navHeader" title="Title" scroll>
          <Navigation>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}
export default App;
