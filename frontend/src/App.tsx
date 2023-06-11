import AllRoutes from "./routes/AllRoutes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
      <div className="App">
        <ToastContainer />
        <AllRoutes />
    </div>
  )
}

export default App
