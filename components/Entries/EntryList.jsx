import { useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material'
import { EntryCard } from '.'
import { EntryContext } from '../../context/entries'


export const EntryList = ({ status }) => {

  const { entries } = useContext(EntryContext);
  const entriesByStatus =
    useMemo(() => entries.filter(entry => entry.status === status), [entries])


  const onDrop = (e) => {
    const _id = e.dataTransfer.getData('_id')
  }

  const allowDrop = (e) => {
    e.preventDefault()
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={allowDrop}
    >
      <Paper sx={{
        height: 'calc(100vh - 180px)',
        overflowY: 'scroll',
        backgroundColor: 'transparent',
        marginLeft: 1,
        marginRight: 1
      }}>

        <List sx={{ opacity: 1, padding: 1 }}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} {...entry} />
            ))
          }
        </List>

      </Paper>
    </div >
  )
}
