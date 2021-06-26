const httpRequest = {
  post: (url, data) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open('POST', url)
    xhttp.setRequestHeader('Content-type', 'application/json')
    xhttp.onload = function () {
      console.log("Success");
    }
    xhttp.onerror = function () {
      console.log("Error occurred while sending the request...");
    }
    xhttp.send(JSON.stringify(data))
  }
}

module.exports = httpRequest
