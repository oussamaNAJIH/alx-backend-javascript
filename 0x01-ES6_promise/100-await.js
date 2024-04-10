import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const myObj = {};
    const myPhoto = await uploadPhoto();
    myObj.photo = myPhoto;
    const myUser = await createUser();
    myObj.user = myUser;
    return myObj;
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
