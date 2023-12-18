  import './App.css';
  import './ikshana.css'
  import { Header } from './components/Header';
  import { Footer } from './components/Footer';
  import { Counterbox } from './components/counterbox';
  import { Taskbox } from './components/taskbox';

  function App(){
    
  return(
    <>
    <Header/>
    <div className="body-container">
    <Counterbox />
    <Taskbox/>
    </div>
    <Footer/>


    </>
    );
  }

  export default App;
