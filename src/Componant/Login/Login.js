
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";//Redirect page or location

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth, { sendPasswordResetEmail: true }
    );



    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }

    if (user) {

        navigate(from, { replace: true });
    }

    let errorElement;

    //To show error if it's found
    if (error) {

        errorElement = <div>

            <h3 className='text-danger'>Error: {error?.message}</h3>

        </div>
    }



    //Forget Password || Reset Password
    const resetPassword = () => {
        const email = emailRef.current.value;

        if (email) {
            sendPasswordResetEmail(email);
            toast('sent mail');
        }
        else {
            toast('Enter your email address');
        }
    }

    const navigateLogin = event => {
        navigate("/register");
    }

    return (
        <div className='container d-block w-25 mt-5 pt-5'>

            <h2 class="d-flex text-danger">Please Login</h2>


            <Form onSubmit={handleLogin}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 mb-4" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <div class="align-items-start d-flex">

                    <>
                        <div className="mb-3">
                            <Button type="submit" variant="danger" size="lg">
                                Login
                            </Button>{' '}

                        </div>

                    </>
                </div>

            </Form>  <br /> <br />

            <p className='d-flex fw-bold'>New to my website? <Link to='/signUp' className='text-danger fw-bold pe-auto text-decoration-none' onClick={navigateLogin}>&nbsp;&nbsp; Please Register</Link></p>

            <p className='d-flex fw-bold'>Forget Password?<button className='btn btn-link text-danger fw-bold pe-auto text-decoration-none' onClick={resetPassword}>&nbsp;Reset Password</button></p>

            {errorElement}


            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>



    );
};

export default Login;