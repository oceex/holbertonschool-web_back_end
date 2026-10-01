import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);

      const lines = Object.keys(students)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .map((field) => {
          const names = students[field];
          return `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        });

      res
        .status(200)
        .type('text/plain')
        .send(['This is the list of our students', ...lines].join('\n'));
    } catch (err) {
      res.status(500).type('text/plain').send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).type('text/plain').send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const names = students[major] || [];
      res.status(200).type('text/plain').send(`List: ${names.join(', ')}`);
    } catch (err) {
      res.status(500).type('text/plain').send('Cannot load the database');
    }
  }
}

export default StudentsController;
