import React from 'react';
import { useNavigate } from 'react-router';
const Home = () => {
    const nav = useNavigate()
    return (
    <>
        <h1>
            Home Page
            <h2>Home</h2>
            <button onClick = {() => {
                nav("/user/jason")
            }}>
                Go user
            </button>
        </h1>
    </>    
    )
    
}

export default Home