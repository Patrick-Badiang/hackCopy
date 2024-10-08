import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    PlayerID: String,
    assists: Number,
    deaths: Number,
    gold_earned: Number,
    kills: Number,
    vision_score: Number,
    summoner_name: String,
    summoner_profile_id: Number,
    kda: String,
});

const userModel = mongoose.model('Player', userSchema);

export default userModel;