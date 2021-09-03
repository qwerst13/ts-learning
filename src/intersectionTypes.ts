//Intersection Types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type  ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
    name: 'Bob',
    privileges: ['create-server'],
    startDate: new Date()
}

/* Mostly this code id same that one with interfaces */
interface AdminInterface {
    name: string;
    privileges: string[];
}

interface EmployeeInterface {
    name: string;
    startDate: Date;
}

interface ElevatedEmployeeInterface extends Admin, Employee {

}

const employee2: ElevatedEmployeeInterface = {
    name: 'Bob',
    privileges: ['create-server'],
    startDate: new Date()
}
