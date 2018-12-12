var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    movie1: String,
    movie2: String,
    movie3: String,
    movie4: String,
    movie5: String,
    hashed_password: String
});
mongoose.model('User', UserSchema);