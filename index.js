const express= require("express")
const app = express()
const cors = require("cors")
const db = require("./models");
const {LogApis } = require("./middlewares/Logs");


app.use(cors());
app.use(express.json());
// Routes

const ProjectRouter = require('./routes/portfolio');

app.use('/', LogApis, ProjectRouter)


db.sequelize.sync().then(() => {
    app.listen(3002, ()=>{
        console.log("server started at port 3002")
    })
}).catch(err=>{
    console.log("error::",err)
})
