import './App.css';
import HomePage from './containers/HomePage/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductLists from './containers/ProductListsPage/ProductLists';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path ="/:slug" component={ProductLists}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
