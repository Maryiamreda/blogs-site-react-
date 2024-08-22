import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import ReactQuery from './reactQuery';
import BlogList2 from './blogList2';
import BlogList1 from './blogList1';


function App() {




  return (
    <Router><div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="/react-query">
            <ReactQuery />
          </Route>
          <Route path="/blogList2">
            <BlogList2 />
          </Route>
          <Route path="/blogList1">
            <BlogList1 />
          </Route>
        </Switch>
      </div>
    </div>



    </Router>

  );
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
} //
export default App;
