const Employee = require('./employee');
class Manager extends Employee{
    constructor(ame,salary,title,manager= null, employees =[]) {
        super(ame,salary,title,manager);
        this.employees = employees;
    }

    addEmployee(employee){
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        let empSalary = this._totalSubSalary();
        return (this.salary +  empSalary)*multiplier;
    }

    _totalSubSalary(){
        let sum = 0;

        for(let employee of this.employees){
            if(employee instanceof Manager){
                sum += employee.salary;
                sum += employee._totalSubSalary()
            } else {
                sum += employee.salary;
            }
        }

        return sum;
    }
}

module.exports = Manager