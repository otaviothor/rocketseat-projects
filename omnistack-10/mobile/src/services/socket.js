import socketio from 'socket.io-client'

const socket = socketio('http://192.168.1.16:3333', {
  autoConnect: false
})

function subscribeToNewDevs(subscribeFunction) {
  socket.on('newDev', subscribeFunction)
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }

  socket.connect()

  socket.on('message', text => {
    console.log(text)
  })
}

function disconnect() {
  socket.connect && socket.disconnect
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
}
