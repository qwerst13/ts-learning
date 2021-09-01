class Department {
  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe() {
    console.log(`Department ${this.id}: ${this.name}`)
  }
}

const department = new Department('a1', 'accounting');

department.describe();
department.name = 'kd';
