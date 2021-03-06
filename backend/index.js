import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './src/routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// MongoDB connection.
mongoose.Promise = global.Promise;
const URI = process.env.MONGO_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

// BodyParser Setup:
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
	res.send(`Node and express server is running on port ${PORT}`);
});

app.get('/api/test', (req, res) => {
	res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
	console.log(`Your server is runing on port ${PORT}`);
});