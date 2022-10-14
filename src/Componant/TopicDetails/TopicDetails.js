import React from 'react';
import { useParams } from 'react-router-dom';

const TopicDetails = () => {
    const { topicName } = useParams();

    return (
        <div>
            <h1>Topic Name: {topicName}</h1>

        </div>
    );
};

export default TopicDetails;