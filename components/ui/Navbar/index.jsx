import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  return (
    <AppBar position='sticky' color="primary" enableColorOnDark>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>Open Jira</Typography>
      </Toolbar>
    </AppBar>
  )
}
