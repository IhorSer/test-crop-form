import React, { useState, ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import EditProfileTextField from '../EditProfileTextField/EditProfileTextField';
import ImageCropper from '../ImageCropper/ImageCropper';
import { styles } from './styles';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/store';

const EditProfileForm = (props: any) => {
    const {
        values: { username, email, phone, height, weight, aboutMe, isAllowed },
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
    } = props;
    const { countriesStore, uiStore } = useStore();
    const { countries, selectedCountry, selectedCountryRegions, 
        selectedCountryRegion, selectRegion, selectCountry } = countriesStore;
    const { setAvatarImage } = uiStore;
    const [image, setImage] = useState('');
    const classes = styles();

    const change = (event: ChangeEvent<HTMLInputElement>, name: any) => {
        handleChange(event);
        setFieldTouched(name, true, false);
    };

    const handleCountryChange = (event: any) => {
        selectCountry(event.target.value);
    }

    const handleRegionChange = (event: any) => {
        selectRegion(event.target.value);
    }

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            setImage(reader?.result as string);
        }, false)

        if (file) {
            reader.readAsDataURL(file)
        }
        event.target.value = null;
    }

    const getCroppedImage = (image: any) => {
        setAvatarImage(image);
        setImage('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <EditProfileTextField 
                name='username'
                label='Username'
                type='text'
                value={username}
				autoFocus
                onChange={change}
                {...props}/>
            <EditProfileTextField 
                name='email'
                label='Email'
                type='email'
                value={email}
                onChange={change}
                {...props}/>
            <EditProfileTextField 
                name='phone'
                label='Phone'
                type='text'
                value={phone}
                onChange={change}
                {...props}/>
            <EditProfileTextField 
                name='height'
                label='Height'
                type='number'
                value={height}
                onChange={change}
                {...props}/>
            <EditProfileTextField 
                name='weight'
                label='Weight'
                type='number'
                value={weight}
                onChange={change}
                {...props}/>
            <EditProfileTextField 
                name='countries'
                label='Select Country'
                select={true}
                selectItems={countries.map(item=>item?.countryName)}
                value={selectedCountry}
                onChange={handleCountryChange}
                {...props}/>
            <EditProfileTextField 
                name='regions'
                label='Select Region'
                select={true}
                selectItems={selectedCountryRegions}
                value={selectedCountryRegion}
                onChange={handleRegionChange}
                {...props}/>
             <EditProfileTextField 
                name='aboutMe'
                label='About Me'
                type='text'
                rows='8'
                multiline={true}
                value={aboutMe}
                onChange={change}
                {...props}/>
            <Grid container  className={classes.checkBoxContainer}
                alignItems='center'
                direction='row'>
                <Checkbox className={classes.checkBox}
                    value={isAllowed}
                    onChange={handleChange}/>
                    <span>Allow Session Girls to Contact Me</span>
            </Grid>
            <Button
                variant='contained'
                component='label'>
                Upload File
                <input
                    type='file'
                    accept='image/*'
                    onChange={handleFileChange}
                    hidden
                />
            </Button>
            {
                image && (
                    <ImageCropper
                        image={image}
                        getImage={getCroppedImage}
                    />
                )
            }
            <Grid container className={classes.submitButton}>
                <Button
		            type='submit'
		            variant='contained'
		            color='default'
                    disabled={!isValid}>
                        Submit
                </Button>
            </Grid>       
        </form>
    )
}

export default observer(EditProfileForm);