const express = require('express');
const router = express.Router();
const users = require('../Users.json')

router.route('/all').get((req, res) => {
    res.send(users)
})
router.route('/').get((req, res) => {
    const {limit} = req.query
    res.send(users.slice(0, limit))
})
router.route('/random').get((req, res) => {
    // const ranNum = Math.floor(Math.random() * 10);
    console.log('random user')
    // res.send(ranNum)
})
router.route('/save').post((req, res) => {
    const user = req.body;
  users.push(user);
    res.send(users)
})
router.route('/update').patch((req, res) => {
    
    res.send("update user")
})
router.route('/bulk-update').patch((req, res) => {
    
    res.send('update many users')
})
router.route('/delete/:id').delete((req, res) => {
    const { id } = req.params;
    const deleteUser = users.find(user => user.id === Number(id))
    
    res.send(deleteUser)
})
module.exports = router;