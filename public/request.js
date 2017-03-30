// receives calls from listener.js and onload
// sends xhr requests to router.js
// receives responses from xhr callback

function makeRequest(method, url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.onreadystatechange === 4 && xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    } else {
      callback(new Error("Status Code: ", xhr.status))
    }
  }
  xhr.open(method, url);
  xhr.send();

return {makeRequest: makeRequest}
}
