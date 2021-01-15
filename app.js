var express = require('express')
var request = require('request')
var app = express()

var SERVICE_PORT = process.env.SERVICE_PORT || 3000

var USER = process.env.CLIENT_APP_USER || 'admin'
var PASSWORD = process.env.CLIENT_APP_PASSWORD || 'Password1'
var SCHEMA = process.env.CLIENT_APP_SCHEMA || 'http'
var HOST = process.env.CLIENT_APP_HOST || 'localhost'
var PORT = process.env.CLIENT_APP_PORT || '80'
var ACTUATOR_BASE_PATH = process.env.CLIENT_APP_ACTUATOR_BASE_PATH || '/management'
var BEANS_URL = SCHEMA + '://' + USER + ':' + PASSWORD + '@' + HOST + ':' + PORT + ACTUATOR_BASE_PATH + '/beans'

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
        console.log('Error while getting Spring application beans. Errors: ' + error + ', took: ' + timeSince(startTime) + ' ms.')
        res.status(500).send(error)
      } else {
        console.log('Error while getting Spring application beans. Status: '
                    + response.statusCode + ', body: ' + response.body + ', took: ' + timeSince(startTime) + ' ms.')
        res.status(response.statusCode).send(response.body)
      }
    }
  })
})

app.listen(SERVICE_PORT, function () {
  console.log('Spring Beans Visualized App listening on port ' + SERVICE_PORT)
  console.log('Beans info located on: ' + BEANS_URL)
})
