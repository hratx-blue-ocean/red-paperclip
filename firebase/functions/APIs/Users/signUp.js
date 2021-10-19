const firebase = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
const firebaseConfig = require('../../../util/firebaseConfig');
const { db } = require('../../../util/admin');
const { validateSignUpData } = require('../../../util/validators');

firebase.initializeApp(firebaseConfig);

const signUp = (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    zip: req.body.zip,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    createdAt: new Date().toISOString(),
    availableItem: 'store the id of the avaiable item',
    tradeHistory: 'subcollection of trades',
    watchedItems: 'array of item ids',
  };

  const { valid, errors } = validateSignUpData(newUser);

  if (!valid) return res.status(400).json(errors);

  let token;
  let userId;

  db.doc(`/users/${newUser.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res
          .status(400)
          .json({ username: 'this username already exists' });
      }
      const auth = getAuth();
      return createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idtoken) => {
      token = idtoken;
      const userCredentials = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        username: newUser.username,
        phoneNumber: newUser.phoneNumber,
        country: newUser.country,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId,
      };
      return db.doc(`/users/${newUser.username}`).set(userCredentials);
    })
    .then(() => res.status(201).json({ token }))
    .catch((err) => {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        return res.status(400).json({ email: 'Email already in use' });
      }
      return res.status(500).json({ general: 'Something went wrong' });
    });
};

module.exports = signUp;
