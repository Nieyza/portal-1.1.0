import React from 'react';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Section() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container  className="container-1">
        <Grid item xs={12}>
          <Box className = "slide-1">
            {/* Container 1 */}
            <img src="./bg1.jpg" alt="bg3" className="bg"/>
          </Box>
        </Grid>
      </Grid>
      <Grid container className="container-2">
        <Grid item xs={12}>
          <Typography>
            <Box className = "slide-2">
              <div>
                <section className="menu-sec-1">
                  <p className="body-text-1">
                    Who loves you, baby!
                  </p>
                  <p className="body-text-2">
                    The above may seem like very different stories, but to us they are all one. 
                    Each is about making a genuine improvement in people’s lives through digital technology. 
                    We succeed in diverse projects because our team have a unique combination of expertise 
                    across marketing, design and technology. By unifying these disciplines, 
                    we find new opportunities and unique solutions.
                  </p>
                  <p className="body-text-3">
                    We solve problems that matter. We produce results that are unmistakeable.
                  </p>
                </section>
                <section className="menu-section-2">
                  <Grid item xs={8}>
                    <Box className = "section-2-slide-3">
                      {/* Container 3 */}
                      <Grid container spacing={1}>
                        <div className="row-1">
                          {/* <img src="./DJ-logo.png" alt="DJ" className="img1"/> */}
                          <img src="./Xperion-logo-gray.png" alt="Xperion" className="img2"/>
                          <img src="./XoomTech-logo-gray.png" alt="Xoom" className="img3"/>
                          {/* <img src="./XpertXchange-logo.png" alt="Xpert" className="img4"/> */}
                          <img src="./DeFalahResources-logo-gray.png" alt="DeFalah" className="img5"/>
                          <img src="./HeveaEmpire-logo-gray.png" alt="Hevea" className="img6"/>
                          {/* <img src="./InderaTijarah-logo.png" alt="InderaTijarah" className="img7"/> */}
                          <img src="./Talenty-logo-gray.png" alt="Talenty" className="img8"/>
                        </div>
                      </Grid>
                    </Box>
                    </Grid>
                </section>
              </div>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}