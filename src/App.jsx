import { useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const headers = {
              'Content-Type': 'application/json',
          };
          const response = await axios.post('https://connector-backend-2.onrender.com/connect', { email, password , number}, { headers });
          const data = response.data; // axios automatically parses the response
          console.log(data);
          setEmail("");
          setPassword("");
        } catch (error) {
            console.error('Error:', error);
        }
        setEmail("")
        setPassword("")
        setNumber("")
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>LinkedIn Connector</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Number of requests want to made</label>
                        <input
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Connect</button>
                </form>
            </header>
        </div>
    );
}

export default App;
