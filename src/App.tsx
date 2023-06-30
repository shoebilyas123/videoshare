import { useState } from 'react';
import './App.css';

import AppLayout from './components/layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppLayout></AppLayout>
    </>
  );
}

export default App;
