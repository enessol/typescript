import { CSVWriter } from "./index";

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

const employeeWriter = new CSVWriter<Employee>([
  "id",
  "name",
  "role",
  "salary",
]);

employeeWriter.addRows([
  { id: 1, name: "Enes", role: "CEO", salary: 1140000 },
  { id: 2, name: "Mete", role: "CFO", salary: 140000 },
  { id: 3, name: "Hola", role: "CTO", salary: 130000 },
]);

employeeWriter.save("data/employees.csv");
