const { db } = require('../../util/admin');

const getAllChatRooms = async (req, res) => {
  const chatRooms = [...req.query.chatRooms];
  let chatRoomsArr;

  const promises = await chatRooms.map(async (chatId) =>
    db
      .doc(`chats/${chatId}`)
      .get()
      .then((snap) => {
        const chatListData = {
          chatId,
          trader1: snap.data().trader1,
          trader1Photo: snap.data().trader1Photo,
          trader2: snap.data().trader2,
          trader2Photo: snap.data().trader2Photo,
          trader1ItemPhoto: snap.data().trader1ItemPhoto,
          trader2ItemPhoto: snap.data().trader2ItemPhoto,
          lastMessage:
            snap.data().messages[snap.data().messages.length - 1].message,
          timestamp: Date.parse(
            snap.data().messages[snap.data().messages.length - 1].timestamp
          ),
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
