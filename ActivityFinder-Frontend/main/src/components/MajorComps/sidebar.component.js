import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import logo from "../../assets/img/lens.png"

var ps;

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
        this.sidebar = React.createRef();
        this.onLogout = this.onLogout.bind(this);
    }
    onLogout() {
        this.props.history.push('/');
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.sidebar.current, {
                suppressScrollX: true,
                suppressScrollY: false,
            });
        }
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
        }
    }
    render() {
        const isAuthenticated = true;
        let logInOutButton;
        if (isAuthenticated) {
            logInOutButton = (<li>
                <a
                    onClick={this.onLogout}
                    className="nav-link"
                    activeClassName="active"
                >
                    <p>Logout</p>
                </a>
            </li>)
        }
        let nav = <Nav><li><a className="nav-link">Loading...</a></li></Nav>;
        if (isAuthenticated) {
            nav = (<Nav>
                {this.props.routes.map((prop, key) => {
                    if (!isAuthenticated) return;
                    return (
                        <li
                            className={
                                this.activeRoute(prop.path) +
                                (prop.pro ? " active-pro" : "")
                            }
                            key={key}
                        >
                            <NavLink
                                to={prop.layout + prop.path}
                                className="nav-link"
                                activeClassName="active"
                            >
                                <i className={prop.icon} />
                                <p>{prop.name}</p>
                            </NavLink>
                        </li>
                    );
                })}
                {logInOutButton}
            </Nav>);
        }
        return (
            <div
                className="sidebar"
                data-color={this.props.bgColor}
                data-active-color={this.props.activeColor}
            >
                <div className="logo">
                    <a
                        href="/home/weather"
                        className="simple-text logo-mini"
                    >
                        <div className="logo-img">
                            <img src={logo} alt="Logo" />;
                        </div>
                    </a>
                    <a
                        href="/home/weather"
                        className="simple-text logo-normal"
                    >
                        Activity_Finder
          </a>
                </div>
                <div className="sidebar-wrapper" ref={this.sidebar}>
                    {nav}
                </div>
            </div>
        );
    }
}
export default Sidebar;
