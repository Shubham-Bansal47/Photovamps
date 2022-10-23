import React from 'react';
import './Home.css';

function Home(){
    return(
        <div className='Home-outer row d-flex flex-column align-items-center justify-content-center'>
            <div className='mt-4 Home-mid row d-flex flex-row justify-content-around align-items-center col-lg-10 col-sm-12'>
                <div className="home-left col-lg-6 col-sm-12 d-flex flex-column align-items-center justify-content-center text-center">
                    <h1 className='home-heading col-lg-6 col-sm-12'>Find An Expert</h1>
                    <h1 className='home-heading col-lg-6 col-sm-12'>PHOTOGRAPHER</h1>
                    <input className="mt-3 col-lg-6 col-sm-6" type="text" placeholder='&#x1F50D; Enter The Name'/>
                    <span className='home-span mt-2 col-lg-12 col-sm-12'>Design, Writing, Animation, Photography, Videos</span>
                </div>
                <div className="mt-5 mb-5 col-lg-6 col-sm-12 home-image d-flex align-items-center justify-content-center text-center">
                    <img src="./images/homeimage.png" alt="_homeimage" />
                </div>
            </div>
        </div>
    );
};

export default Home;