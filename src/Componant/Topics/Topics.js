import React, { useEffect, useState } from 'react';
import TopicMenu from '../TopicMenu/TopicMenu';

const Topics = () => {
    const [topics, settopics] = useState([]);

    useEffect(() => {
        fetch('topics.json')
            .then(res => res.json())
            .then(data => settopics(data))
    }, [])

    return (
        <div className='row'>
            {
                topics.map(topic => <TopicMenu
                    key={topic.id}
                    topic={topic}
                ></TopicMenu>)
            }
        </div>

    );

};

export default Topics;

