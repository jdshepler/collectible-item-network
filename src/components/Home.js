import React, { Component } from 'react';
import styled from "styled-components";
import Container from '@material-ui/core/Container';

export class Home extends Component {

  render() {
      const PaperDiv = styled.div`
            background: linear-gradient(rgba(255,255,255, 1), rgba(255,255,255,.8));
            border-radius: 15px;
            margin: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 50px;
        `;
    return (
        <Container maxWidth="md">
          <PaperDiv >
            <h1>Hello, world!</h1>
            <p>Welcome to the development build of the Collectible Item Network!</p>

            <p><br />This is built with:</p>

                <ul>
                  <li><a href="https://nodejs.org/en/">Node.js</a> for the server framework</li>
                  <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                  <li><a href='http://getbootstrap.com/'>Material UI</a> for layout and styling</li>
                  <li><a href="https://www.mongodb.com/">MongoDB</a> for database management</li>
                </ul>
          </PaperDiv>
        </Container>
    );
  }
}
