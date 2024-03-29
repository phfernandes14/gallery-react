import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSEAGINGSENDID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};


//Conecta com firebase
const firebaseApp = initializeApp(firebaseConfig)

//conecta com serviço de storage
export const storage  = getStorage(firebaseApp);