//Workout Model imported
const gradeModel = require('./todo.model')
const userModel = require('../auth/userModel')
const mongoose = require('mongoose')

// get all 
const getAll = async (req, res) => {
    const gradeModels = await gradeModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(gradeModels)

}


// get a single 
const getSingle = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such to do' })
    }
    const gradeModels = await gradeModel.findById(id)

    if (!gradeModels) {
        return res.status(404).json({ error: 'No Such to do' })

    }
    res.status(200).json(gradeModels)
}

// get a single  user
const getUserSingle = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such to do' })
    }
    const gradeModels = await gradeModel.find({userID:id})

    if (!gradeModels) {
        return res.status(404).json({ error: 'No Such to do' })

    }
    res.status(200).json(gradeModels)
}


// create a new gradeModel
const createWithoutReqBodyCheck = async (req, res) => {
    //add doc to db
    try {
        const gradeModels = await gradeModel.create(req.body)
        res.status(200).json(gradeModels)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createNew = async (req, res) => {
    const { name,description,userID } = req.body;

    try {
        // Check if a document with the same name already exists
        // const existingJob = await gradeModel.findOne({ name });

        // if (existingJob) {
        //     return res.status(400).json({ error: 'A grade with the same name already exists' });
        // }

        // Create a new document
        const gradeModels = await gradeModel.create({ name ,description,userID});
        res.status(200).json(gradeModels);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a gradeModel
const deleteSinle = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such to do' })
    }
    const gradeModels = await gradeModel.findOneAndDelete({ _id: id })

    if (!gradeModels) {
        return res.status(400).json({ error: 'No Such to do' })
    }

    res.status(200).json(gradeModels)

}


// update a workout
const updateDocument = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Workout' })
    }
    const gradeModels = await gradeModel.findByIdAndUpdate({ _id: id }, {
        ...req.body
    }, { new: true })

    if (!gradeModels) {
        return res.status(400).json({ error: 'No Such Workout' })
    }

    res.status(200).json(gradeModels)

}

module.exports = {
    getSingle,
    getAll,
    createNew,
    deleteSinle,
    updateDocument,createWithoutReqBodyCheck,
    getUserSingle
}

