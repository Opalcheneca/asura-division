const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    nickName: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    merit:{
        type: Number,
        default: '0'
    },
    totalMerit:{
        type: Number,
        default: '0'
    },
    avatar : {
        tupe: String,
        deafult: ''
    },
    roles: {
        type: Object,
        default: ''
    },
    pGame: {
        type: Object,
        default: ''
    },
    pGameNickName: {
        type: Object,
        default: ''
    },
    cGameNickNames: {
        type: Object,
        default: ''
    },
    cGames: {
        type: Object,
        deafult: ''
    },
    heavenCrystals: {
        type: Number,
        default: '0'
    },
    fRank:{
        type: Number,
        default: '0'
    },
    gRank: {
        type: Number,
        default: '0'
    },
    memberTitle: {
        type: Object,
        default: ''
    },
    palace: {
        type: Object,
        default: 'Martial'
    },
    cultivation: {
        type: String,
        default: 'Houtian'
    },
    blackKarma: {
        type: Number,
        default: '0'
    },
    cultivatorMedals: {
        type: Number,
        default: '0'
    },
    hauberks: {
        type: String,
        default: ''
    },
    chausses: {
        type: String,
        default: ''
    },
    spaulders: {
        type: String,
        default: ''
    },
    handguards: {
        type: String,
        default: ''
    },
    brogans: {
        type: String,
        default: ''
    },
    necklase: {
        type: String,
        default: ''
    },
    belt: {
        type: String,
        default: ''
    },
    hood: {
        type: String,
        default: ''
    },
    ring: {
        type: String,
        default: ''
    },
    notificationBox: {
        type: Object,
        default: ''
    },
    familiar: {
        type: String,
        default: ''
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);
