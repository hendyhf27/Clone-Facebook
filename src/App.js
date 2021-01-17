import './App.css';
import Header from './Component/Header/Header'
import Sidebar from './Component/Sidebar/Sidebar'
import Feed from './Pages/Feed/Feed'

function App() {
  return (
    <div className="App">

      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>

    </div>
  );
}

export default App;
