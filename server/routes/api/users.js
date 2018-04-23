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
    });
    app.put('/api/user/:token/update', (req, res, next) => {
        const { body } = req;
        const {
            merit,
            cultivation,
        } = body;

        UserSession.find({ _id: req.params.token })
            .exec()
            .then((userSession) => {
                const userToken = userSession[0].userId;
                User.findByIdAndUpdate(userToken)
                    .exec()
                    .then((user) => {
                        user.merit = merit;
                        user.cultivation = cultivation;

                        user.save()
                            .then(() => res.json(user))
                            .catch((err) => next(err));
                    })
            })
    });

    app.put('/api/user/:token/accUpdate', (req, res, next) => {

        const { body } = req;
        const {
            pGames,
            pGameNickName,
            lGames,
            lGameNickNames,
            country,
            avatar
        } = body;

        UserSession.find({ _id: req.params.token })
            .exec()
            .then((userSession) => {
                const userToken = userSession[0].userId;
                User.findByIdAndUpdate(userToken)
                    .exec()
                    .then((user) => {
                        user.pGames = pGames;
                        user.pGameNickName = pGameNickName;
                        user.lGames = lGames;
                        user.lGameNickNames = lGameNickNames;
                        user.country = country;
                        user.avatar = avatar;

                        user.save()
                            .then(() => res.json(user))
                            .catch((err) => next(err));
                    })
            })
    });

    app.put('/api/users/monthly', (req, res, next) => {

        User.find()
            .exec()
            .then((user) => {
                user.forEach(function (u) {
                    let merit = u.merit;
                    let cultivation = u.cultivation;
                    let totalMerit = u.totalMerit;
                    let palace = u.palace;
                    if (cultivation == "Houtian") {
                        merit += 50;
                        totalMerit += 50;
                    }
                    else if (cultivation == "Xiantian") {
                        merit += 60;
                        totalMerit += 60;
                    }
                    else if (cultivation == "Zifu Disciple") {
                        merit += 70;
                        totalMerit += 70;
                    }
                    else if (cultivation == "Wanxiang Adept") {
                        merit += 80;
                        totalMerit += 80;
                    }
                    else if (cultivation == "Primal Daoist") {
                        merit += 90;
                        totalMerit += 90;
                    }
                    else if (cultivation == "Void Immortal") {
                        merit += 150;
                        totalMerit += 150;
                    }
                    else if (cultivation == "Empyrean God") {
                        merit += 160;
                        totalMerit += 160;
                    }
                    else if (cultivation == "True God") {
                        merit += 170;
                        totalMerit += 170;
                    }
                    else if (cultivation == "Elder God") {
                        merit += 180;
                        totalMerit += 180;
                    }
                    else if (cultivation == "World God") {
                        merit += 190;
                        totalMerit += 190;
                    }
                    else if (cultivation == "Spirit Realm") {
                        merit += 70;
                        totalMerit += 70;
                    }
                    else if (cultivation == "Origin Realm") {
                        merit += 80;
                        totalMerit += 80;
                    }
                    else if (cultivation == "Profound Realm") {
                        merit += 90;
                        totalMerit += 90;
                    }
                    else if (cultivation == "Heaven realm") {
                        merit += 100;
                        totalMerit += 100;
                    }
                    else if (cultivation == "Martial Lord") {
                        merit += 240;
                        totalMerit += 240;
                    }
                    else if (cultivation == "Martial King") {
                        merit += 250;
                        totalMerit += 250;
                    }
                    else if (cultivation == "Martial Emperor") {
                        merit += 260;
                        totalMerit += 260;
                    }
                    else if (cultivation == "Martial Ancestor") {
                        merit += 270;
                        totalMerit += 270;
                    }
                    else if (cultivation == "True Immortal") {
                        merit += 280;
                        totalMerit += 280;
                    }
                    else if (cultivation == "Heavenly immortal") {
                        merit += 290;
                        totalMerit += 290;
                    }

                    if(palace == "Scientist") {
                        merit += 100;
                        totalMerit += 100;
                    }

                    u.merit = merit;
                    u.totalMerit = totalMerit;
                    u.save()
                        .then(() => res.json(user))
                        .catch((err) => next(err));
                })
            })
    });
}