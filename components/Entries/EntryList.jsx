import { useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material'
import { EntryCard } from '.'
import { EntryContext } from '../../context/entries'
import { UIContext } from '../../context/ui';

import styles from './EntryList.module.css'


export const EntryList = ({ status }) => {

  const { entries } = useContext(EntryContext);
  const { isDragging } = useContext(UIContext);

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
      className={isDragging ? styles.dragging : ''}
    >
      <Paper sx={{
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
