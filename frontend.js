function appendTable(result){
  var table = document.querySelector('table');
  table.innerHTML = '';
  table.innerHTML = `<tr>
                      <th>Plate</th>
                      <th>Brand</th> 
                      <th>Model</th>
                      <th>Color</th>
                      <th>Year</th>
                    </tr>
`
  result.forEach(function(element) {
  const markup = `<tr>
                    <td>${element.plate}</td>
                    <td>${element.car_brand}</td>
                    <td>${element.car_model}</td>
                    <td>${element.color}</td>
                    <td>${element.year}</td>
                  </tr>
  `
  table.innerHTML += markup;
  }, this);
}

function addListenerToButtons (redcar, bluecar, selectcar, allcar) {
  allcar.addEventListener('click', function () {
    ajax('GET', 'backend.php', null, appendTable)
  });
  redcar.addEventListener('click', function () {
    ajax('GET', 'backend.php?color="Red"', null, appendTable)
  });
  bluecar.addEventListener('click', function () {
    ajax('GET', 'backend.php?color="Blue"', null, appendTable)
  });
  selectcar.addEventListener('change', function () {
    console.log(selectcar.value);
    if (selectcar.value) {
      ajax('GET', `backend.php?brand="${selectcar.value}"`, null, appendTable);
    } else {
      ajax('GET', 'backend.php', null, appendTable);
    }
  });
}

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

function start () {
  addListenerToButtons(btnRedcar, btnBluecar, selectCar, btnAll);
  ajax('GET', 'backend.php', null, appendTable);
}
