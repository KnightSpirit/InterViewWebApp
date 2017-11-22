let iDb;
function DBIns(){

}

function IsIndexExists(){
  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  if (window.indexedDB) {
    let iDbRequest = window.indexedDB.open('interview')
    iDbRequest.onerror = (event) => {

    };

    iDbRequest.onsuccess = (event) => {
      iDb = iDbRequest.result;
    }
  }
}