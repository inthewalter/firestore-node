const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sprint-d5.firebaseio.com',
});

module.exports = firestore = admin.firestore();
