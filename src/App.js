import React from 'react';
import {Typography, Button, AppBar, Card, CardActions, CardContent,CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              this is a photo album this will be a long sentence 
            </Typography>
            <div>
              <Grid container spacing={3} justify="center">
                <Grid item>
                  <Button variant='contained' color='primary'> 
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'> 
                    Secondary button
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
