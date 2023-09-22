import "./App.css";

import { useState } from "react";

import Dashboard from "./views/Dashboard.js";
import Detail from "./views/Detail";
import PostAD from "./views/PostAD";


function App() {
const [Screen,setScreen] = useState('')

  function screen_update_func(screen) {
    setScreen(screen)
  }


  return (
    <div className="App">
      <header className="App-header">

        <div style={{ display: 'flex', position: 'absolute', top: 0 }}>
          <button onClick={() => screen_update_func('Dashboard')}>
            Dashboard
          </button>
          <button onClick={() => screen_update_func('Detail')}>Detail</button>
          <button onClick={() => screen_update_func('PostAD')}>PostAD</button>
        </div>

{/* Conditional rendering */}

{Screen === 'Dashboard' && <Dashboard/>}
{Screen === 'Detail' && <Detail/>}
{Screen === 'PostAD' && <PostAD/>}

      </header>
    </div>
  );
}

export default App;
