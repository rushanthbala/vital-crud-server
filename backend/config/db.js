const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://rushanthbala:rushanthbala@cluster0.ma55gsm.mongodb.net/test`)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
