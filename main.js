import { initializeApp } from './node_modules/firebase/app';
import { database, ref, set, push } from './node_modules/firebase/database';

const firebaseConfig = {
  // here is my project information
};

const app = initializeApp(firebaseConfig);

const db = firebase.database(app);
const testimonialListInDb = ref(db, 'testimonialList');

function addItem(e) {
  const li = document.createElement('li');

  li.innerHTML = `
    <h3>To ${inputToEl.value}</h3>
    <p>${inputEl.value}</p>
    <div class='details-container'>
        <div>From ${inputFromEl.value}</div>
        <div >
            <i id="like-btn"></i>
            <span id='likes'>0</span>
        </div>
    </div>
  `;

  itemList.appendChild(li);

  const newTestimonial = {
    text: inputEl.value,
    to: inputToEl.value,
    from: inputFromEl.value,
  };

  testimonialListInDb.push().set(newTestimonial);

  inputFromEl.value = '';
  inputToEl.value = '';
  inputEl.value = '';
}

publishBtn.addEventListener('click', addItem);
