
import { Routes,Route} from 'react-router-dom'
import About from './Components/AboutUs';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (

    <>
<Navbar />
 <Routes>
   <Route path='/' element={<Home/>}/> 
   <Route path='/about' element={<About/>}/>
 </Routes>

</>

  );
}

export default App;
