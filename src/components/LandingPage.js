import React from 'react';
import { Grid, Cell } from 'react-mdl';

function LandingPage() {
  return (
    <Grid className="landingPage">
      <Cell col={12}>
        <img
          src="https://thumbs.dreamstime.com/b/indian-man-avatar-portrait-young-attractive-hipster-105320357.jpg"
          alt="avatar"
          className="avtar-img"
        />
        <div className="banner-text">
          <h1>Web Developer</h1>
          <hr />
          <p>
            HTML | CSS | Bootstrap | JavaScript | React | React-native |
            Python | NodeJS | ExpressJS | MongoDB | AWS
          </p>
          <div className="social-links">
            <a
              href="www.google.com"
              rel=" noreferrer noopener"
              target="_blank"
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
            </a>

            <a
              href="www.google.com"
              rel=" noreferrer noopener"
              target="_blank"
            >
              <a
                href="www.google.com"
                rel=" noreferrer noopener"
                target="_blank"
              >
                <i className="fab fa-github-square" aria-hidden="true" />
              </a>
            </a>
          </div>
        </div>
      </Cell>
    </Grid>
  );
}

export default LandingPage;
