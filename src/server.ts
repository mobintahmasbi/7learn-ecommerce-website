import App from './app'
import { config } from 'dotenv'
config()
import '../infrustructural/connection/mongoose'
import { connectToRedis } from '../infrustructural/connection/redis'
connectToRedis()
const port:number = 5000
const Application = new App(port)
Application.start()