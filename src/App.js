import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import Engineers from '../src/components/Engineers';
import Managers from '../src/components/Managers';
import Team from '../src/components/Team';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/engineers" element={<Engineers/>}/>
      <Route path="/managers" element={<Managers/>}/>
      <Route path="/team" element={<Team/>}/>
    </Routes>
  )
}

export default App;
