import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../config/firebasic'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const signin = async () => {
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch (e) {
      alert(e.message)
    }
  }

  return <div>
    <h3>Sign in</h3>

    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="write email here" />
    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="write password here" />
    <br />
    <button onClick={signin}>Sign in</button>

    <p>Don't have an account. <span style={{ cursor: 'pointer' }} onClick={() => navigate('/signup')}>Click here</span></p>
  </div>
}

export default SignIn;