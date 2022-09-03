const express = require('express');
const router = express.Router();
const users = require('../Users.json')

router.route('/all').get((req, res) => {
    res.send(users)
})
router.route('/random').get((req, res) => {
    
    res.send('found random user')
})
router.route('/save').post((req, res) => {
    
    res.send('save user')
})
router.route('/update').patch((req, res) => {
    
    res.send("update user")
})
router.route('/bulk-update').patch((req, res) => {
    
    res.send('update many users')
})
router.route('/delete').delete((req, res) => {
    
    res.send('delete user')
})
module.exports = router;