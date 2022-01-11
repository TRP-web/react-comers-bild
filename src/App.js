import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Main from './pages/Main';
import Products from './pages/Product/Products';
import './style/App.scss'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/product' element={<Products />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
