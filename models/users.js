const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
});
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel