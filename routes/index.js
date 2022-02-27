const router = require('express').Router();
const path = require('path');
const apiKeyMiddleware = require('../middlewares/apiKey')

router.get('/',(req,res)=>{
    res.render('index',{title:"My HOME Page"})
});

router.get('/about',(req,res)=>{
    res.render('about',{title:"My About Page"});
});

router.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname)+'/download.txt')
});

router.get('/api/products',apiKeyMiddleware,(req,res)=>{
    res.render('products',{title:"My Products Page"});
    res.json([
        {
            id:12,
            name:'chrome'
        },
        {
            id:13,
            name:'brave'
        },
        {
            id:14,
            name:'firefox'
        },
        {
            id:15,
            name:'edge'
        },
    ]);
});



module.exports= router;