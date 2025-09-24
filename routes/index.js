import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk", {
    })
})

router.get("/about", (req, res) => {
    res.render("about.njk", {
    })
})

export default router