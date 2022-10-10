import React from 'react';
import './Blog.css'
import { Accordion } from 'react-bootstrap';

const blog = () => {
    return (
        <div className='container mx-auto w-25 mt-5 pt-5 blog fs-5'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <b> <p className='fs-4'> Question: 1 <br /> <br />Difference between authorization and authentication</p></b>

                    </Accordion.Header>
                    <Accordion.Body className='Ans1'>
                        <p>Authentication is done before the authorization process, whereas the authorization process is done after the authentication process. </p>
                        <b>Authentication</b>
                        <p>1. Authentication verifies who the user is. <br />
                            2. Authentication is visible to and partially changeable by the user. <br />
                            3. Authentication is the first step of a good identity and access management process.</p>
                        <b>Authorization</b>
                        <p>1. Authorization determines what resources a user can access. <br />
                            2. Authorization isn’t visible to or changeable by the user. <br />
                            3. Authorization always takes place after authentication.</p>
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <b> <p className='fs-4'> Question: 2 <br /> <br />Why are you using firebase? What other options do you have to implement authentication?</p>
                        </b>

                    </Accordion.Header>
                    <Accordion.Body className='Ans1'>
                        <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. <br /> <br /> Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through <b>cards, retina scans, voice recognition, and fingerprints.</b> </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <b> <p className='fs-4'> Question: 3 <br /> <br />What other services does firebase provide other than authentication</p></b>

                    </Accordion.Header>
                    <Accordion.Body className='Ans1'>
                        <p>1. Cloud Firestore. Build serverless, secure apps at global scale. ... <br />
                            2. Realtime Database. Build serverless apps by storing and syncing JSON data between your users in near-realtime, on or offline, with strong user-based security. ... <br />
                            3. Remote Config. ... <br />
                            4. gmp_mods. ... <br />
                            5. gmp_app_check. ... <br />
                            6. Cloud Functions. ... <br />
                            7. gmp_auth. ... <br />
                            8. Cloud Messaging.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default blog;