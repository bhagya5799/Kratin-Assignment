import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import InHomeCare from './Components/InHomeCare';
import ElderCare from './Components/ElderCare';
import Respite from './Components/RESPITE';
import Exercises from './Components/Exercises';
import GetStarted from './Components/GetStarted';
import Register from './Components/Register';
import FeedBack from './Components/FeedBack';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/homecare' element={<InHomeCare />} />
        <Route exact path='/eldercare' element={<ElderCare />} />
        <Route exact path='/respitcare' element={<Respite />} />
        <Route exact path='/exercises' element={< Exercises />} /> 
        <Route exact path='/getstarted' element={<GetStarted/>}/>
        <Route exact path='/register' element={< Register />} />
        <Route exact path='/feedback' element={< FeedBack/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
