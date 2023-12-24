  import './css/App.css';
  import './css/ikshana.css'
  import { Header } from './components/Header';
  import { Footer } from './components/Footer';
  import { Counterbox } from './components/counterbox';
  import { TaskList } from './components/tasklist';
  import { ProductList } from './components/ProductList';
  import {NewsList} from './components/NewsList'

  function App(){
    
  return(
    <>
    <Header/>
    <div className="body-container">
    <Counterbox />
    <TaskList/>
    {/* <ProductList/> */}
    <NewsList/> 
    </div>
    <Footer/>
    </>
    );
  }

  export default App;
