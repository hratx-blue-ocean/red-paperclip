const { db } = require('../../../util/admin');

const changeActiveStatus = (req, res) => {
  db.doc(`items/${req.query.uid}`)
    .update({ active: req.query.status === 'true' })
    .then(() => res.end())
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = changeActiveStatus;
