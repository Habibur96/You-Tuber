import React from 'react';
import './TopicMenu.css'
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
        // <h1 className='mt-5 fw-bold text-danger mb-5 pb-5'>Topics</h1>

        <div className='container mx-auto service w-25 fs-4 '>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold fs-3'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>


                <Card.Body>

                    <Button onClick={() => navigateToTopicDetail(name)} variant="success" className='fs-5 fw-bold text-black'><img src={startIcon} alt="" /> Start Now</Button>

                </Card.Body>
            </Card>
        </div>

    );
};

export default TopicMenu;