import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home"
import Movies from "../pages/Movies"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/movies"  component={Movies} />
      </Switch>
    </BrowserRouter>
  )

}

export default Routes