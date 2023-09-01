let express = require('express')
let mongoose = require('mongoose')
let port = 8000
let app = express()
let Users = require('./Model/users')
let cors = require('cors')
const users = require('./Model/users')


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))


let db_url = 'mongodb://localhost:27017/Mern2';
mongoose.connect(db_url)
    .then(() => {
        console.log("Connection Established");
    })

    //register the user
app.post('/register', async (req, res) => {
    await Users.findOne({ email: req.body.email })
        .then((data) => {
            if (data) {
                res.send({ message: "Email is allreasy exist" })
            } else {
                let userData = new Users({
                    name: req.body.name,
                    email: req.body.email,
                    phoneNo: req.body.phoneNo,
                    gender: req.body.gender,
                    course: req.body.course,
                    Designation: req.body.Designation,
                    image: req.body.image,
                    password: req.body.password,
                    date: new Date()
                })
                userData.save()
                    .then(() => {
                        res.send({ message: "Register successfully" })
                    })
                    .catch(() => {
                        res.send({ message: "Something went wrong" })
                    })
            }
        })
})

//verify the user
app.post("/login", (req, res) => {
    Users.findOne({ email: req.body.email })
        .then((data) => {
            if (data) {
                if (data.password === req.body.password) {
                    res.send({ message: "Login Successful", status: 200 })
                } else {
                    res.send({ message: "Password does not match" })
                }
            } else {
                res.send({ message: "User not found" })
            }
        })
})
//fetch the data
app.get('/register', async (req, res) => {
    await Users.find({}).sort({ name: 1 })
        .then((data) => {
            res.send(data)
        })
})
//getting one particular record
app.get('/register/:_id', async (req, res) => {
    let id = req.params._id
    await Users.find({ _id: id })
        .then((data) => {
            res.send(data)
        })
        .catch(() => {
            res.send("Data Not there")
        })
})
//update the data
app.put('/register/:_id', (req, res) => {
    let id = req.params._id
    let data = Users.find({ _id: id })
    if (data) {
        data.name = req.body.name
        data.email = req.body.email
        data.phoneNo = req.body.phoneNo
        data.gender = req.body.gender
        data.course = req.body.course
        data.Designation = req.body.Designation
        data.image = req.body.image
        data.password = req.body.password
        users.updateMany({ _id: new mongoose.Types.ObjectId(id) }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                phoneNo: req.body.phoneNo,
                gender: req.body.gender,
                course: req.body.course,
                Designation: req.body.Designation,
                image: req.body.image,
                password: req.body.password

            }
        })
            .then(() => {
                res.send({ message: "Updated Successfully" })
            })
            .catch(() => {
                res.send({ message: "Something went wrong" })
            })
    }
    else {
        res.send("Id not there")
    }
})

//delete a record
app.delete('/register/:_id', async (req, res) => {
    let id = req.params._id
    Users.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
        .then(() => {
            res.send("Deleted")
        }).catch(() => {
            res.send("All Ready Deleted")
        })
})
//server
app.listen(port, () => {
    console.log(`server on ${port}`);
})