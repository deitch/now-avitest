require = require("esm")(module)

const hostname = "0.0.0.0", port = process.env.PORT || 8080
const e = require("./entry").default

e().listen(port, hostname, function (err) {
  if (err) throw err
  console.log('%s – listening on %s:%d', new Date, hostname, port)
})

