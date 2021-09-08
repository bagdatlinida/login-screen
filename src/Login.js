import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Login() {
    return (
      <div className="Login">
        <Router>
<Switch>
    <Route path="/login" >
        <p className="login-text">
          LOGIN</p>
    </Route>
    </Switch>

</Router>
        <form>
          <label>e-mail: </label>
          <input required title="lütfen mail formatında giriniz " type="email" />
          <br />
          <br />
          <label> Password: </label>
          <input required type="password" />
          <br />
          <br />
          <button id="loginbutton" type="submit">
            Submit
          </button>
          <br />
        </form>
      </div>
    );
  }