import { Card, CardHeader, Grid } from '@mui/material'
import { EntryForm, EntryList } from '../components/Entries'
import { Layout } from './../components/Layout/index'

export default function Home() {
  return (
    <Layout>

      <Grid container spacing={2} >
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }} >
            <CardHeader title="Backlog" />
            <EntryForm />
            <EntryList status='backlog' />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="In Progress" />
            <EntryList status='progress' />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Finished" />
            <EntryList status='finished' />
          </Card>

        </Grid>
      </Grid>

    </Layout>
  )
}
