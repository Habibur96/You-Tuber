import React from 'react';

const Footer = () => {
    return (
        <div>
            <div class="pt-4  " >


                <div class="row ">
                    <div class="col-lg-3  d-flex  justify-content-center pt-5  mt-5">
                        <h5 >©2022 bike. All rights reserved</h5>
                    </div>
                    <div class="col-lg-3 col-sm-3 ms-auto ">
                        <div class=" pt-5 pb-5 ">
                            <h5 class="text-white">Get the App</h5>
                            <div>
                                {/* <a target="_blank" href="https://www.apple.com/">
                                    <button class="text-white"
                                        style="border-radius: 10px; background-color: black; border-color: white;">
                                        <div class=" d-flex align-items-center" sty>
                                            <div class="pe-2">
                                                <i class="fab fa-apple"></i>
                                            </div>

                                            <div>
                                                <h5 class="pt-1"> Download on the</h5>
                                                <b class="d-flex justify-content-center fs-5">APP Store </b>
                                            </div>
                                        </div>
                                    </button>
                                </a> <br /> */}
                                <div>

                                    {/* <a target="_blank" href="https://play.google.com/store/apps">
                                        <button class="text-white"
                                            style="border-radius: 10px; background-color: black; border-color: white;">
                                            <div class=" d-flex align-items-center" sty>
                                                <div class="pe-2">
                                                    <i class="fab fa-google-play"></i>

                                                </div>

                                                <div>
                                                    <h5 class="pt-1"> Download on the</h5>
                                                    <b class="d-flex justify-content-center fs-5">APP Store </b>
                                                </div>
                                            </div>
                                        </button>
                                    </a> */}

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;