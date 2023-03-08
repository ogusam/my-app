import { Link } from "react-router-dom";

import React from 'react'

const nav = () => {
  return (
    <ul>
        <li>
            <link className="nav-link">Home</link>
        </li>
        <li>
            <link className="new-link">Teams</link>
        </li>
    </ul>
  )
}

export default nav