const { db } = require('../../util/admin');

const getItems = async (req, res) => {
  const items = [...req.query.items];
  let itemsArr;

  const promises = items.map((uid) =>
    db
      .doc(`items/${uid}`)
      .get()
      .then((snap) => snap.data())
      .catch((err) => console.log(err))
  );
  await Promise.all(promises).then((values) => {
    itemsArr = values;
  });
  if (res) {
    res.send(itemsArr);
  } else {
    return itemsArr;
  }
};

module.exports = getItems;
