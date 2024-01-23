import './App.css';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Support } from './components/Support';
import { Testimonial } from './components/Testimonial';

function App() {
  return (
    <div className="App">

      <Header />
      <Content />
      <Testimonial />
      <Support />
      <Footer />

    </div>
  );
}

export default App;
