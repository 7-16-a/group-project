const express = require('express');
const router = express.Router();

//Post Model
const Post = require('../../models/Post');

//@route GET api/posts: Gets all posts
router.get('/', (req, res) => {
    Post.find()
    .sort({ date: +1 })
    .then(posts => res.json(posts))
});

// //@route POST api/posts: Creates posts
router.post('/', (req, res) => {
    const newPost = new Post({
        name: req.body.name
    });

    newPost.save().then(post => res.json(post));
});

//@route DELETE api/posts: Delete a post
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;