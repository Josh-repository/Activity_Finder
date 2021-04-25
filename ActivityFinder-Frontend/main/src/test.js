function App() {
  let history = useHistory();
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Activity_Finder</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/home_page" component={Dashboard} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home/chatbot" component={Chat} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
export default App;