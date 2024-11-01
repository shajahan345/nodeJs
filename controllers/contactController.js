const asyncHandler = require('express-async-handler')

const Contact = require('../models/contactModal')

// @desc Get All contacts
// @route Get /api/contacts
// @access public;
const getContacts = asyncHandler(async (req, res) => {
    // const contacts = Contact.find();
    // console.log(contacts);
    res.status(200).json({"message":"HEllow"})
});


// @desc Create contact
// @route Get /api/contacts
// @access public;
const createContacts = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    res.status(201).json(({ message: "Create contact" }))
})


// @desc get contact
// @route Get /api/contacts
// @access public;
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json(({ message: `Get contact,${req.params.id}` }))
})

// @desc get contact
// @route Get /api/contacts
// @access public;
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json(({ message: `Delete contact,${req.params.id}` }))
})

// @desc get contact
// @route Get /api/contacts
// @access public;
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json(({ message: `Update contact,${req.params.id}` }))
})

module.exports = { updateContact, createContacts, getContact, getContacts, deleteContact }