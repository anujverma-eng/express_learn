function apiKey(req,res,next){
    const api_key='123456789';
    const userApiKey = req.query.api_key;
    if(req.query.api_key && (userApiKey === api_key)){
        console.log('done');
        next();
    }else{
        res.json({
            message:"You Are Not Allowed!"
        })
    }
}

module.exports = apiKey;