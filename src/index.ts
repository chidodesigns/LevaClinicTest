import express from 'express';
import App from './services/ExpressApp';
import {dbConnection} from './services/Database'
import dotenv from 'dotenv';
dotenv.config();

//@TODO Add Port via dotenv config

export const StartServer = async () => {
    const PORT = process.env.PORT || 8000
    const app = express()
    await dbConnection()
    await App(app)
    app.listen(PORT, () => {
        console.log(`Listening to ${PORT}`)
    })
}

StartServer()