import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to the development build of the Collectible Item Network!</p>

        <p><br />This is built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href="https://nodejs.org/en/">Node.js</a> for the server framework</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
          <li><a href="https://www.mongodb.com/">MongoDB</a> for database management</li>
        </ul>
      </div>
    );
  }
}
