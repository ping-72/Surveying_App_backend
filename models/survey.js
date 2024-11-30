import mongoose from "mongoose";

const surveySchema = new mongoose.Schema(
  {
    form1Data: Object,
    form2Data: Object,
    form3Data: Object,
    form4Data: Object,
    form5Data: Object,
  },
  { timestamps: true }
);

export default mongoose.model("Survey", surveySchema);
