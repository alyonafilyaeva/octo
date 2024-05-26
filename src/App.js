import './App.css';
import Black from './components/black/black';
import Header from './components/header/header';
import Main from './components/main/main';
import SliderBlock from './components/slider/slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Black />
      <SliderBlock />
    </div>
  );
}

export default App;
