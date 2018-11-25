function exportEmployeeData(data) {
  const regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\s\-]+)$/;
  
  data.forEach(d => {
      const match = regex.exec(d);
      if (match) {
        console.log(`Name: ${match[1]}`);
        console.log(`Position: ${match[3]}`);
        console.log(`Salary: ${match[2]}`);
      }
    }
  )
}

exportEmployeeData([
  'Isacc - 1000 - CEO',
  'Ivan - 500 - Employee',
  'Peter - 500 - Employee',
]);

exportEmployeeData([
  'Jonathan - 2000 - Manager',
  'Peter- 1000- Chuck',
  'George - 1000 - Team Leader',
]);