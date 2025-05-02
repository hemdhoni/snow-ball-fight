const socket  = io(`ws://localhost:8000`)

socket.on("connect" , () => {
    console.log("connected")
})