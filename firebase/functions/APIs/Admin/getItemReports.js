const { db } = require('../../util/admin');
const getItems = require('../Items/getItems');

const getItemReports = (req, res) => {
  db.doc(`admin/items`)
    .get()
    .then((snap) => Object.keys(snap.data().reported))
    .then((items) => {
      getItems({ query: { items } })
        .then((itemsArr) => res.send(itemsArr))
        .catch((err) => {
          console.log('oops', err);
        });
    })
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = getItemReports;
