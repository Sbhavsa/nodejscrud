let express = require('express')
let app = express()
app.use(express.json())

let prodArr = []
let id = 0
try{
app.post('/product', (req, res) => {
    let data = req.body
    data.id = id + 1
    id = id + 1
    console.log(data)
    prodArr.push(data)
    res.status(201).send({
        isSuccess: true,
        product: data
    })
})
}
catch(err){
    res.status(500).send('internal server error')
}
try{
app.get('/getAllProducts', (req, res) => {
    let data = prodArr
    res.status(200).send({
        isSuccess: true,
        data: data,
        count: data.length
    })
})
}
catch(err){
    res.status(500).send('internal server error')
}

try{


app.delete('/deletprod', (req, res) => {
    let id = req.query.id
    let arr = prodArr.filter((fld) => {
        if (fld.id != id) {
            return true
        }
    })
    prodArr = arr
    console.log(arr)
    res.send({ isSuccess: true, id: req.query.id })

})
}
catch(err){
    res.status(500).send('internal server error')
}
try{
app.put('/updatuser', (req, res) => {
    let id = req.query.id
    const body = req.body
    let indexi = prodArr.findIndex((item) => item.id === Number(id))
    if (indexi !== -1) {

        prodArr[indexi] = {
            ...prodArr.indexi,
            ...body
        }
        console.log(req.body)
        res.status(200).send('User updated successfully')
    }
    else {
        res.status(404).send({ isSuccess: false, message: 'Product not found' });
    }


})
}
catch(err){
    res.status(500).send('internal server error')
}

app.listen(6999, (err) => {
    if (!err) {
        console.log("hello " + 6999)
    }
})