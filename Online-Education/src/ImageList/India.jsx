import React, { useState } from 'react';
import List from '../ImageList/List';
import Data from '../ImageList/data';
import '../ImageList/map.css'

const Index = () => {
    const [people, setPeople] = useState(Data);

    return (
        <div className='container'>   
            <h4 className='text-start pb-3'>{people.length} Students</h4>
            <List people={people} />
            <button onClick={()=>setPeople([])}>Clear All</button>
        </div>
    );
};

export default Index;