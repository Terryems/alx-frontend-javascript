task_0/jsinteriface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const firstStudent : Student ={
    firstName: 'Simon',
    lastName: 'ems',
    age: 30,
    location: 'Nigeria'
}

const secondStudent : Student = {
    firstName: 'Emma',
    lastName: 'Nuel',
    age: 34,
    location: 'Nigeria'
}

const studentsList: Student[] = [firstStudent, secondStudent];


function renderTable() {
    const table = document.createElement('table');
  
    studentsList.forEach((student) => {
      const row = document.createElement('tr');
      const firstNameCell = document.createElement('td');
      const locationCell = document.createElement('td');
  
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
  
      table.appendChild(row);
    });
    document.body.appendChild(table);
}

renderTable();/
