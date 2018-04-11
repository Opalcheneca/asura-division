const User = require("../../models/User");
const UserSession = require("../../models/UserSession");

module.exports = (app) => {

    app.get('/api/users', (req, res, next) => {
        User.find()
            .exec()
            .then((user) => res.json(user))
            .catch((err) => next(err));
    });

    app.get('/api/user/:token', (req, res, next) => {
        UserSession.find({ _id: req.params.token })
            .exec()
            .then((userSession) => {
                const userToken = userSession[0].userId;
                User.find({ _id: userToken })
                    .exec()
                    .then((user) => res.json(user).toString());
            })

        // const array = UserSession.find({_id:id})
        // .exec()
        // .then((UserSession) => 
        // res.json(UserSession))
        // .catch((err) => next(err));
        // // console.log(id)
        // console.log(array.userId)
        // console.log(array.userId)
        // User.find({ _id: UserSession.findById(id)
        // .exec()
        // .then((UserSession) => 
        // res.json(UserSession))})
        //     .exec()
        //     .then((user) => res.json(user))
        //     .catch((err) => next(err));

        // User.find({ _id:UserSession.findById(id)
        // .exec()
        // .then((userSession) => get(userSession.userId))
        // })
        // .exec()
        // .then((user) => res.json(user))
        // .catch((err) => next(err));

        // User.find({ email: accEmail })
        //     .exec()
        //     .then((user) => res.json(user).toString())
        // .then((userSession) => (test = userSession.userId))


    });
    app.put('/api/user/:token/update', (req, res, next) => {
        const accEmail = req.params.email;

        const { body } = req;
        const {
            merit,
            cultivation,
        } = body;

        User.findOneAndUpdate({ email: accEmail })
            .exec()
            .then((user) => {
                user.merit = merit;
                user.cultivation = cultivation;

                user.save()
                    .then(() => res.json(user))
                    .catch((err) => next(err));
            })
    });

    app.put('/api/user/:email/accUpdate', (req, res, next) => {
        const accEmail = req.params.email;

        const { body } = req;
        const {
            pGames,
            pGameNickName,
            lGames,
            lGameNickNames
        } = body;

        User.findOneAndUpdate({ email: accEmail })
            .exec()
            .then((user) => {
                user.pGames = pGames;
                user.pGameNickName = pGameNickName;
                user.lGames = lGames;
                user.lGameNickNames = lGameNickNames;
                user.save()
                    .then(() => res.json(user))
                    .catch((err) => next(err));
            })
    });
}