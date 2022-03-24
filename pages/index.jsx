import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { EntryList } from '../components/EntryList/EntryList'
import { Layout } from './../components/Layout/index'

export default function Home() {
  return (
    <Layout>

      <Grid container spacing={2} >
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }} >
            <CardHeader title="Backlog" />
            <EntryList />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="In Progress" />
            <EntryList />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Finished" />
            <EntryList />
          </Card>

        </Grid>
      </Grid>

    </Layout>
  )
}
