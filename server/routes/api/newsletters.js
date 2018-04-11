const Newsletter = require("../../models/Newsletter");

module.exports = (app) => {

    app.get('/api/newsletters', (req, res, next) => {
        Newsletter.find()
          .exec()
          .then((newsletter) => res.json(newsletter))
          .catch((err) => next(err));
      });

      app.post('/api/newsletters', function (req, res, next) {
        const { body } = req;
        const {
            title ="this is title",
            description =  "this is description",
        } = body;

        const newNewsletter = new Newsletter();
        newNewsletter.title = title;
        newNewsletter.description = description;

        newNewsletter.save()
        .then(() => res.json(newNewsletter))
        .catch((err) => next(err));
    });
}