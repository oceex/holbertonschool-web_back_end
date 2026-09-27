const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    const logs = [];
    const originalLog = console.log;
    console.log = (...args) => {
      logs.push(args.join(' '));
    };

    countStudents('database.csv')
      .then(() => {
        console.log = originalLog;
        res.end(logs.join('\n'));
      })
      .catch((err) => {
        console.log = originalLog;
        res.end(err.message);
      });
  } else {
    res.end('Not found');
  }
});

app.listen(port);

module.exports = app;
