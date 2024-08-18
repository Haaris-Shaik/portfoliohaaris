import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const cards = [
        { title: 'Programming Skills', description: 'This is the first card.', image: 'images/leetcode.png' },
        { title: 'Card 2', description: 'This is the second card.', image: 'image2.jpg' },
        { title: 'Card 3', description: 'This is the third card.', image: 'image3.jpg' },
        { title: 'Card 4', description: 'This is the fourth card.', image: 'image4.jpg' },
    ];
    res.render('index.ejs', { cards });
  });

app.post("/blogs",(req,res)=>{
    res.render("blogs.ejs",{
        totSize: 5,
    });
});

app.post("/potd",(req,res)=>{
    res.render("potd.ejs")
});

app.post("/contact",(req,res)=>{
    res.render("contact.ejs")
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`)
});

export default app;