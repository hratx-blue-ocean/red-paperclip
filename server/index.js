const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4040;

app.use(express.static('client/dist/feed'));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
