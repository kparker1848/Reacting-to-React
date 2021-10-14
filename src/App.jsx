import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';

const App = () => {
    const [username, setUsername] = useState(" ");
    const [loaded, setLoaded] = useState(false);

    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }

    const handleButtonClick = e => {
        setLoaded(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);;
    }, [loaded]);

    if (loaded == false) {
        return (
            <div>
                <h1>Website Loading...</h1>
                <button onClick={handleButtonClick}>Click to Load!</button>
            </div>
        );

    } else {
        return (
            <div>
                <Greeter name="Kelsie" phrase="Welcome" />
                <Greeter name="Kelsey" phrase="What's up" />
                <Greeter name="The Mothman" phrase="He flies by night" />
                <input type="text" value={username} onChange={handleUsernameChange} />
                <p>You are logging in as {username}</p>

            </div>


        );

    };

};

export default App;