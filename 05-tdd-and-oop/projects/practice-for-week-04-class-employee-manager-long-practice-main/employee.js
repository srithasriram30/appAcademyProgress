class Employee {
    constructor(name,salary,title,manager= null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if(this.manager){
            manager.addEmployee(this);
        }
    }
calculateBonus(multiplier){
        return multiplier*this.salary;
}

}

module.exports = Employee;