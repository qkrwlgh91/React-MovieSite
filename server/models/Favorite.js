const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User' // ObjectId를 type으로 할시 ref를 선언해주어야 하는데, 예를 들어 userId가 sdfadsfbhkasb23이라고 한다면, 이것을 가지고 models의 User.js안의 모든 정보를 가지고 올 수있다.
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }
}, {timestamps: true }) // timestamps: true를 해주면 생성된 시간등을 자동으로 처리해줌


const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }