import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

interface Props {
  window?: () => Window;
  navItems: string[];
  activeItem: string;
  onNavChange: (item: string) => void;
}

const drawerWidth = 240;

export default function Nav(props: Props) {
  const { window, navItems, activeItem, onNavChange } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavItemClick = (item: string) => {
    onNavChange(item);
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: 'black',
        height: '100%',
        color: 'white',
      }}
      marginTop={10}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => handleNavItemClick(item)}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    color: activeItem === item ? '#AF6118' : '#fff',
                    fontWeight: activeItem === item ? 'bold' : 'normal',
                    textAlign: 'center',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          left: 0,
          width: '100%',
          zIndex: 10,
          padding: 1
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Burger Icon on the Left (mobile only) */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo on the Right for Mobile, Center for Desktop */}
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: { xs: 'flex-end', sm: 'flex-start' } }}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="logo"
              sx={{ height: 50, cursor: 'pointer' }}
              onClick={() => onNavChange('Home')}
            />
          </Box>

          {/* Desktop Nav Buttons */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleNavItemClick(item)}
                sx={{
                  color: activeItem === item ? '#AF6118' : '#fff',
                  fontWeight: activeItem === item ? 'bold' : 'normal',
                  '&:hover': {
                    color: '#AF6118',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={window !== undefined ? () => window().document.body : undefined}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
