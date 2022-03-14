import React from 'react';
import AvaUser from '../../Logotip/AvaUser.jpg'

const Posts = (p) => {
    return (
        <div className='AvaUser'>
            <img src={AvaUser} alt=""/>
            {p.post.profileItems.post.map( (p) => <div key={p.id}>{p.post}</div> )}
        </div>
    );
};

export default Posts;