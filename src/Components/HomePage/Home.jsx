import React from "react";
import './Home.css';

const Home = () => {

    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
        </div>
    );
}

export default Home;