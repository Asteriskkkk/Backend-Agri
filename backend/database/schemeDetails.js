const mongoose = require('mongoose');

const BenefitSchema = new mongoose.Schema({
  sl_no: Number,
  type: String,
  amount: String,
  disbursement: String
});

const ApplicationProcessSchema = new mongoose.Schema({
  type: String,
  steps: [String],
  notes: [String]
});

const FAQSchema = new mongoose.Schema({
  question: String,
  answer: String
});

const SchemeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  state: { type: String, required: true },
  tags: [String],
  details: {
    description: String,
    extra_info: String
  },
  benefits: [BenefitSchema],
  eligibility: [String],
  application_process: ApplicationProcessSchema,
  documents_required: [String],
  faq: [FAQSchema]
});

const SchemeDetails = mongoose.model('schemedetails', SchemeSchema);

module.exports = { SchemeDetails };
