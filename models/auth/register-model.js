var connection = require('./../../db');

connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
  if (error) {
    res.json({
      status: false,
      message: 'there are some error with query'
    })
  } else {
    res.json({
      status: true,
      data: results,
      message: 'user registered sucessfully'
    })
  }
});