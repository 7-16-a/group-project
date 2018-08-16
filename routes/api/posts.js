let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let Post = mongoose.model('Post');



router.post('/', (req, res) => {
    let newPost = new Post();
    newPost.message = req.body.message;
    newPost.owner = req.body.owner;
    newPost.save((err) => {
        if (err) {
            res.send(err)
        } else {
            res.sendStatus(200)
        }
    })
})

router.get('/:id', (req, res) => {
    Post.find({ owner: req.params.id }).then((orders) => {
        res.json(orders)
    })
})


router.put('/:id', (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if (err) {
            res.send(err)
        } else {
            console.log(post);
            post.message = req.body.newPost;
            post.save((err) => {
                if (err) {
                    res.send(err)
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })
})

router.delete('/:id', (req, res) => {
    Post.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = router;