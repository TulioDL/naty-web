import React from 'react';

import './Description.css';
const Description = () => {
    return (
        <div className='description'>
            <p>
                I developed interest on a cross disciplinary culture of computational design and the art of manufacturing, How humans, machines and codes co-exist. Merging techniques such as casting,
                carpentry, algorithm design and 3d printed objects. Now, also into Web Design.
            </p>
            <img src={require('/image/Portrait_mog.png')} alt='img' />
        </div>
    );
};

export default Description;
