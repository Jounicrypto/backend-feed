const feed = require('../models/feed');
const feedModel = require('../models/feed')
const tempDB = [];

const getHomePage = (req, res) => {
    const allMessages = feedModel.find()
    .then(allMessages=>{
        res.render('homePage', {pageTitle: 'Home Page', articles: allMessages});
    })
    .catch(err=>{
        console.log(err)
    })
    
}

const getNewArticle = (req, res) => {
    res.render('addNewArticle', {pageTitle: 'New Article'});
}

const postMedia = (req, res) => {
    
    const newFeed = feedModel(req.body)
    console.log(newFeed)
    newFeed.save()
    .then(()=>{
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err)
    })
    res.render('homePage', {pageTitle: 'Home Page', articles: tempDB});

}

const delComment = (req,res) =>{
    
    feedModel.findOneAndDelete(req.params.id)
    .then(()=>{
    res.redirect('/');
    })
    .catch(err=>{
    console.log(err)
    })
}

const getEditMessage = (req,res)=>{
    feedModel.findOne({_id: req.params.id})
    .then(newFeed =>{
        res.render('editMessage', {messageEdit: 'Edit Message', article: newFeed});
    })
    .catch(err=>{
        console.log(err)
    })
    
    
}

module.exports = {
    getHomePage,
    getNewArticle,
    postMedia,
    delComment,
    getEditMessage
}