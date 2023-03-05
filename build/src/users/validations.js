"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userScheme = exports.signInUserScheme = void 0;
const utils_1 = require("../utils");
const credentialScheme = {
    username: utils_1.yup
        .string()
        .email('username is not valid')
        .required('username is required'),
    password: utils_1.yup
        .string()
        .password('password is not valid')
        .required('password is required'),
};
const profileScheme = {
    first_name: utils_1.yup.string().required('first_name is required'),
    last_name: utils_1.yup.string().required('last_name is required'),
};
exports.signInUserScheme = utils_1.yup.object(Object.assign({}, credentialScheme));
exports.userScheme = utils_1.yup.object(Object.assign(Object.assign({}, profileScheme), credentialScheme));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXNlcnMvdmFsaWRhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0NBQStCO0FBRS9CLE1BQU0sZ0JBQWdCLEdBQUc7SUFDdkIsUUFBUSxFQUFFLFdBQUc7U0FDVixNQUFNLEVBQUU7U0FDUixLQUFLLENBQUMsdUJBQXVCLENBQUM7U0FDOUIsUUFBUSxDQUFDLHNCQUFzQixDQUFDO0lBQ25DLFFBQVEsRUFBRSxXQUFHO1NBQ1YsTUFBTSxFQUFFO1NBQ1IsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1NBQ2pDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQztDQUNwQyxDQUFDO0FBQ0YsTUFBTSxhQUFhLEdBQUc7SUFDcEIsVUFBVSxFQUFFLFdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUM7SUFDM0QsU0FBUyxFQUFFLFdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUM7Q0FDMUQsQ0FBQztBQUNXLFFBQUEsZ0JBQWdCLEdBQUcsV0FBRyxDQUFDLE1BQU0sbUJBQ3JDLGdCQUFnQixFQUNuQixDQUFDO0FBQ1UsUUFBQSxVQUFVLEdBQUcsV0FBRyxDQUFDLE1BQU0saUNBQy9CLGFBQWEsR0FDYixnQkFBZ0IsRUFDbkIsQ0FBQyJ9