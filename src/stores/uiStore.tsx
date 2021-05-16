import { observable, action, makeObservable } from 'mobx';

export default class UIStore {
    
    avatarImage: string = '';

    constructor() {
        makeObservable(this, {
            avatarImage: observable,
            setAvatarImage: action,
      });
    }

    setAvatarImage = (image: string) => {
        this.avatarImage = image;
    }
}