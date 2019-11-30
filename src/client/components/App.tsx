import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <div>React SSR</div>
      <button onClick={() => console.log('run')}>Click Me!</button>  
    </div>
  )
}

export default App