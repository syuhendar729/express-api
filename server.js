const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000
const db = require("./models")
const run = require("./routes/userRoute")
const corsOptions = {origin: "*"}

app.use(cors(corsOptions))
app.use(express.json())

const mongooseConfig = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
	.then(() => {
		console.log("Connected to MongoDB");
	}).catch((err) => {
		console.error("Error connecting to MongoDB", err);
	});

// Pemanggilan routing (utama)
run(app)

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
})


