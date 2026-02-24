const express = require("express")

const app = express()

app.use("/", function (req, res){
    res.send("<h1>Funcionou</hi>")
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})  
