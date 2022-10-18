import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import { toast } from 'react-toastify';


const SignUp = () => {

    //SignUp with email & password
    const [
        createUserWithEmailAndPassword,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignUp = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);

        if (email) {
            toast('Email sent');
            await sendEmailVerification(email);
            navigate('/login');
        }
        else {

            toast('Enter your email address');
        }
    }

    return (
        <div className='container mx-auto w-25 mt-5'>
            <h2 class="d-flex text-danger mt-5 mb-5 pt-5">Please Register</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Name" required />
                    <Form.Text className="text-muted" >

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name="password" placeholder="Confirm Password" required />
                </Form.Group>

                <div class="align-items-start d-flex mb-5">

                    <Button type="submit" class="btn-lg btn btn-danger"> Register</Button>
                </div>
            </Form >


            <p className='align-items-start d-flex fw-bold'>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none fw-bold' >Please Login</Link></p>

            <ToastContainer />
        </div >
    );
};

export default SignUp;