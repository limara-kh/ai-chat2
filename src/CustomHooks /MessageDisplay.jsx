
import React from 'react';
import { useMessage } from './MessageContext';
import './App.css';

const MessageDisplay = () => {
  const { state } = useMessage();

  if (!state.message) return null;

  return (
    <div className={`message ${state.type}`}>
      {state.message}
    </div>
  );
};

export default MessageDisplay;
