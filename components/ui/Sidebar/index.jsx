import { InboxOutlined, MailOutlined } from '@mui/icons-material'
import {
  Box, Drawer, List, ListItem, ListItemIcon, ListItemText,
  Typography
} from '@mui/material'


export const Sidebar = () => {

  const menuItems = ['Inbox', 'Starred', 'Draft']

  return (
    <Drawer
      anchor='left'
      open={true}
      onClose={() => console.log('close')}>

      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'> Menu </Typography>
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
