import Users from './users.js';
let users = Users;
class User {
    static count = 0
    constructor(id, mail ,pass) {
        this.id = id;
        this.mail = mail;
        this.pass = pass;
    }
    static inc () {
        this.count ++;
    }
}
class Employee extends User {
    constructor(id, mail, pass, salary, status) {
        super(id, mail, pass);
        this._salary = salary;
        this._status = status;
    }
    set status (status) {
        this._status = status;
    }
    get status () {
        return this._status
    }
    set salary (salary) {
        this._salary = salary;
    }
    get salary () {
        return this._salary
    }
}

class Client extends User{
    constructor(id, mail ,pass, employee) {
        super(id, mail, pass);
        this._employee = employee;
    }
    set employee (id) {
        this._employee = id;
    }
    get employee () {
        return this._employee;
    }
}

const generateEmployees = () => {
    const employees = [];
    for (let i = 0; i<10 ; i++) {
        const randomIndex = Math.round(Math.random() * (users.length - 1));
        const currentUser = users[randomIndex];
        employees.push(new Employee(currentUser.id, currentUser.email, currentUser.password, currentUser.salary, currentUser.status));
        users = users.filter(user => user.id !== currentUser.id);
    }
    return employees;
}
const employees = generateEmployees();
const generateClients = () => {
    const clients = [];
    for (let i = 0; i<20 ; i++) {
        const randomIndex = Math.round(Math.random() * (users.length - 1));
        const randomEmployee = Math.round(Math.random() * (employees.length - 1));
        const currentUser = users[randomIndex];
        const currentEmployee = employees[randomEmployee];
        clients.push(new Client(currentUser.id, currentUser.email, currentUser.password, currentEmployee.id));
        users = users.filter(user => user.id !== currentUser.id);
    }
    return clients;
}

const clients = generateClients();
console.log("Employees:", employees);
console.log("Clients:", clients);

const search = searchStr => {
    return clients.filter(client => Object.values(client).some(val => {
        val += '';
        return val.includes(searchStr);
    }))
}
const searchVal = prompt('enter search value');
const filtered  = search(searchVal);
console.log(filtered);
