import React from 'react';
import './About.css'
import pic from '../../images/Noyon.png'

const About = () => {
    return (
        <div className='pt-5 mt-5 image'>
            <img src={pic} height="400" width="500" alt="" />

            <div className=' info container mx-auto w-25 mt-5'>

                <h3 ><b className='text-danger'>Name:</b> Nayan</h3>
                <h3><b className='text-danger'>Goal:</b></h3>
                <p className='fw-bold fs-4'>My goal is to become a web developper. The main objective when working as a developer is to be productive and deliver value to the company. As a developer or a CTO, the aim is to build practical applications that will be 100% successful. I am always interested
                    about new ideas.</p>

                <br /> <br />
                <h3 className='text-danger'><b>To achieve your goal: </b></h3>
                <p className='fw-bold fs-4 ' >To achieve this, specific goals need to be set, which include: Enhancing my networking skills. Besides I have to learn web related technologies. Such as, Html, Css, JavaScript, React, Redux, MongoDB, Nodejs, Firebase. To reach my goal obviously, I have to clear basices to advance concepts about this technologies and more than one responsive website.</p>
            </div>

        </div>
    );
};

export default About;