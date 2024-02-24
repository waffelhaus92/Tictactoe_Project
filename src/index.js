import React from "react";
import ReactDOM from "react-dom/client";
import { Board } from './tictactoe.jsx';

ReactDOM.createRoot(
    document.querySelector('#root')
).render(<Board />)