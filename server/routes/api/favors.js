const Favor = require("../../models/Favor");

module.exports = (app) => {

    app.get('/api/favors', (req, res, next) => {
        Favor.find()
          .exec()
          .then((favor) => res.json(favor))
          .catch((err) => next(err));
      });

      app.post('/api/favors', function (req, res, next) {
        const { body } = req;
        const {
            favorLevel,
            environment,
            title,
            description,
            timePeriod,
            merit
        } = body;

        const newFavor = new Favor();
        newFavor.favorLevel = favorLevel;
        newFavor.environment = environment;
        newFavor.title = title;
        newFavor.description = description;
        newFavor.timePeriod = timePeriod;
        newFavor.merit = merit;

        newFavor.save()
        .then(() => res.json(newFavor))
        .catch((err) => next(err));
    });
}