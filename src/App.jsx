import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Home, Pokemones, NotFound} from './layout/index'
import PokemoID from './layout/PokemoID'
import Menu from './components/Menu';
import MyContexProvider from './Context/Mycontext';

function App() {

  return (
    <MyContexProvider>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones/" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<PokemoID />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MyContexProvider>
  );
}

export default App
