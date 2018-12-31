function seedStudents() {
  const baseUrl = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students';
  const Authorization = 'Basic ' + btoa('guest:guest');
  
  const loadStudents = () => {
    $.get({
        url: baseUrl,
        headers: {Authorization},
        contentType: "application/json; charset=utf-8",
      })
      .then(displayData)
      .catch(err => console.error(err));
    
    function displayData(students) {
      students = students.sort((a, b) => a.ID - b.ID);
      students.map(student => {
        $('#results').append( /*html*/ $(`
          <tr>
              <td>${student.ID}</td>
              <td>${student.FirstName}</td>
              <td>${student.LastName}</td>
              <td>${student.FacultyNumber}</td>
              <td>${student.Grade}</td>
          </tr>`));
      });
    }
  };
  
  const addStudent = () => {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const facultyNumber = $('#facultyNumber').val();
    const grade = $('#grade').val();
    
    if (firstName && lastName && facultyNumber && grade) {
      $.post({
        url: baseUrl,
        contentType: "application/json; charset=utf-8",
        headers: {Authorization},
        data: JSON.stringify({firstName, lastName, facultyNumber, grade})
      }).then(loadStudents());
      
      $('input').each((i, element) => $(element).val(''));
    }
  };
  
  $('#load').on('click', loadStudents);
  $('#add').on('click', addStudent);
}