const users = {};

const messages = [];

function addMessage({ sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

function addUser({ username }) {
  users[username] = username;
}

function removeUser({ username }) {
  delete users[username];
}

const chat = {
  users,
  messages,
  addMessage,
  addUser,
  removeUser
};

module.exports = chat;