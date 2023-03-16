import React from 'react'
import {
  Typography,
  Box,
  Container,
  TextField,
  Grid,
  Button,
  Divider,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { login } from '../../redux/auth/authSlice'

import AppBar from '../../components/appBar'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

function Home() {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(login(values))
    },
  })

  return (
    <Container>
      <AppBar />
      <Box sx={{ flexGrow: 1, mt: 15 }}>
        <Grid container>
          <Grid md='4'></Grid>
          <Grid md='4' sx={{ mt: 5 }}>
            <form onSubmit={formik.handleSubmit}>
              <Typography
                variant='h4'
                style={{ textAlign: 'center', marginBottom: 30 }}
              >
                {' '}
                Log In
              </Typography>
              <TextField
                id='outlined-basic'
                label='Email'
                variant='outlined'
                name='email'
                size='medium'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
              />
              <TextField
                style={{ marginTop: '10px' }}
                id='outlined-basic'
                label='Password'
                variant='outlined'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                size='medium'
                fullWidth
              />
              <Button
                type='submit'
                sx={{
                  mt: 5,
                  backgroundColor: '#49BAF2',
                  width: '100%',
                  borderRadius: 20,
                  color: 'black',
                  mb: 3,
                }}
              >
                {' '}
                Log in
              </Button>
            </form>
            <Divider />
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
            >
              <Typography>Don't have an account?</Typography>
              <Link to='/signup'>
                <Button
                  // color="inherit"
                  sx={{
                    textTransform: 'capitalize',
                  }}
                >
                  <Typography
                    sx={{ color: 'black', textDecoration: 'none', mt: -0.5 }}
                  >
                    {' '}
                    Signup
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid md='4'></Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
