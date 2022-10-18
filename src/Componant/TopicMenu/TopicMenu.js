import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import startIcon from '../../images/icon.png'

const TopicMenu = ({ topic }) => {
    const { img, name, description, vidio } = topic;
    const navigate = useNavigate();

    const navigateToTopicDetail = name => {
        navigate(`/topicDetails/${name}`)
    }
    return (

        <div class="service col-lg-4 col-sm-12 gy-5 gx-5 mb-5 pb-5">

            <div className='container ms-auto w-25 fs-4 ' style={{ paddingRight: '200px' }}>

                <Card style={{ width: '20rem', marginLeft: '-40px' }} >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>


                    <Card.Body>

                        <Button onClick={() => navigateToTopicDetail(name)} variant="success" className='fs-5 fw-bold text-black '><img src={startIcon} alt="" /> Start Now</Button>

                    </Card.Body>
                </Card>

            </div>


        </div>




    );
};

export default TopicMenu;