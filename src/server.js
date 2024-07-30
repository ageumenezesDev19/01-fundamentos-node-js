import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: Math.floor(Math.random() * 1000).toString(),
      name: 'John Doe',
      email: 'john.doe@gmail.com',
    })

    return res.writeHead(201).end('Criação de usuário')
  }

  console.log(method, url)

  return res.writeHead(404).end();
})

server.listen(3333)

// localhost:3333
