import mongoose from 'mongoose'

const EntrySchema = new mongoose.Schema({
  description: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: {
    type: Number,
    enum: { values: ['backlog', 'progress', 'finished'] },
    required: true
  }
})

module.exports = mongoose.models.Entry || mongoose.model('Entry', EntrySchema)