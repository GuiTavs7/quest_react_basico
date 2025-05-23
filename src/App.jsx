import './App.css'
import Button from './components/button/button';
import Paragrafo from './components/paragrafo/paragrafo';
import Heading_1 from './components/heading_1/heading_1';

function App() {

  return (
    <>
     <div className='container-pai'>
      <Heading_1/>
      <Paragrafo label = "Hello World!" color = "purple"/>
      <Button label="Baixar CV"/>
     </div>
    </>
  );
}

export default App;