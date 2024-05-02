import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import AlternateBackground from './AlternateBackground';

function LoginsHero(){
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const [notification, setNotification] = useState(null);

    function updateFormData(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        logInUser(formData)
    }

    function logInUser(loginData) {
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(response => {
            if (response.ok) {
                response.json().then(userData => {
                    setNotification("Welcome!");
                    setFormData({ username: "", password: "" });
                });
            } else if (response.status === 401) {
                response.json().then(errorData => alert(`Error: ${errorData.error}`));
            }
        })
        .catch(error => {
            console.error('Login failed:', error.message);
        });
    }

    return(
        
        <div>
            <AlternateBackground heading='Products:' />
            <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/> 
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div>
             {notification && (
                 <div className="notification">
                     <p>{notification}</p>
                 </div>
             )}
             <form onSubmit={handleSubmit}>
                 <input type="text" name="username" placeholder="Username" value={formData.username} onChange={updateFormData} />
                 {/* <input type="password" name="password" placeholder="Password" value={formData.password} onChange={updateFormData} /> */}
                 <button type="submit">Login</button>
             </form>
         </div>
            </div>
        </div>
    )
 }

 export default LoginsHero;


