const { Pool } = require('pg');

var myArgs = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

  pool.query(`
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name = '${myArgs[0]}'
  LIMIT ${myArgs[1]};
  `)
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));


