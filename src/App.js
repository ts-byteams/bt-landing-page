import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from '../src/components/Home';
import Engineers from '../src/components/Engineers';
import Managers from '../src/components/Managers';
import TeamMembers from '../src/components/TeamMembers';
import Start from './components/Start';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/engineers" element={<Engineers />} />
        <Route path="/managers" element={<Managers />} />
        <Route path="/team" element={<TeamMembers />} />
      </Route>
    </Routes>
  )
}

export default App;
