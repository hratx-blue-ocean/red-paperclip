const { db } = require('../../../util/admin');

const addChatMessage = (req, res) => {
  const newMessage = {
    message: req.body.message,
    userName: req.body.userName,
    userPhoto: req.body.userPhoto,
    timestamp: new Date().toISOString(),
  };

  db.doc(`chats/${req.body.chatRoomId}`)
    .get()
    .then((snap) => {
      const messagesArr = snap.data().messages;
      messagesArr.push(newMessage);
      db.doc(`chats/${req.body.chatRoomId}`)
        .update({ messages: messagesArr })
        .then(() => res.end())
        .catch((err) => res.status(500).json({ error: err.code }));
    })
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = addChatMessage;
