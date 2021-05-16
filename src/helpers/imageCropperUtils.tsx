import { Area } from 'react-easy-crop/types';

export async function getCroppedImg(imageSrc: string, crop: Area) {
    const image = new Image();
    image.src = imageSrc;
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
  
    canvas.width = 250
    canvas.height = 250

    ctx?.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        canvas.width,
        canvas.height
    )
    return new Promise((resolve) => {
      canvas.toBlob((file) => {
        resolve(URL.createObjectURL(file))
      }, 'image/png')
    })
  }