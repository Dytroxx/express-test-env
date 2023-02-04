const fakeUsers = (size = 10) => {
  return Array(size).fill().map((item, index) => {
    return {
      id: index,
      name: `name-${++index}`
    }
  })
}

function getUsers() {
  return fakeUsers();
}

function getUserById(userId) {
    const id = parseFloat(userId, 10);
    return fakeUsers().filter(user => user.id === id);
}

// Create unit test => jest

function deleteUserById(userId) {
  const id = parseInt(userId, 10);
  
  return fakeUsers().filter(user => user.id !== id);
}

module.exports = {
  getUsers,
  getUserById,
  deleteUserById
}
