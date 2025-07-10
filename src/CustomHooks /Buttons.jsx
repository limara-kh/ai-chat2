
import React from 'react';
import { useMessage } from './MessageContext';

const Buttons = () => {
  const { dispatch } = useMessage();

  return (
    <div className="buttons">
      <button onClick={() => dispatch({ type: 'success' })}>✅ Show Success</button>
      <button onClick={() => dispatch({ type: 'error' })}>❌ Show Error</button>
      <button onClick={() => dispatch({ type: 'clear' })}>🧹 Clear</button>
    </div>
  );
};

export default Buttons;
