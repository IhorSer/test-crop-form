import React, { useEffect } from 'react';
import { useStore } from './stores/store';
import { Formik, FormikProps } from 'formik';
import { observer } from 'mobx-react';
import { editProfileValidator } from './helpers/validators';
import { EditProfile } from './models/editProfile';
import EditProfileForm from './components/EditProfileForm/EditProfileForm';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    formContainer: {
        display: 'grid',
        padding: '0.8rem 3rem',
        [theme.breakpoints.up(757)]: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',    
      } 
    },
    headerContainer: {
        padding: '1rem 0',
    },
    headerAvatar: {
        height: '3rem',
        width: '3rem',
        [theme.breakpoints.up(757)]: {
            display: 'none',
        }  
    },
    avatar: {
        height: '10rem',
        width: '10rem',
        marginTop: '3rem',
        [theme.breakpoints.down(757)]: {
            display: 'none',
      }
    }

}));

const initialValues: EditProfile = {
    username: '',
    email: '',
    phone: '',
    height: 0,
    weight: 0,
    isAllowed: false,
    aboutMe: ''
}

function App() {
  const { countriesStore, uiStore } = useStore();
  useEffect(() => {
    countriesStore.getCountries();
  }, []);
  const handleSubmit = (data: any) => {
     console.log(data);
  }
  const { avatarImage } = uiStore;

  const classes = styles();
  return (
    <main className={classes.formContainer}>
        <Grid container
              alignItems='center'
              direction='row'
              justify='center'>
            <Grid container 
                alignItems='center'
                justify='space-between'
                className={classes.headerContainer}>
                <Typography align='left' variant='h5'> Edit Profile </Typography>
                <Avatar src={avatarImage} className={classes.headerAvatar} />
            </Grid>
            <Formik initialValues={initialValues}
                    validationSchema={editProfileValidator}
                    onSubmit={handleSubmit}> 
                        {(props: FormikProps<EditProfile>) => <EditProfileForm {...props} />}
            </Formik>
        </Grid>
        <Grid container
              alignItems='flex-start'
              justify='center'>
            <Avatar src={avatarImage} className={classes.avatar} />
        </Grid>
    </main>
  );
}

export default observer(App);
