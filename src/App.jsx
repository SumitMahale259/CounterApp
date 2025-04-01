import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Counter from './components/Counter';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
    },
    // {
    //   path: "/",
    //   element: <About/>,
    // },
  ]);
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark Mode is enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is enabled', 'success');
    }
  };

  const [alert, setAlert] = useState(null)
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Navbar title="Title" toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm mode={mode}/>
      </div>
      <Counter/>
      {/* <RouterProvider router={router} /> */}
    </>
  )
}

export default App