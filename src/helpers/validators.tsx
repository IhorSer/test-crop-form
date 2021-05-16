import * as Yup from 'yup';

export const editProfileValidator = Yup.object({
        username: Yup.string().min(3).max(20).required('Username required'),
        email: Yup.string().email('Invalid email address').required('Email required'),
        phone: Yup.string().required('Phone required').required('Phone required'),
        height: Yup.number().min(100).max(250).required('Height required'),
        weight: Yup.number().min(30).max(250).required('Weight required'),
        country: Yup.string().required('Country required'),
        region: Yup.string().required('City required'),
        aboutMe: Yup.string().min(10).required('Write aout yourself'),
        isAllowed: Yup.boolean()
})

