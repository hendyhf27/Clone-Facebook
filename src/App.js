import './App.css';
import Header from './Component/Header/Header'
import Sidebar from './Component/Sidebar/Sidebar'
import Feed from './Pages/Feed/Feed'
import Login from './Component/Login/Login'

function App() {
  const user = null;
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
            </div>
          </>
        )}

    </div>
  );
}

export default App;
