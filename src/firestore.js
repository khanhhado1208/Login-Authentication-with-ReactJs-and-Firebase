import {  doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

/*export const readValue = async ()=> {
    try {
        const docRef = doc(database, "craneData", "Timer")
        const docSnap = await getDoc(docRef);
         

        if (docSnap.exists()){
           return docSnap.data().timerValue;
        } else {
            return 0;
        }
    } catch (error) {

    }

}*/




export const writeValue = async (count) => {
 
   

const timerRef = doc(db, 'Hoist', 'timer');


try {
    await setDoc(timerRef, { count: count + 1 });
    console.log("Timer value updated in Firestore");
  } catch (error) {
    console.error("Error updating timer value:", error);
  }

}