"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://reqres.in/api/users", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = (yield response.json());
            console.log("result is: ", JSON.stringify(result, null, 4));
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log("error message: ", error.message);
                return error.message;
            }
            else {
                console.log("unexpected error: ", error);
                return "An unexpected error occurred";
            }
        }
    });
}
getUsers();
