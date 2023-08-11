const express = require('express'); // get express
const mongoose = require('mongoose'); // get database
const articleRouter = require('./routes/articles.js');
const app = express();              // make express into a function

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use('/articles', articleRouter);

        // (/)index route our main route
            //which will take our request as well as our response
app.get('/', (req, res) => {
    const articles = [{         // reponse to the user
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    }]
    res.render('articles/index', { articles: articles })
})

app.listen(5000)                    // listen to or have that function