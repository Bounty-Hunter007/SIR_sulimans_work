import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../config/firebasic'

function Signup() {
  const [fullname, setFullname] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const signup = async() => {
    await register(email, password, fullname, age)
  
  }

  return <div>
    <h3>Signup</h3>

    <input onChange={e => setFullname(e.target.value)} placeholder="write fullname here" />
    <input type="number" onChange={e => setAge(e.target.value)} placeholder="write age here" />
    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="write email here" />
    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="write password here" />
    <br />
    <button onClick={signup}>Signup</button>

    <p>Already have an account? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Click here</span></p>

  </div>
}

export default Signup;