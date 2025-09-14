/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

console.log('const obj =', row);

// call insertRow and capture returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// create updated row (add age)
const updatedRow: RowElement = {
  ...row,
  age: 23
};

// update and delete
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
