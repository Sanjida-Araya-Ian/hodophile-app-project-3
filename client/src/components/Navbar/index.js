import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css"

class Navbar extends React.Component {
  state = {
    isTop: true,
    shouldRedirectToChat: false
  };
  redirectToChat = this.redirectToChat.bind(this)


  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 30;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }
  redirectToChat() {
    this.setState({
      shouldRedirectToChat: true
    })
  }

  render() {

    let navbar = "navbar navbar-expand-lg fixed-top py-0";
    if (this.state.isTop) {
      navbar += " navbar-dark bg-transparent"
    } else {
      navbar += " navbar-light bg-white"
    }

    if (this.props.isLoggedIn === false) {
      return (
        <nav className={navbar} >
          <Link className="navbar-brand" to="/">
            Hodophile
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" >
                <Link to="/register"
                  className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}>
                  <i className="fa fa-link"></i> Register
                </Link>
              </li>
              <li className="nav-item" >
                <a className="nav-link" data-toggle="modal" data-target="#loginModal" href="#">
                  <i className="fa fa-key"></i> Log In</a>
              </li>
            </ul>
          </div>
        </nav>
      );

     } 
      else {
        return (
          <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white py-0">
            <Link className="navbar-brand text-body" to="/profile">
              Hodophile
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item m-2">
                  <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}><i className="far fa-calendar-alt"></i> Calendar</Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="/location" className={window.location.pathname === "/location" ? "nav-link active" : "nav-link"}><i className="fas fa-map-marker-alt"></i> Location </Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}><i className="fa fa-users"></i> About </Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="/gallery" className={window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"}><i className="fa fa-camera-retro"></i> Gallery </Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="/" className="nav-link" onClick={this.props.logOut}><i className="fa fa-window-close"></i> Log Out</Link>
                </li>
              </ul>
            </div>
          </nav>
      )
        }
    }
  }
// /}

export default Navbar;