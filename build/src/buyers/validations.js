"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyerScheme = void 0;
const common_1 = require("../common");
const utils_1 = require("../utils");
exports.buyerScheme = utils_1.yup.object(Object.assign(Object.assign({}, common_1.ownerScheme), { address: utils_1.yup.object(Object.assign({}, common_1.addressScheme)) }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnV5ZXJzL3ZhbGlkYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF1RDtBQUN2RCxvQ0FBK0I7QUFFbEIsUUFBQSxXQUFXLEdBQUcsV0FBRyxDQUFDLE1BQU0saUNBQ2hDLG9CQUFXLEtBQ2QsT0FBTyxFQUFFLFdBQUcsQ0FBQyxNQUFNLG1CQUNkLHNCQUFhLEVBQ2hCLElBQ0YsQ0FBQyJ9