const { db } = require('../../../util/admin');

const getAllChatRooms = async (req, res) => {
  const chatRooms = [...req.query.chatRooms];
  let chatRoomsArr;

  const promises = await chatRooms.map(async (chatId) =>
    db
      .doc(`chats/${chatId}`)
      .get()
      .then((snap) => {
        console.log(snap.data());
        const chatListData = {
          buyerName: snap.data().buyer,
          buyerPhoto: snap.data().buyerPhoto,
          lastMessage:
            snap.data().messages[snap.data().messages.length - 1].message,
          timestamp:
            // eslint-disable-next-line no-underscore-dangle
            snap.data().messages[snap.data().messages.length - 1].timestamp
              ._seconds,
        };
        return chatListData;
      })
      .catch((err) => console.log(err))
  );
  await Promise.all(promises).then((values) => {
    chatRoomsArr = values;
  });
  res.send(chatRoomsArr);
};

module.exports = getAllChatRooms;
