const mongoose = require('mongoose')

const hamlatzhaSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    name: {
      type: String,
      required: [true, 'Please add a name value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Hamlatzha', hamlatzhaSchema)
