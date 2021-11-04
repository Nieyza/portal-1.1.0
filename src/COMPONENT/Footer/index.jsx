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

export default function Footer() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container className="container-3">
        <Grid item xs={12}>
          <Box className = "footer">
            {/* Container 3 */}
            <section className="footer-1">
              Let's have a chat
            </section>
            <section className="footer-2">
                <div className="content-1">
                    <div className="box-1">
                        <p className="p1-1">Build</p>
                        <p className="p1-2">Help you build something</p>
                    </div>
                </div>

                <div className="content-2">
                    <div>
                        <p className="p1-1">Co-incubate</p>
                        <p className="p1-2">Co-incubate an idea together</p>
                    </div>
                </div>

                <div className="content-3">
                    <div>
                        <p className="p1-1">Customise</p>
                        <p className="p1-2"> Customise a solution for your business</p>
                    </div>
                </div>

                <div className="content-4">
                    <div>
                        <p className="p1-1">In A Rush?</p>
                        <p className="p1-2">Call us at 03-89251625</p>
                    </div>
                </div>
            </section>
            <section className="footer-3">
              <div className="footer-bottom">
                <img src="XPM-logo.png" alt="XPM" className="footerIMG"/> 
                <p> &copy; Xplode Media Sdn Bhd | 638512-T</p>
              </div>
            </section>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}