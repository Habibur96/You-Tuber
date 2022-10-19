import React from 'react';

import { useParams } from 'react-router-dom';

const TopicDetails = () => {

    const { topicName } = useParams();
    return (
        <div style={{ paddingBottom: '150px', paddingTop: '200px' }}>

            <div class="shadow-lg p-3 mb-5 bg-body rounded container mx-auto w-25" style={{ color: 'red' }}> <h1>Topic Name: {topicName} <br />Plz wait. Vidio is comming soon.</h1></div>
        </div>
    );
};

export default TopicDetails;