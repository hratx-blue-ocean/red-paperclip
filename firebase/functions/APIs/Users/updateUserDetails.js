const { db } = require('../../../util/admin');

const updateUserDetails = (req, res) => {
  const document = db.collection('users').doc(`${req.user.email}`);
  document
    .update(req.body)
    .then(() => {
      res.json({ message: 'Upload successfully' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: 'Cannot update the value' });
    });
};

module.exports = updateUserDetails;
