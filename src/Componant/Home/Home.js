import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner-1.jpg'
import banner2 from '../../images/banner-2.jpg'
import banner3 from '../../images/banner-3.jpg'


const Home = () => {
    return (
        <div>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mb-5" style={{ height: 1400 }}
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mb-5" style={{ height: 1400 }}
                        src={banner3}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mb-5" style={{ height: 1400 }}
                        src={banner2}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <h1 className='mt-5'> Topics</h1>
        </div>
    );
};

export default Home;