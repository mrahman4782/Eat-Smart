import React from 'react';
import { Box, Typography, Chip, Avatar, Grid } from '@mui/material';

const tagColors = {
    'Vegetarian': '#76DC76',
    'Vegan': '#6BA283',
    'Dairy-Free': '#8BB3EC',
    'Halal' : '#7CD2F0',
    'Kosher': '#FBDCCD',
    'Nut-Free' : '#E4B408',
    'Pescetarian': '#FF8382',
    'Gluten-Free': '#FFA1B3'
}

const MenuItem = ({ name, tags, price, calories, rating, protein, carbs, fat, clickable = false }) => {
    return (
      <Box sx={{ display: 'flex', backgroundColor: '#F9F6F0', flexDirection: 'column', borderRadius: '15px', width: '350px'}}>
        <img src={`/menu/${name}.jpg`} alt={name} style={{ height: 240, borderTopRightRadius: '15px', borderTopLeftRadius: '15px',}} />
        <Box sx={{ flex: 1, padding: 2 }}>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography variant="h4" sx={{fontFamily: 'Gothic'}}>
                    {name}
                </Typography>
                <Typography variant="body1" sx={{fontFamily: 'Gothic'}}>
                    ${price}
                </Typography>
            </Box>
    
          <Typography variant="body1" sx={{marginTop: 1}}>
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} sx={{ marginRight: .5, backgroundColor: `${tagColors[tag]}`, marginBottom: .5}} />
            ))}
          </Typography>
            <Grid container spacing={1} sx={{marginTop: 1}}>
            <Grid item xs={4}>
                <Typography variant="body1" >
                Protein: {protein}g
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="body1" >
                Carbs: {carbs}g
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="body1" >
                Fat: {fat}g
                </Typography>
            </Grid>
            </Grid>
            <Grid container spacing={1} sx={{marginTop: 0.3}}>
            <Grid item xs={4} >
                <Typography variant="body1" >
                Calories: {calories}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="body1" >
                Rating: {rating}
                </Typography>
            </Grid>
            </Grid>
            
        </Box>
      </Box>
    );
  };
  
  export default MenuItem;
  