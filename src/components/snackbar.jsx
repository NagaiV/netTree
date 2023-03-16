import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'

export default function SimpleSnackbar({ open, message }) {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={() => setIsOpen(false)}
      message={message}
    />
  )
}
