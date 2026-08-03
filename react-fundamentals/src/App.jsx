import { useState } from 'react'
import './App.css'

function App() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleLogin(event) {
        event.preventDefault()
        console.log('Username:', username)
        console.log('Password:', password)
    }

    return (
        <form onSubmit={handleLogin}>
            <h2>Login Form</h2>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit" onClick={handleLogin}>
                Login
            </button>
        </form>
    )
}

export default App