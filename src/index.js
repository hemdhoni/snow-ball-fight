import express from "express"
import { createServer } from "http"
import { Server} from "socket.io"

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer)

io.on("connect" , (socket) => {
     console.log("socket"  , socket)
})

app.use(express.static("public"))

httpServer.listen(8000  ,  () => {
    console.log("server is running on port 8000")
})