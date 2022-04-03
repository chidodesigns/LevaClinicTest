import './App.css';
import MainNavigation from './components/layout/MainNavigation';
import MedicalInfo from './pages/MedicalInfo';


function App() {
  return (
    <div>
      <MainNavigation/>
      <div className='container'>
        <MedicalInfo/>
      </div>
    </div>
  );
}

export default App;
