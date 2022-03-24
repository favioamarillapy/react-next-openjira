import { Card, CardActionArea, CardActions, CardContent, Paper, Typography } from '@mui/material'
import React from 'react'

export const EntryCard = ({ _id, description, status, createdAt }) => {
  return (
    <Card sx={{ marginBottom: 1 }}   >
      <CardActionArea>

        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>{createdAt}</Typography>
        </CardActions>

      </CardActionArea>
    </Card>
  )
}
