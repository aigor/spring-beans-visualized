var express = require('express')
var request = require('request')
var app = express()

var USER = 'admin'
var PASSWORD = 'password'
var SCHEMA = 'http'
var HOST = 'localhost:8080'
var ACTUATOR_BASE_PATH = ''
var BEANS_URL = SCHEMA + '://' + USER + ':' + PASSWORD + '@' + HOST + ACTUATOR_BASE_PATH + '/beans'

var time = function() { return new Date().getTime() }
var timeSince = function(start) { return time() - start }

app.use('/', express.static('web-app'))

app.get('/beans', function (req, res) {
  var startTime = time()
  request(BEANS_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('Received beans from Spring application, took: ' + timeSince(startTime) + ' ms.')
      res.send(body)
    } else {
      if (error != null){
        console.log('Error while getting Spring application beans. Errors: ' + error + ', took: ' + timeSince(startTime) + " ms.")
        res.status(500).send(error)
      } else {
        console.log('Error while getting Spring application beans. Status: '
                    + response.statusCode + ", body: " + response.body + ', took: ' + timeSince(startTime) + " ms.")
        res.status(response.statusCode).send(response.body)
      }
    }
  })
})

app.listen(3000, function () {
  console.log('Spring Beans Visualized App listening on port 3000!')
})
