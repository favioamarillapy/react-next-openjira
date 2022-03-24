import { Card, CardActionArea, CardActions, CardContent, Paper, Typography } from '@mui/material'
import React from 'react'

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1 }}   >
      <CardActionArea>

        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>Description</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>30 min ago</Typography>
        </CardActions>

      </CardActionArea>
    </Card>
  )
}
