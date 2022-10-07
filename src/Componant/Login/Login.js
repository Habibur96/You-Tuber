import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    return (
        <div className='container d-block w-25 mt-5 pt-5'>

            <h2 class="d-flex text-danger">Please Login</h2>


            <Form
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 mb-4" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <div class="align-items-start d-flex">

                    <Button type="submit" class="btn-lg btn btn-danger btn-lg">Login</Button>
                </div>

            </Form>  <br /> <br />




            <p className='d-flex fw-bold'>New to my website? <Link to='/signUp' className='text-danger fw-bold pe-auto text-decoration-none'>Please Register</Link></p>

            <p className='d-flex fw-bold'>Forget Password? <Link to='/signUp' className='text-danger fw-bold pe-auto text-decoration-none'> Reset Password</Link></p>

            <SocialLogin></SocialLogin>
        </div>



    );
};

export default Login;