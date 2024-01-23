import React from 'react';
import {Container} from "react-bootstrap";
import ShowCommand from "../Code/ShowCommand";
import img from "../Assets/Images/reactWS.png";

function ReactSetup(props) {
    return (
        <Container fluid="true">
            <h3 className="title text-dark"><strong>Setup IDE for React</strong></h3>
            <h4><strong className="subTitle text-dark">With VS Code</strong></h4>
            <h4 className="globalDescription">Download VS Code from <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">https://code.visualstudio.com</a></h4>
            <h4 className="subTitle text-dark">Install those plugins</h4>
            <ul className="globalDescription">
                <li>React</li>
                <li>ES7+ React/Redux/React-Native snippets</li>
                <li>React Refactor</li>
                <li>Prettier</li>
                <li>Import Cost</li>
                <li>Simple React Snippets</li>
            </ul>

            <h3 className="title text-dark"><strong>Setup IDE for React</strong></h3>
            <h4><strong className="subTitle text-dark">With Webstorm</strong></h4>
            <h4><strong className="globalDescription">Download Webstorm from <a href="https://www.jetbrains.com/webstorm/download/download-thanks.html" target="_blank" rel="noreferrer">https://www.jetbrains.com/webstorm/download/download-thanks.html</a></strong></h4>

            <h5 className="subTitle text-dark mt-3">Note: If you want to use Webstorm there is no free version , your need to pay some money</h5>
            <h5 className="subTitle text-dark mt-3">For Webstorm there is no need to configure it.</h5>

            <h4 className="title text-dark mt-3">Download NodeJs</h4>
            <h5 className="globalDescription">From <a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">https://nodejs.org/en/download</a></h5>

            <h4 className="subTitle text-dark">React project creation </h4>

            <h4 className="subTitle text-dark"><ShowCommand commadnd="npx create-react-app demo"/></h4>
            <h4 className="subTitle text-dark"><ShowCommand commadnd="cd demo"/></h4>
            <h4 className="subTitle text-dark"><ShowCommand commadnd="npm start"/></h4>
            <p className="globalDescription bg-info p-1">
                First command create a react-project name demo. Second command navigate to your project directory. Third command will run your project.
            </p>

            <h4 className="subTitle text-dark"><ShowCommand commadnd="code ."/></h4>
            <p className="globalDescription bg-info p-1">
                 This command open this project in VS Code.
            </p>
            <p className="globalDescription bg-info p-1">
                Your can drag this project with VS Code or Webstorm.
            </p>
            <h4 className="subTitle text-dark">Simply create react-project in Webstorm</h4>
            <img className="projectImg" src={img} alt="react-project"/>
            <p className="globalDescription bg-danger p-1 mt-2">
                Note: For every steps you need to internet connection.
            </p>
        </Container>
    );
}

export default ReactSetup;
