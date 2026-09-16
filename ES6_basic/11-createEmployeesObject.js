export default function createEmployeesObject(departmentName, employees) {\
    const emp = Object.create(null, {
        departmentName:employees
    });
    return emp;
}

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));
