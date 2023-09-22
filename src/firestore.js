import {  doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const readValue = async ()=> {
    try {
        const timerRef = doc(db, "Hoist", "timer")
        const docSnap = await getDoc(timerRef);
         

        if (docSnap.exists()){
           return docSnap.data().count;
        } else {
            return 0;
        }
    } catch (error) {

    }

}




export const writeValue = async (count) => {
 
const timerRef = doc(db, 'Hoist', 'timer');

try {
    await setDoc(timerRef, { count: count });
    console.log("Timer value updated in Firestore");
  } catch (error) {
    console.error("Error updating timer value:", error);
  }

}