import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <div>React SSR</div>
      <Link to="/user">Go To User</Link>  
    </div>
  )
}

export default App