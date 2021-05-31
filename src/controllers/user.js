/**
 * user.js
 */

//import services from '../../services/dalanshu.js'

function login (req, res, next) {
  //services.getArticles()

  const { username, password } = req.body
  console.log('in getArticles', username, ' | ', password)

  res.send({ data: 'NNNNNN 204Hello from Generate-Express' })
}


export default {
  login,
}
