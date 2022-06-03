const schema = mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  password: { type: String, select: false },
});

module.exports = mongoose.model("User", schema);
