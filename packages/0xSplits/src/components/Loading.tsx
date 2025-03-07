import React from 'react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => {
  return (
    <Backdrop sx={{ color: 'white' }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loading
