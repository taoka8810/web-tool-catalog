import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { ChangeEvent } from "react";

export const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file.prototype);
    return `gs://${process.env.NEXT_PUBLIUC_STORAGE_BUCKET}/${file.name}`;
  }
};

export const getImage = async (firebaseStorageURI: string) => {
  const storageRef = ref(storage, firebaseStorageURI);
  return await getDownloadURL(storageRef);
};
