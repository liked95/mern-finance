import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import kpiRoutes from './routes/kpi.js'
import productRoutes from './routes/product.js'
import transactionRoutes from './routes/transaction.js'
import { kpis, products, transactions } from './data/data.js'
import KPI from './models/KPI.js'
import Product from './models/Product.js'
import Transaction from './models/Transaction.js'



// Config
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Route
app.use('/kpi', kpiRoutes)
app.use('/product', productRoutes)
app.use('/transaction', transactionRoutes)


// Mongoose setup
const PORT = process.env.PORT || 9000
const MONGO_CONNECTION_PATH = process.env.NODE_ENV === 'production'
    ? process.env.MONGO_URL
    : 'mongodb://0.0.0.0:27017/finance-app'

mongoose.connect(MONGO_CONNECTION_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    app.listen(PORT, () => console.log(`Connected at server PORT: ${PORT}`))
    // await mongoose.connection.db.dropDatabase()
    // await KPI.insertMany(kpis)
    // await Product.insertMany(products)
    // await Transaction.insertMany(transactions)
}).catch(error => console.log(`${error} did not connect`))