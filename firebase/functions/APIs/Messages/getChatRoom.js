const { db } = require('../../../util/admin');

const getChatRoom = (req, res) => {
  db.doc(`chats/${req.query.uid}`)
    .get()
    .then((snap) => {
      const chatListData = {
        chatId: snap.id,
        trader1: snap.data().trader1,
        trader1Photo: snap.data().trader1Photo,
        trader2: snap.data().trader2,
        trader2Photo: snap.data().trader2Photo,
        trader1ItemPhoto: snap.data().trader1ItemPhoto,
        trader2ItemPhoto: snap.data().trader2ItemPhoto,
        messages: snap.data().messages,
      };
      res.json(chatListData);
    })
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = getChatRoom;
