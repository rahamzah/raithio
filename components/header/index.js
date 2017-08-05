import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav class={"navbar bg-success text-center " + style.grain}>
          <h1 class="text-danger" href="#">
            Raith R. Hamzah
          </h1>
        </nav>
      </header>
    );
  }
}
