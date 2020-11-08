importScripts('E:/aymanKoSolvee/SolveManko PWA/solvePwa/solvePwa/dist/PaymentSystem/ngsw-worker.js');

self.addEventListener('sync', (event) => {
  if (event.tag === 'post-data') {
    // call method
    console.log("add event listner");
    event.waitUntil(getDataAndSend());
  }
});

function addData(idd) {
  //indexDb
  let obj = {
    id: idd,
  };
  fetch('http://localhost:50455/api/Admin/DeleteUser',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());
}

function getDataAndSend() {
  let db;
  const request = indexedDB.open('my-db');
  request.onerror = (event) => {
    console.log('Please allow my web app to use IndexedDB 😃>>>👻');
  };
  request.onsuccess = (event) => {
    console.log('sucess');
    db = event.target.result;
    getData(db);
  };
}

function getData(db) {
  const transaction = db.transaction(['user-store']);
  const objectStore = transaction.objectStore('user-store');
  const request = objectStore.get('id');
  request.onerror = (event) => {
    // Handle errors!
  };
  request.onsuccess = (event) => {
    // Do something with the request.result!
    addData(request.result);
    console.log('Name of the user is ' + request.result);
  };
}
