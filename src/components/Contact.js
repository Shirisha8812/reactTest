import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="divContact">
        <Grid className="divGrid">
          <Cell col={6}>
            <h2>Shashank</h2>
            <img
              src="https://thumbs.dreamstime.com/b/indian-man-avatar-portrait-young-attractive-hipster-105320357.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Young self learning dynamic. Eager to learn new technologies.{" "}
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
