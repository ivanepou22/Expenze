import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
