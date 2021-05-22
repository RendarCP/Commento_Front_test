import './App.scss';

//layout
import PlaneLayout from './layout/PlainLayout'
//component
import Button from './components/Button/Button';
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
//page
import Feed from './pages/Feed/Feed'


function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
