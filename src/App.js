import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <div className="main-container">
      <Header />
    </div>
  );
}

export default App;
