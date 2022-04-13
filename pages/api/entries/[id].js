import mongoose from 'mongoose'
import dbConnect from '../../../backend/config/dbConnect'
import Entry from '../../../backend/models/Entry'


export default async function handle(req, res) {
  const { method } = req
  const { id } = req.query

  await dbConnect()

  if (!mongoose.isValidObjectId(id)) return res.status(400).json({ success: false, message: "The ID is not correct" })

  switch (method) {
    case 'PUT':
      try {
        const entry = await Entry.findById(id)
        if (!entry) return res.status(400).json({ success: false, message: "Entry not found" })

        const { status, description } = req.body
        const data = await Entry.findByIdAndUpdate(id, { status, description }, { runValidators: true, new: true })

        res.status(201).json({ success: true, data: entry })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message })
      }

    default:
  }

}
