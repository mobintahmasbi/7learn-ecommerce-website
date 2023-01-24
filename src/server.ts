import App from './app'
import { config } from 'dotenv'
config()
import '../infrustructural/connection/mongoose'
const port:number = 5000
const Application = new App(port)
Application.start()