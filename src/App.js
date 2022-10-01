import './App.css';
import FirstSection from './components/FirstSection';
import NavBar from './components/NavBar';
import SecondSection from './components/SecondSection';
import Summer from './components/Summer';
import ThirdSection from './components/ThirdSection';
import EndSection from './components/EndSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Summer />
      <EndSection/>
    </div>
  );
}

export default App;
