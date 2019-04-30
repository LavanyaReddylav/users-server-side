import mongoose from 'mongoose';


const UserSheama = new mongoose.Schema({

    login: { type: String, trim: true },
    id: { type: Number },
    node_id: { type: String },
    avatar_url: { type: String },
    gravatar_id: { type: String },
    url: { type: String },
    html_url: { type: String },
    followers_url: { type: String },
    following_url: { type: String },
    gists_url: { type: String },
    starred_url: { type: String },
    subscriptions_url: { type: String },
    organizations_url: { type: String },
    repos_url: { type: String },
    events_url: { type: String },
    received_events_url: { type: String },
    type: { type: String },
    site_admin: { type: Boolean }
})
module.exports = mongoose.model('users', UserSheama);