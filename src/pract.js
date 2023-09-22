import './App.css';
import AboutUs from './views/AboutUs'
import Portfolio from './views/Portfolio'
import ContactUs from './views/ContactUs'

import { useState } from 'react'

/*
Usages of components:
1. Screenwise component (e.g. ContactUs.js, About.js etc) | Folder: views
2. Reusable component (e.g. CustomBtn.js, Card.js etc) | Folder: components
*/

function App() {
  const [screen, setScreen] = useState()

  function updateScreen(screen) {
    setScreen(screen)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <CustomBtn /> */}

        <div style={{ display: 'flex', position: 'absolute', top: 0 }}>
          <button onClick={() => updateScreen('aboutUs')}>About Us</button>
          <button onClick={() => updateScreen('portfolio')}>Portfolio</button>
          <button onClick={() => updateScreen('contactUs')}>Contact Us</button>
        </div>

        {screen === 'aboutUs' && <AoutUs />}
        {screen === 'portfolio' && <Portfolio />}
        {screen === 'contactUs' && <ContactUs />}


      </header>
    </div>
  );
}

export default App;



/*
1. Button ==> Add Images, jab is per click hoga, to her bar
click per ek image UI per aegi. Is tarh multiple clicks per multiple
images aengi.

2. Delete All ==> Click karen to sari images delete hojaen!
*/