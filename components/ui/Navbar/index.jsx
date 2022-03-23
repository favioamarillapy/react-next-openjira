import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { UIContext } from '../../../context/ui';

export const Navbar = () => {

  const { openSidebar } = useContext(UIContext);

  return (
    <AppBar position='sticky' color="primary" enableColorOnDark>
      <Toolbar>
        <IconButton
          onClick={openSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>Open Jira</Typography>
      </Toolbar>
    </AppBar>
  )
}
