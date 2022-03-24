import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { Layout } from './../components/Layout/index'

export default function Home() {
  return (
    <Layout>

      <Grid container spacing={2} >
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }} >
            <CardHeader title="Backlog" />
            <CardContent>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="In Progress" />
            <CardContent>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Finished" />
            <CardContent>

            </CardContent>
          </Card>

        </Grid>
      </Grid>

    </Layout>
  )
}
