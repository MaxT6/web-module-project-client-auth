import React, {useEffect, useState} from "react";
import axios from 'axios'

export default function Login(props) {
  const [state, setState] = useState({
    credentials: {
    username: "",
    password: "",
    }
  })

  const handleChange = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:9000/api/login', state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token)
        props.history.push("/friends")
      })
  }


  return(
    <div>
      <form onSubmit={login}>
        <input 
          type="text"
          name="username"
          value={state.credentials.username}
          onChange={handleChange} />
        <input
         type="password"
         name="password"
         value={state.credentials.password}
         onChange={handleChange} />
        <button>Log in</button>
      </form>
    </div>
  )

}