import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from 'sweetalert2'
import Users2 from "../Components/Users2";

const firebaseConfig = {
  apiKey: "AIzaSyAMf0_Ynl3G_li8ZX8jtcNxvQ57_--voy8",
  authDomain: "database-olx-ash.firebaseapp.com",
  projectId: "database-olx-ash",
  storageBucket: "database-olx-ash.appspot.com",
  messagingSenderId: "933798809050",
  appId: "1:933798809050:web:971cd36b2bb3d118ab04e3"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

async function register(email, password, fullname, age) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const docRef = await addDoc(collection(db, "users", ""), {
      fullname: fullname,
      email: email,
      age: age
    });
    Swal.fire('Successfully Registered!')
  } catch(e) {
    Swal.fire(e.message)
  }
}

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

async function postAd({ title, description, price, file }) {
  try {
    const url = await uploadImage(file)
    const data = { title, description, price: +price, imageUrl: url }

    await addDoc(collection(db, "ads"), data)
    Swal.fire('Ad posted successfully!')
  } catch(e) {
    Swal.fire(e.message)
  }
  
}

async function uploadImage(file) {
  const storageRef = ref(storage, 'ads/' + file.name);
  await uploadBytes(storageRef, file)

  const url = await getDownloadURL(storageRef)
  return url
}

// async function userData( "ads" , id) {
//   const docRef = doc(db, "ads" , id);
//   const docSnap = await getDoc(docRef);
//   return docSnap.data()
// }

async function getAds() {
  const querySnapshot = await getDocs(collection(db, "ads"));
  const ads = []
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    ads.push(data)
  });
  return ads
};


export { register, login, getAds, postAd }
