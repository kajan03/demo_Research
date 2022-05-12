import './App.css';
import StudentForm from './pages/StudentForm';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<StudentForm />}></Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
