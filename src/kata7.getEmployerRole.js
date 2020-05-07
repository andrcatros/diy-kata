const getEmployerRole = (employeeName, employees) => {
    for (item in employees){
        if (employees[item].name==employeeName){
            return employees[item].role}
    }
};

  module.exports = getEmployerRole;