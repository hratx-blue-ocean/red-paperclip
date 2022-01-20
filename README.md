# Red Paperclip

<br />

<div align="center">
<img src="ReadmeImages/RedPaperclipLogo.png" alt="Red Paperclip Logo"/>
</div><br>

<br>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#contributors">Contributors</a>
      <ul>
        <li><a href="#rebekah-cruz">Rebekah Cruz</a></li>
        <li><a href="#cory-ellerbroek">Cory Ellerbroek</a></li>
        <li><a href="#william-fink">William Fink</a></li>
        <li><a href="#blake-hughes">Blake Hughes</a></li>
        <li><a href="#travis-morse">Travis Morse</a></li>
        <li><a href="#matthew-sewell">Matthew Sewell</a></li>
        <li><a href="#pingping-xiao">Pingping Xiao</a></li>
      </ul>
    </li>
    <li>
      <a href="#project-overview">Project Overview</a>
      <ul>
        <li><a href="#application-demo">Application Demo</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>
<br>

<!-- Introduction -->

# Introduction

Red Paperclip was a collaborative Full-Stack project between the 7 collaborators. This was a brief 1-week sprint that simulated the real-world development of a Full-Stack web application to the demands provided by the client.

<br>

<!-- Contributors -->

# Contributors

## Rebekah Cruz

UI Owner/Software Engineer

<img src="ReadmeImages/RebekahCruz.jpg" alt="Rebekah Cruz headshot" width="100">

[![gmail-shield]][rebekah-email]
[![linkedin-shield]][rebekah-linkedin]
[![github-shield]][rebekah-github]

## Cory Ellerbroek

Project Manager/Software Engineer

 <img src="ReadmeImages/CoryEllerbroek.jpeg" alt="Cory Ellerbroek Headshot" width="100">

[![gmail-shield]][cory-email]
[![linkedin-shield]][cory-linkedin]
[![github-shield]][cory-github]

## William Fink

 <img src="ReadmeImages/WilliamFink.jpg" alt="William Fink Headshot" height="100">

[![gmail-shield]][william-email]
[![linkedin-shield]][william-linkedin]
[![github-shield]][william-github]

## Blake Hughes

UI Owner/Software Engineer

 <img src="ReadmeImages/BlakeHughes.png" alt="Blake Hughes Headshot" width="100">

[![gmail-shield]][blake-email]
[![linkedin-shield]][blake-linkedin]
[![github-shield]][blake-github]

### Travis Morse
UI Owner/Software Engineer

<img src="ReadmeImages/TravisMorse.jpg" alt="Travis Morse Headshot" width="100">

[![gmail-shield]][travis-email]
[![linkedin-shield]][travis-linkedin]
[![github-shield]][travis-github]

## Matthew Sewell

Architecture Owner/Software Engineer

 <img src="ReadmeImages/MatthewSewell.png" alt="Matthew Sewell Headshot" width="100">

[![gmail-shield]][matthew-email]
[![linkedin-shield]][matthew-linkedin]
[![github-shield]][matthew-github]

## Pingping Xiao

Architecture Owner/Software Engineer

 <img src="ReadmeImages/PingpingXiao.jpg" alt="Pingping Xiao Headshot" width="100">
 
[![gmail-shield]][pingping-email]
[![linkedin-shield]][pingping-linkedin]
[![github-shield]][pingping-github]


<br>
Team Member Expectations and Workflow:

- Communicated their progress in daily standups
- Created and completed their task tickets using Trello
- Brainstormed and reflected the teams work in 2 day mini-sprints

<br>

# Project Overview

<br>

This project was a brief 1-week sprint where our team tried to complete an MVP for a client. The client provided the following guidance:

> "I’d like to create an app that’s called "Red Paperclip", where users can post an item that they have to trade in exchange for an item that someone else has posted (ie. A user has a red paperclip, and hopefully someone else has something they're willing to trade for that red paperclip) Multiple users should be able to post their items, but each user should only have one item posted at a time. A feed should display all items and each user should have a personal page that tracks everything you’ve traded so far. The users should be able to chat about their items before confirming the trade. I would like an admin dashboard to moderate the page"

<br>
<!-- USAGE EXAMPLES -->

## Application Demo

<br>
<img src="https://tinyimg.io/i/5FG8soG.gif" alt="application-demo1">
<br>
<img src="https://tinyimg.io/i/Qmcm9tQ.gif" alt="application-demo2">
<br><br>

### Tech Stack

- [React](https://reactjs.org/)
- [MaterialUI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [Express](https://expressjs.com/)
- [Firebase](https://firebase.google.com/)
- [Webpack](https://webpack.js.org/)

<br>

<!-- GETTING STARTED -->

# Getting Started

To explore the project, follow the instructions below.

### Prerequisites

- npm
  ```sh
  npm install
  ```

### Installation

1. Navigate to the main red-paperclip folder and install the local dependencies:
   npm i

2. Open a seperate terminal and navigate to the firebase/functions folder and install the local dependencies:
   npm i

3. Install the firebase tools globally:
   npm i -g firebase-tools

4. Login into firebase:
   From the firebase/functions folder run:
   firebase login

5. Start webpack and have it listen for changes.
   From the red-paperclip folder run:
   npm run watch

6. To launch locally
   From the firebase/functions folder run:
   firebase serve

7. To deploy
   From the firebase/functions folder run:
   firebase deploy --only hosting

<br><br>


## Acknowledgements

- [NodeJS](https://nodejs.org/)
- [Img Shields](https://shields.io)
- [dateformat](https://github.com/felixge/node-dateformat)
- [@react-google-maps/api](https://react-google-maps-api-docs.netlify.app/)
- [dotenv](https://github.com/motdotla/dotenv#readme)
- [process](https://github.com/defunctzombie/node-process#readme)

<!-- Contributor Links -->

[rebekah-linkedin]: https://www.linkedin.com/in/rebekah-cruz/
[rebekah-github]: https://github.com/bexter89
[rebekah-email]: mailto:rebekah.cruz702@gmail.com
[cory-linkedin]: https://www.linkedin.com/in/coryellerbroek/
[cory-github]: https://github.com/LrBrK33
[cory-email]: mailto:cory.ellerbroek@gmail.com
[william-linkedin]: https://www.linkedin.com/in/william-w-fink/
[william-github]: https://github.com/wwfink30
[william-email]: mailto:wwfink30@gmail.com
[blake-linkedin]: https://www.linkedin.com/in/blakeedwardhughes/
[blake-github]: https://github.com/blake-ed-hughes
[blake-email]: mailto:blake.ed.hughes@gmail.com
[travis-linkedin]: https://www.linkedin.com/in/travis-morse-7574107a/
[travis-github]: https://github.com/travis503
[travis-email]: mailto:travis503@gmail.com
[matthew-linkedin]: https://www.linkedin.com/in/matthew-sewell-75470262/
[matthew-github]: https://github.com/thechosenginger
[matthew-email]: mailto:sewell.matthewm@gmail.com
[pingping-linkedin]: https://www.linkedin.com/in/pingpingxiao/
[pingping-github]: https://github.com/Applebear912
[pingping-email]: mailto:xiaopingping1994@gmail.com
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-grey?style=for-the-badge&logo=linkedin
[github-shield]: https://img.shields.io/badge/-GitHub-grey?style=for-the-badge&logo=github
[gmail-shield]: https://img.shields.io/badge/-Gmail-grey?style=for-the-badge&logo=Gmail&logoColor=white
