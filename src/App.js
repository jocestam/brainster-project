
import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Akademii from './components/akademii/Akademii';
import Footer from './components/footer/Footer';
import Nastani from './components/nastani/Nastani';
import Prostor from './components/prostor_za_nastani/Prostor';



function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/akademii' component={Akademii}/>
        <Route path='/nastani' component={Nastani}/>

        <Route path='/prostor_za_nastani' component={Prostor}/>
        
        
       
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
