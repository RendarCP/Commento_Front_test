import './App.scss';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
//layout
import PlaneLayout from './layout/PlainLayout'
//component
import Button from './components/Button/Button';
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
//page
import Feed from './pages/Feed/Feed'
import FeedDetail from './pages/FeedDetail/FeedDetail'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route exact path='/:id' component={FeedDetail} />
        </Switch>
      </Router>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
