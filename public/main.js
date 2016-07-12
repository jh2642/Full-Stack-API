document.onreadystatechange = function () {
  if (document.readyState === 'complete') {

    //add fetch from etsy
    // no proxy
    // Use XMLHttpRequest() or fetch() to pull from your API endpoint at http://localhost:8000/api/v1
    fetch('http://localhost:8000/api/v1')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      data.forEach(function(row) {
        var tableBody = document.querySelector('#data tbody')
        var tr = document.createElement('tr')
        var td1 = document.createElement('td')
        td1.innerHTML = row.film
        var td2 = document.createElement('td')
        td2.innerHTML = row.stars
        var td3 = document.createElement('td')
        td3.innerHTML = row.rating
        var td4 = document.createElement('td')
        td4.innerHTML = row.votes
        var td5 = document.createElement('td')
        td5.innerHTML = row.created_at
        var td6 = document.createElement('td')
        td6.innerHTML = row.updated_at

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tableBody.appendChild(tr)
      })
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }
}
