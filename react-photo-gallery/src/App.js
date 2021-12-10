import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './style';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const App = ()=> {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera className={classes.icon}/>
        <Typography variant="h6">
          Photo Album
        </Typography>
      </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h6' align='center' color='textSecondary' paragraph style={{fontWeight: '400', fontSize: '1.5rem'}}>
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                 <Button variant="contained" size="medium" color="primary">SEE MY PHOTOS</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="medium" color="primary">SECONDARY MOVIES</Button>
              </Grid>
              </Grid>
            </div>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                      <CardMedia 
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random" 
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                          Heading
                        </Typography>
                        <Typography>
                          This is a Media Card, you are watching.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small' color="primary">View</Button>
                        <Button size='small' color="primary">Edit</Button>
                      </CardActions>
                  </Card>
                </Grid>
              ))}                

            </Grid>
          </Container>
          
        </div>
      </main>
      <footer className={classes.footer}>
                  <Typography variant='6' gutterBottom >
                    This is Footer. <br />
                    @CopyRight 2021.
                  </Typography>
          </footer>
    </div>
  );
}

export default App;
