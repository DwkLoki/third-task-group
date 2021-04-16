import ShowExcel from "./pages/ShowExcel"
import Chartjs from "./pages/Chartjs"
import Echart from "./pages/Echart"
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/excel">Show Excel</Link></li>
              <li><Link to="/chartjs">ChartJs</Link></li>
              <li><Link to="/echart">EChart</Link></li>
            </ul>
          </nav>
          <hr />
            <h1 className="text-center">Project Third Task Group</h1>
          <hr />
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/excel"><ShowExcel /></Route>
            <Route path="/chartjs"><Chartjs /></Route>
            <Route path="/echart"><Echart /></Route>
          </Switch> 
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;