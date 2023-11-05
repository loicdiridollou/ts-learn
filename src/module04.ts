// Enums

enum ContractType {
  Permanent = 1,
  Temp,
  Apprentice,
}

let employeeStatus: ContractType = ContractType.Temp;
console.log(employeeStatus);
console.log(ContractType[employeeStatus]);
