import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import CheckIcon from '@material-ui/icons/Check';
import { Point, Area } from 'react-easy-crop/types';
import { getCroppedImg } from '../../helpers/imageCropperUtils';
import { styles } from './styles';
import { IconButton } from '@material-ui/core';

const ImageCropper = (props: any) => {
    const {image, getImage}  = props;
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState({
        x: 0,
        y: 0,
        height: 0,
        width: 0
    });
    const classes = styles();
    const onCropComplete = useCallback(
        (croppedArea: Area, croppedAreaPixels: Area) => {
            setCroppedAreaPixels(croppedAreaPixels);
        }, []
    );

    const handleCropFinish = async () => {
        const croppedImage = await getCroppedImg(image, croppedAreaPixels);
        getImage(croppedImage);
    };

    return (
        <div className="App">
            <div className={classes.container}>
                <Cropper
                    style={{containerStyle:{background:'black', zIndex:100}}}
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
                <IconButton onClick={handleCropFinish} className={classes.iconButton} style={{zIndex:200}}>
                    <CheckIcon/>
                </IconButton>
            </div>
        </div>
    );
};

export default ImageCropper;