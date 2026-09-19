export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      while (departmentIndex < departments.length) {
        const currentDepartment = report.allEmployees[departments[departmentIndex]];

        if (employeeIndex < currentDepartment.length) {
          const employee = currentDepartment[employeeIndex];
          employeeIndex += 1;
          return { value: employee, done: false };
        }

        departmentIndex += 1;
        employeeIndex = 0;
      }

      return { value: undefined, done: true };
    },
  };
}
