import { db } from "./firebase-config.js";

import {
addDoc,
collection
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

bookingForm.addEventListener("submit", async (e) => {

e.preventDefault();

const booking = {

name: document.getElementById("name").value,

email: document.getElementById("email").value,

phone: document.getElementById("phone").value,

service: document.getElementById("service").value,

date: document.getElementById("date").value,

time: document.getElementById("time").value,

address: document.getElementById("address").value,

notes: document.getElementById("notes").value,

status: "Pending"

};

try{

await addDoc(collection(db,"bookings"),booking);

alert("🎉 Booking Successful!");

bookingForm.reset();

}

catch(error){

alert(error.message);

}

});

}