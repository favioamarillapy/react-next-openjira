import { useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material'
import { EntryCard } from '.'
import { EntryContext } from '../../context/entries'
import { UIContext } from '../../context/ui';

import styles from './EntryList.module.css'


export const EntryList = ({ status }) => {

  const { entries, updatedEntry } = useContext(EntryContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus =
    useMemo(() => entries.filter(entry => entry.status === status), [entries])


  const onDrop = (e) => {
    const _id = e.dataTransfer.getData('_id')
    const entry = entries.find(e => e._id === _id)
    entry.status = status

    updatedEntry(entry)
    endDragging()
  }

  const allowDrop = (e) => {
    e.preventDefault()
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper sx={{
        '&::-webkit-scrollbar': { display: 'none' },
        height: 'calc(100vh - 180px)',
        overflowY: 'scroll',
        backgroundColor: 'transparent',
        marginLeft: 1,
        marginRight: 1
      }}>

        <List sx={{ opacity: isDragging ? 0.3 : 1, padding: 1, transition: 'all .3s' }}>
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
