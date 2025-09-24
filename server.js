import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
const app = express()

app.use(morgan("dev"))
app.use(express.static("public"))
import indexRouter from "./routes/index.js"

app.use("/", indexRouter)

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})

app.get("/greeting", (req, res) => {
    console.log(req.query)
    res.send(`hej ${req.query.name}, ${req.query.message}`)
})