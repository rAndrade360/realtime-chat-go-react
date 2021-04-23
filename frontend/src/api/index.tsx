const socket = new WebSocket("ws://localhost:8080/ws")

const connect = (cb: any) => {
  socket.onopen = () => {
    console.log("Sucessfully Connected")
  }

  socket.onmessage = (msg) => {
    console.log(msg)
    cb(msg)
  }

  socket.onclose = event => {
    console.log("Connection closed: ", event)
  }

  socket.onerror = event => {
    console.log("Socket Error: ", event)
  }
}

const sendMsg = (msg: any) => {
  console.log("Send message: ", msg)
  socket.send(msg)
}

export {connect, sendMsg}