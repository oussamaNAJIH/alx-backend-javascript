export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }

    if (Array.isArray(students)) {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw new Error('Every student must be a string');
        }
      }
      this._students = students;
    } else {
      throw new Error('Students property must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students)) {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw new Error('Every student must be a string');
        }
      }
      this._students = students;
    } else {
      throw new Error('Students property must be an array of strings');
    }
  }
}
