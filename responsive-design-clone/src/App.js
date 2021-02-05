import "./App.css";
import react, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      menu: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos < 20;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  toggleMenu = () => {
    this.setState({menu: !this.state.menu})
  }

  render() {
    return (
      <main>
        <header className={`${this.state.visible ? '' : "scrolling"} ${this.state.menu ? 'menu' : ''}`}>
          <div className="logo">
            <img
              src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
              alt="logo"
            />
          </div>
          <nav className="bar">
            <ul>
              <button>SERVICES</button>
              <button>PORTFOLIO</button>
              <button>ABOUT</button>
              <button>TEAM</button>
              <button>CONTACT</button>
            </ul>
          </nav>
          <button className='menuButton' onClick={this.toggleMenu}>MENU</button>
        </header>
        <section className="mastHead">
          <div className="welcomeContainer">
            <span>
              <h2>Welcome To Our Studio!</h2>
              <h1>IT'S NICE TO MEET YOU</h1>
              <button>TELL ME MORE</button>
            </span>
          </div>
        </section>
        <section className="services"></section>
      </main>
    );
  }
}

export default App;
