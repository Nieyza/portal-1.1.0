import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
         <Typography>
          <Toolbar className = "nav-bar">
            <div className="xplode-logo">
              <div>
                <img src = "./XPM-logo.png" className="logo" alt="logo"/>
              </div>
            </div>
            <div className="space" 
              style= {{ width: '350%' }}
              >
              <div>
                <Button className = "btn-home" 
                  style= {{ paddingLeft: '5px' }}>Home</Button>
              </div>
              <div>
                <Button className = "btn-about">About</Button>
              </div>
              <div>
                <Button className = "btn-services">Our Services</Button>
              </div>
              <div>
                <Button variant="contained" 
                  className = "btn-career" 
                  style={{ backgroundColor: '#E71302', color: '#FFFFFF', borderRadius: '28px' }}
                >Career</Button>
              </div>
            </div>
          </Toolbar>
        </Typography>
      </AppBar>
    </Box>
  );
}