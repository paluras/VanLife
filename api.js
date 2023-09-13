// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxwwg-B1hOpOZ2XJq9f4STEbJWHzUNQ3E",
  authDomain: "vanlife-8aa15.firebaseapp.com",
  projectId: "vanlife-8aa15",
  storageBucket: "vanlife-8aa15.appspot.com",
  messagingSenderId: "496083666654",
  appId: "1:496083666654:web:9d0ffeca0e85583d72e44f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const vansCollectionRef = collection(db , "vans")



export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
  const vansArr =  snapshot.docs.map(doc =>({
        ...doc.data(),
        id:doc.id
    }))
    return vansArr

}



export async function getVan(id) {
   const docRef = doc(db, "vans", id)
   const snapshot = await getDoc(docRef)
   return {
    ...snapshot.data(),
    id:snapshot.id
   }
 
}

// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }


export async function getHostVans() {
    const q = query(vansCollectionRef , where("hostId","==", "123"))
    const snapshot = await getDocs(q)
  const vansArr =  snapshot.docs.map(doc =>({
        ...doc.data(),
        id:doc.id
    }))
    return vansArr

}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
