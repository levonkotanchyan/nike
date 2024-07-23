import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Footermenu from './components/Footermenu/Footermenu';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Content />
      <Footermenu />
      <Footer />
    </div>
  );
}

export default App;
