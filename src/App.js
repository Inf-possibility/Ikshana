  import './App.css';
  import './ikshana.css'
  import { Header } from './components/Header';
  import { Footer } from './components/Footer';
  import { Counterbox } from './components/counterbox';
  import { TaskList } from './components/tasklist';

  function App(){
    
  return(
    <>
    <Header/>
    <div className="body-container">
    <Counterbox />
    <TaskList/>
    </div>
    <Footer/>


    </>
    );
  }

  export default App;
