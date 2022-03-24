import { List, Paper } from '@mui/material'
import { EntryCard } from './'


export const EntryList = () => {
  return (
    // TODO: The <div> tag was used because it has an onDrop event
    <div>
      <Paper sx={{
        height: 'calc(100vh - 180px)',
        overflowY: 'scroll',
        backgroundColor: 'transparent',
        marginLeft: 1,
        marginRight: 1
      }}>

        <List sx={{ opacity: 1, padding: 1 }}>
          <EntryCard></EntryCard>
          <EntryCard></EntryCard>
          <EntryCard></EntryCard>
          <EntryCard></EntryCard>
          <EntryCard></EntryCard>
          <EntryCard></EntryCard>
          <EntryCard></EntryCard>
          <EntryCard></EntryCard>
        </List>

      </Paper>
    </div >
  )
}
