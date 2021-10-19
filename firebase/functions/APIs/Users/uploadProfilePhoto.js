const BusBoy = require('busboy');
const path = require('path');
const os = require('os');
const fs = require('fs');
const { db, admin } = require('../../../util/admin');
require('dotenv').config();
const firebaseConfig = require('../../../util/firebaseConfig');

const deleteImage = (imageName) => {
  const bucket = admin.storage().bucket();
  const imagePath = `${imageName}`;
  return (
    bucket
      .file(imagePath)
      .delete()
      .then(() => {})
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {})
  );
};

const uploadProfilePhoto = (req, res) => {
  const busboy = new BusBoy({ headers: req.headers });

  let imageFileName;
  let imageToBeUploaded = {};

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    if (mimetype !== 'image/png' && mimetype !== 'image/jpeg') {
      return res.status(400).json({ error: 'Wrong file type submited' });
    }
    const imageExtension = filename.split('.')[filename.split('.').length - 1];
    imageFileName = `${req.user.email}.${imageExtension}`;
    const filePath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filePath, mimetype };
    file.pipe(fs.createWriteStream(filePath));
  });
  deleteImage(imageFileName);
  busboy.on('finish', () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filePath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype,
          },
        },
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`/users/${req.user.email}`).update({
          imageUrl,
        });
      })
      .then(() => res.json({ message: 'Image uploaded successfully' }))
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ error: error.code });
      });
  });
  busboy.end(req.rawBody);
};

module.exports = uploadProfilePhoto;
