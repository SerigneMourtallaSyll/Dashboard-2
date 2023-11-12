import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Content from './Components/Content';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container-fluid min-vh-100" id='app'>
      <div className='row contenu'>
        <div className='col-12 col-md-2 bg-white m-0 p-0' id='sideBar'>
          <Sidebar />
        </div>
        <div className='col-12 col-md-10 border-start p-0'>
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
