import AppBar from '../../components/appBar'
import {
  Typography,
  Box,
  Container,
  TextField,
  Grid,
  Button,
  Divider,
} from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import snackbar from '../../components/snackbar'

import { register } from '../../redux/auth/authSlice'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  firstName: yup.string('Enter your first name').required(),
  lastName: yup.string('Enter your last name').required(),
})

function Home() {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(register(values))
      ;<snackbar />
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
                Sign Up
              </Typography>
              <TextField
                id='outlined-basic'
                label='First Name'
                variant='outlined'
                size='medium'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                name='firstName'
                fullWidth
              />
              <TextField
                style={{ marginTop: '10px' }}
                id='outlined-basic'
                label='Last Name'
                variant='outlined'
                size='medium'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                name='lastName'
                fullWidth
              />
              <TextField
                style={{ marginTop: '10px' }}
                id='outlined-basic'
                label='Email'
                variant='outlined'
                size='medium'
                name='email'
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
                size='medium'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                name='password'
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
                Get started
              </Button>
            </form>
            <Divider />
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
            >
              <Typography>Already have an account?</Typography>
              <Link to='/login'>
                <Button
                  color='inherit'
                  sx={{
                    textTransform: 'capitalize',
                  }}
                >
                  <Typography
                    sx={{ color: 'black', textDecoration: 'none', mt: -0.5 }}
                  >
                    {' '}
                    Login
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
