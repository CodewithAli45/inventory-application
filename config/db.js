const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.DB_URL;

const dbConnection = async () => {
    try {
        const connected = await mongoose.connect(url);
        console.log("Connected to the Database : ", connected.connection.host);
    } catch (error) {
        console.log("Error in Connecting database, ", error);
    }
}

module.exports = dbConnection;