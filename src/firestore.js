import {  doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const readValue = async ()=> {
    try {
        const timerRef = doc(db, "Hoist", "Timer")
        const docSnap = await getDoc(timerRef);
         

        if (docSnap.exists()) {
          const timerValue = docSnap.data();
          const { days, hours, minutes, seconds} = timerValue;
          return {
            days:days,
            hours:hours,
            minutes: minutes,
            seconds: seconds,
           };
        } else {
            return {
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            } 
        }
    } catch (error) {

    }

}

export const writeValue = async (count) => {
 
const timerRef = doc(db, 'Hoist', 'Timer');
const days = Math.floor(count /(3600 * 24));
const hours = Math.floor(count / 3600);
const minutes = Math.floor((count % 3600) / 60);
const seconds = count % 60;

try {
    await setDoc(timerRef, { 
      count: count,
      days:days,
      hours:hours,
      minutes:minutes,
      seconds:seconds
    
    });
    console.log("Timer value updated in Firestore");
  } catch (error) {
    console.error("Error updating timer value:", error);
  }

}

