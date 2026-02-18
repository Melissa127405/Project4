import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/User/Login';
import ListStudents from './Components/School/ListStudents';

function App() {
  return (
    <>
      <h2>React</h2>
      <ListStudents />
    </>
  );
}

export default App;
