import React from 'react';
import MenuItem from '../../components/MenuItem/menuItem';


function Home () {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <MenuItem
            name="Cheese Pizza"
            tags={['Halal', 'Vegan', 'Nut-Free', 'Halal', 'Kosher']}
            price={9.99}
            calories={350}
            rating={4.5}
            protein={25}
            carbs={10}
            fat={15}
            />
        </div>
    );
}


export default Home;