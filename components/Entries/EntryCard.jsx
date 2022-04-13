import { Card, CardActionArea, CardActions, CardContent, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import TimeAgo from 'timeago-react';
import { UIContext } from '../../context/ui';

export const EntryCard = ({ _id, description, status, createdAt }) => {

  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (e) => {
    e.dataTransfer.setData('_id', _id)
    startDragging()
  }

  const onDragEnd = () => {
    endDragging()
  }

  return (
    <Card sx={{ marginBottom: 1 }}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}  >
      <CardActionArea>

        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>
            <TimeAgo
              datetime={new Date(createdAt)}
              locale='en_short'
            />
          </Typography>
        </CardActions>

      </CardActionArea>
    </Card>
  )
}
