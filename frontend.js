function ajax (method, url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var myObj = JSON.parse(this.responseText);
      callback(myObj);
    }
  });
  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}
