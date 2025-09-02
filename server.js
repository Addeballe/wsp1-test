import express from "express"

const app = express()

app.get("/", (req, res) => {
    console.log(req)
    res.send("<h1>Hello World! Kanelbulle forever!<h1>")
})

app.get("/about", (req, res) => {
    res.json({
        "message": "Hatisk textbox"
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})