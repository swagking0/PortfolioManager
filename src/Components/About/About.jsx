import React from "react";
import "../../Styles/Components/about.css";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import nord from "react-syntax-highlighter/dist/esm/styles/prism/nord";

SyntaxHighlighter.registerLanguage("javascript", javascript);

function About() {
  const code = `if(project === "interesting") {
    export const myContactInformation = [
      {
        Email: 'bhargav.mohith101@gmail.com',
        LinkedIn: 'https://www.linkedin.com/in/mohith-bhargav-sunkara-930796119/',
        Github: 'https://github.com/swagking0',
      },
    ];
  } else {
    return 'Thank you for your time!';
  }`;
  return (
    <div className="about__container">
      <div className="about__wrapper">
        <h4>hello,</h4>
        <p>
          Welcome to the profile manager project. A project with a goal to plan
          and manage my data. The developed project is just a prototype with
          scope for developing a platform where users can store their data and
          share it with other platforms such as personal websites, LinkedIn
          etc.,
        </p>
        <p>
          With that saying, I planned to make this project opensource.
          Therefore, I would be happy to connect and share further information
          in regards to the core idea, development and possible collaborations.
        </p>
        <p>
          Finally, to wrap up, below I am attaching a test user credentials to
          login and explore the prototype. The login can be accessed through
          menu button on top right.
        </p>
      </div>
      <div className="about__wrapper">
        <div className="about__testuserwrapper">
          <div className="about__testuser">
            <div className="about__testuserfield">email:</div>
            <div className="about__testuservalue">testUser@pm.com</div>
          </div>
          <div className="about__testuser">
            <div className="about__testuserfield">password:</div>
            <div className="about__testuservalue">test12.</div>
          </div>
        </div>
      </div>
      <div className="about__wrapper">
        <SyntaxHighlighter language="javascript" style={nord}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default About;
