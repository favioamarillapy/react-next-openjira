import { Box } from '@mui/material'
import { Navbar } from '../ui/Navbar'

export const Layout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Navbar />

      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>

    </Box>
  )
}
