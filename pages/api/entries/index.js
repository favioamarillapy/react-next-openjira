import dbConnect from '../../../backend/config/dbConnect'
import Entry from '../../../backend/models/Entry'


export default async function handle(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const entries = await Entry.find({})
        res.status(200).json({ success: true, data: entries })
      } catch (error) {
        res.status(400).json({ success: false })
      }

    default:
      break;
  }
}
