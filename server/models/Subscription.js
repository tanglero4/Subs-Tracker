const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const subscriptionSchema = new Schema({
  name: {
    type: String,
    required: 'You need to add a name',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  pay_date: {
    type: String,
    required: false,
  },
  active: {
    type: Boolean,
    required: true,
  }
});

const Subscription = model('Subscription', subscriptionSchema);

module.exports = Subscription;
