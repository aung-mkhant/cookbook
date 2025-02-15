const express = require('express')


require('dotenv').config()
const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const Recipe = require('../models/Recipe')



app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.findAll();
        res.json(recipes)
    }
    catch (error) {
        console.log('error is', error)
        res.status(400).json({ error });
    }

})


app.post("/api/recipes", async (req, res) => {


    try {
        const newRecipe = Recipe.build({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions
        });
        console.log("saving")
        await newRecipe.save();
        console.log('new recipe was created')
        res.redirect("/")
    }
    catch (error) {
        console.log('error is', error)
        res.status(400).json({ error });
    }
})



module.exports = app