const User = require('../users/users-model.js');

function checkPayload(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'username and password required' });
  } else {
  next();
  }
}

async function checkUsernameUnique(req, res, next) {
  try {
    const rows = await User.findBy({ username: req.body.username });
    if (!rows) {
      next();
    } else {
      return res.status(409).json({ message: 'username taken' });
    }
  } catch (err) {
    next(err);
  }
}

async function checkLoginPayload(req, res, next) {
  const user = req.body;
  try {
    const rows = await User.findBy({ username: user.username });
    if (rows) {
      req.userData = rows;
      next();
    } else if (!rows || user.password !== rows.password) {
      return res.status(404).json({ message: 'invalid credentials' });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  checkPayload,
  checkUsernameUnique,
  checkLoginPayload,
};