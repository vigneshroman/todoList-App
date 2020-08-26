const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()

const items = ['buy food', 'cook food', 'eat food']
const workItems = []

//setting the view engine to ejs...
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'))


app.get("/", (req, res) => {
  const day = date.getDate();
  //rendering the list.ejs page...
  res.render('list', {
    listTitle: day,
    newListItems: items
  })
});


app.post("/", (req, res) => {
  const item = req.body.toDo

  if (req.body.list === "Work") {
    workItems.push(item)
    res.redirect("/work")
  } else {
    items.push(item)
    res.redirect("/")
  }
})


app.get("/work", (req, res) => {
  res.render('list', {
    listTitle: "Work List",
    newListItems: workItems
  })
})


// app.post("/work",(req,res)=>{
//   let item=req.body.toDo
//   workItems.push(item)
//   res.redirect("/work")
// })

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(3000, () => {
  console.log("Server started on port 3000.")
});
