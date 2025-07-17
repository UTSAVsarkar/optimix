import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/logo.svg`}
        alt="Logo"
        sx={{ height: 50, my: 2, mx: 'auto' }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => handleNavItemClick(item)}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    color: activeItem === item ? '#AF6118' : 'inherit',
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
          backgroundColor: 'transparent',
          boxShadow: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="logo"
              sx={{ height: 50 }}
            />
          </Box>
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
