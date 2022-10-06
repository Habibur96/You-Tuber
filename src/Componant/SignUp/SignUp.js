import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../images/google.png';
import github from '../../images/gitHub.png';
import facebook from '../../images/facebook.png';

const SignUp = () => {
    return (
        <div className='container mx-auto w-25 mt-5'>
            <h2 class="d-flex text-danger mt-5 mb-5 pt-5">Please Register</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Name" required />
                    <Form.Text className="text-muted" >

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name="password" placeholder="Confirm Password" required />
                </Form.Group>

                <div class="align-items-start d-flex mb-5">

                    <Button type="submit" class="btn-lg btn btn-danger"> Register</Button>
                </div>

            </Form >

            {/* Social Login */}


            <p className='align-items-start d-flex fw-bold'>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none fw-bold' >Please Login</Link></p>

            <div >
                <div className='d-flex align-items-center mt-5 mb-4'>
                    <div style={{ height: '3px' }} className='bg-danger w-50'></div>
                    <p className='mt-3 px-3 fs-4'>Or</p>
                    <div style={{ height: '3px' }} className='bg-danger w-50'></div>
                </div>

                <div>
                    <button type="button" class="btn btn-dark btn-lg fs-5 fw-bolder"> <img height={40} src={google} alt="" /> Sign Up Google</button> <br /><br />

                    <button type="button" class="btn btn-danger btn-lg fs-5 fw-bolder "><img height={40} src={github} alt="" style={{ height: '40' }} /> Sign Up Github</button> <br /> <br />

                    <button type="button" class="btn btn-info btn-lg fs-5 fw-bolder "><img height={40} src={facebook} alt="" style={{ height: '40' }} /> SignUp Facebook</button>
                </div> <br />




            </div>



        </div >
    );
};

export default SignUp;