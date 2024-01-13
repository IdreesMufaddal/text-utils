
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 2000);

const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
}

  const toggleMode = (cls) => {
    removeBodyClasses ();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1e447c'
      showAlert('Dark Mode Has Been Enabled', 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Has Been Enabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtiles' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <TextForm heading='Enter Your Text Here' mode={mode} showAlert={showAlert} /> */}
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm heading='Enter Your Text Here' mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
