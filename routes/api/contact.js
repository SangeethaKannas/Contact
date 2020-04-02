const express = require('express');
const router = express.Router();
//const bcrypt = require('bcryptjs')
const Contact = require('../../models/Contact')

//Get All reqcords
router.get('/', (req, res) => res.send('Contact Route'));

//Create
router.post('/',async (req, res) => {
    //TODO check existing
    console.log(req.body);
    const contact = new Contact({
        ...req.body
    })

    try {
        const _contact = await contact.save();        
        res.json(_contact);
    } catch(error){
        res.status(500).message('Unable to save contact ' + error.message);
    }    
});

module.exports = router;