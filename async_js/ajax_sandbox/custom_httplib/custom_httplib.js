function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

EasyHTTP.prototype = {
  constructor: EasyHTTP,

  // Make an HTTP GET Request
  get: function (url, callback) {
    this.http.open('GET', url, true);

    let self = this; //es5 way of fixing context issue in functions
    this.http.onload = function () {
      if (self.http.status === 200) {
        callback(null, self.http.responseText);
      } else {
        callback('Error: ' + self.http.status);
      }
    };

    this.http.send();
  },

  // Make an HTTP POST Request
  post: function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  },

  // Make an HTTP PUT Request
  put: function (url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  },

  // Make an HTTP DELETE Request
  delete: function (url, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function () {
      if (self.http.status === 200) {
        callback(null, 'Post deleted');
      } else {
        callback('Error: ' + self.http.status);
      }
    };

    this.http.send();
  },
};

//https://jsonplaceholder.typicode.com/
//fake api for testing and prototyping
