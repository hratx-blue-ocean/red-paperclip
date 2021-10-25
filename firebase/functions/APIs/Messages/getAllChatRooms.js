const { db } = require('../../../util/admin');

const getAllChatRooms = async (req, res) => {
  const chatRooms = [...req.query.chatRooms];
  let chatRoomsArr;

  const promises = await chatRooms.map(async (chatId) =>
    db
      .doc(`chats/${chatId}`)
      .get()
      .then((snap) => {
        const chatListData = {
          trader1: snap.data().trader1,
          trader1Photo: snap.data().trader1Photo,
          trader2: snap.data().trader2,
          trader2Photo: snap.data().trader2Photo,
          trader1ItemPhoto: snap.data().trader1ItemPhoto,
          trader2ItemPhoto: snap.data().trader2ItemPhoto,
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
