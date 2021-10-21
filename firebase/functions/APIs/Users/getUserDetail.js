const { db } = require('../../../util/admin');

const getUserDetail = (req, res) => {
  const userData = {};
  db.doc(`/users/${req.user.email}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.userCredentials = doc.data();
        return res.json(userData.userCredentials);
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

module.exports = getUserDetail;
