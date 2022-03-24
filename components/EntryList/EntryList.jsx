import { List, Paper } from '@mui/material'

export const EntryList = () => {
  return (
    // TODO: The <div> tag was used because it has an onDrop event
    <div>
      <Paper sx={{
        height: 'calc(100vh - 250px)',
        overflow: 'scroll',
        backgroundColor: 'transparent'
      }}>

        <List sx={{ opacity: 1 }}>
          <h1>Item</h1>
          <h1>Item</h1>
          <h1>Item</h1>
          <h1>Item</h1>
          <h1>Item</h1>
          <h1>Item</h1>
        </List>

      </Paper>
    </div>
  )
}
