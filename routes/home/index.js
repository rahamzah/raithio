import { h, Component } from "preact";
import style from "./style";
import raithPoster from "../../assets/img/raith-cutout.png";
export default class Home extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class={style.appContainer}>
          <div class="row">
            <div class="col-xs-12 col-sm-8 text-center">
              <div class={"card bg-success text-danger " + style.noBorder}>
                <h2>Frontend Developer</h2>
                <article class={"card text-left " + style.subcard}>
                  <h4>about me</h4>
                  <p>
                    <strong>
                      I'm a frontend developer based out of Austin, Tx. I
                      currently work at Magento Commerce where I help develop
                      the platform's frontend framework and work on PWA
                      technologies.
                    </strong>
                  </p>
                  <p>
                    I enjoy solving complex problems and creating meaningful
                    experiences for end users. My weapon of choice recently has
                    been React and Redux though I've used other solutions as
                    well. I'm a big fan of RxJS for asynchronous code, Sass for
                    my CSS workflow, prettier for my linting, and I'm among the
                    lazy who enjoy type-systems in JavaScript.
                  </p>
                  <p>
                    Also... <strong>#DeathToSemicolons</strong>
                  </p>
                  <h4>
                    <a href="https://www.linkedin.com/in/raith/">
                      Find me on LinkedIn!
                    </a>
                  </h4>
                  <h4>Programming Skills</h4>
                  <ul>
                    <li>
                      Languages: JavaScript, Typescript, Python, Lisp, Java,
                      Php, C#
                    </li>
                    <li>Frontend: React + Redux, Vue, Angular 1 & 2</li>
                    <li>Libraries: RxJS, jQuery, LoDash</li>
                    <li>Build Tools: Webpack, Grunt</li>
                    <li>Fullstack: Express, Hapi, GraphQL, MySQL, Mongo</li>
                  </ul>
                  <h4>Life Skills:</h4>
                  <ul>
                    <li>Answering Star Trek trivia</li>
                    <li>Having boundless optimism</li>
                    <li>Sleeping on airplanes</li>
                  </ul>
                </article>
              </div>
            </div>
            <div class="col ">
              <img
                src={raithPoster}
                class="img-fluid rounded-circle"
                alt="Retro image of Raith Hamzah"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
