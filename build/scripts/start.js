const logger = require('../lib/logger')
var https = require('https')
var fs = require('fs')
var base = process.env.PWD
var privateKey = fs.readFileSync(base + '/server/certs/selfsigned.key', 'utf8')
var certificate = fs.readFileSync(base + '/server/certs/selfsigned.crt', 'utf8')

var credentials = { key: privateKey, cert: certificate }

logger.info('Starting server...')
const app = require('../../server/main')
var httpsServer = https.createServer(credentials, app)
httpsServer.listen(5000, () => {
  logger.success('Server is running at http://localhost:5000')
})
