const { db } = require('../../../util/admin');

const getChatRoom = (req, res) => {
  db.doc(`chats/${req.query.uid}`)
    .get()
    .then((snap) => res.json(snap.data().messages))
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = getChatRoom;
