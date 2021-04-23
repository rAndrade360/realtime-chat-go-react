import React, { useEffect, useState } from 'react';
import {connect, sendMsg} from './api';
import './App.css';

const App = () => {

  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    connect((msg:any) => {
      const msgs = messages
      setMessages([...msgs, msg.data])
    });
  })

  const send = () => {
    console.log("Hello")
    sendMsg("Oieeeeee")
  }

  return (
    <div className="App">
      {
        messages.map((msg: any, index: number) => (
          <p key={index}>{msg}</p>
        ))
      }
      <button onClick={() => {send()}}>Enviar mensagem</button>
    </div>
  );
}

export default App;
