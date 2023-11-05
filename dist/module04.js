"use strict";
// Enums
var ContractType;
(function (ContractType) {
    ContractType[ContractType["Permanent"] = 1] = "Permanent";
    ContractType[ContractType["Temp"] = 2] = "Temp";
    ContractType[ContractType["Apprentice"] = 3] = "Apprentice";
})(ContractType || (ContractType = {}));
let employeeStatus = ContractType.Temp;
console.log(employeeStatus);
console.log(ContractType[employeeStatus]);
