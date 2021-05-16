interface IEditProfile {
    username: string,
    email: string,
    phone: string,
    height: number,
    weight: number,
    aboutMe: string,
    isAllowed: boolean
}

export type EditProfile = IEditProfile;