const firebase = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
require('dotenv').config();
const firebaseConfig = require('../../util/firebaseConfig');
const { validateLoginData } = require('../../util/validators');

firebase.initializeApp(firebaseConfig);

const login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  const { valid, errors } = validateLoginData(user);

  if (!valid) return res.status(400).json(errors);

  const auth = getAuth();

  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((data) => data.user.getIdToken())
    .then((token) => res.json({ token }))
    .catch((err) => {
      console.error(err);
      return res.status(403).json({ general: 'wrong credentials' });
    });
};

module.exports = login;
