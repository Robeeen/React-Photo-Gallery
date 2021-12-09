import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
const App = ()=> {
  return (
    <div>
      <CssBaseline />
      <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera />
        <Typography variant="h6">
          Photo Album
        </Typography>
      </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{marginTop: '100px'}}>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h6' align='center' color='textSecondary' paragraph>
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent='center' style={{marginTop: '10px'}}>
                <Grid item>
                 <Button variant="contained" size="medium" color="primary">SEE MY PHOTOS</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="medium" color="primary">SECONDARY MOVIES</Button>
              </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
