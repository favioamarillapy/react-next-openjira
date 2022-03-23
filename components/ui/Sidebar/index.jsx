import { useContext } from 'react'
import { ChevronLeft, ChevronRight, InboxOutlined, MailOutlined } from '@mui/icons-material'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import { UIContext } from '../../../context/ui'

const menuItems = ['Inbox', 'Starred', 'Draft']

export const Sidebar = () => {

  const theme = useTheme();
  const { sideMenuOpen, closeSidebar } = useContext(UIContext);


  return (
    <Drawer
      anchor='left'
      open={sideMenuOpen}
      onClose={closeSidebar}>


      <Box sx={{ width: 250 }}>

        <Box sx={{ padding: '10px 10px', display: 'flex', justifyContent: 'space-between', ...theme.mixins.toolbar }}>
          <Typography variant='h4'> Menu </Typography>
          <IconButton onClick={closeSidebar}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>


        <List>
          {
            menuItems.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxOutlined /> : <MailOutlined />}
                </ListItemIcon>
                <ListItemText>
                  {text}
                </ListItemText>
              </ListItem>
            ))
          }
        </List>
      </Box>

    </Drawer>
  )
}
