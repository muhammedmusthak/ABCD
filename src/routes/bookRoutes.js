var express = require('express');
var booksRouter = express.Router();

function router(nav)
{


var books = [{
    title:"War and peace",
    genre:"history",
    author:"ramu",},
    {
        title:"java programming",
        genre:"computer",
        author:"raju",},    
    
    {
        title:"c sharp",
        genre:"computer",
        author:"kiran",},
    {
    title:"networking",
    genre:"history",
    author:"karthik",},

        
    
];
booksRouter.route('/')
.get((req,res)=>{
    res.render('books',
    {
        nav, 
        title:"Books",
        books  
    }
    );
});

booksRouter.route('/:id')
.get((req,res)=>{
    const id = req.params.id;
    res.render(
        'book',
        {
            nav, 
            title:"Books",
            book:books[id]    
        }
    );
    });
    return booksRouter;
}
    module.exports = router;