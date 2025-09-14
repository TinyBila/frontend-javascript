interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London'
};

const studentsList: Student[] = [student1, student2];

function createTable(): HTMLTableElement {
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '60%';
  table.style.maxWidth = '700px';
  table.style.marginTop = '1rem';

  // Header
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  const headerCell1 = document.createElement('th');
  headerCell1.textContent = 'First Name';
  const headerCell2 = document.createElement('th');
  headerCell2.textContent = 'Location';

  [headerCell1, headerCell2].forEach(th => {
    th.style.border = '1px solid #ddd';
    th.style.padding = '8px';
    th.style.backgroundColor = '#f4f4f4';
    th.style.textAlign = 'left';
    headerRow.appendChild(th);
  });

  return table;
}

function appendStudentsToTable(table: HTMLTableElement, students: Student[]): void {
  const tbody = table.createTBody();
  students.forEach((s: Student) => {
    const row = tbody.insertRow();
    const cellFirst = row.insertCell();
    const cellLocation = row.insertCell();

    cellFirst.textContent = s.firstName;
    cellLocation.textContent = s.location;

    [cellFirst, cellLocation].forEach(cell => {
      cell.style.border = '1px solid #ddd';
      cell.style.padding = '8px';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const table = createTable();
  appendStudentsToTable(table, studentsList);
  document.body.appendChild(table);
});
