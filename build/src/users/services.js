"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUser = exports.deletePermissions = exports.updateProfile = exports.getPermissions = exports.createPermissions = exports.forgotPassword = exports.createNewPassword = exports.getUsers = exports.getUser = exports.createUser = void 0;
const validations_1 = require("./validations");
/**
 * Criar usuário Dashboard e Minha Conta
 */
const createUser = (marketplace, body, invite) => {
    validations_1.userScheme.validateSync(body);
    return marketplace.post(`/users?${invite || false}`, body);
};
exports.createUser = createUser;
/**
 * Listar usuário do Dashboard e Minha Conta pelo identificador
 */
const getUser = (marketplace, userId) => {
    return marketplace.get(`/users/${userId}`);
};
exports.getUser = getUser;
/**
 * Listar usuários do Dashboard e Minha Conta
 */
const getUsers = (marketplace) => {
    return marketplace.get(`/users`);
};
exports.getUsers = getUsers;
/**
 * Criar nova senha para usuário Dashboard e Minha Conta
 */
const createNewPassword = (marketplace, userId, body) => {
    return marketplace.post(`/users/${userId}/password`, body);
};
exports.createNewPassword = createNewPassword;
/**
 * Criar nova senha para usuário Dashboard e Minha Conta
 */
const forgotPassword = (marketplace, username, application) => {
    return marketplace.post(`/users/recover-access?${application}`, {
        username,
    });
};
exports.forgotPassword = forgotPassword;
/**
 * Criar permissão para usuário do Dashboard e Minha Conta
 */
const createPermissions = (marketplace, userId, body) => {
    return marketplace.post(`/users/${userId}/permissions`, body);
};
exports.createPermissions = createPermissions;
/**
 * Listar permissão para usuário do Dashboard e Minha Conta pelo identificador
 */
const getPermissions = (marketplace, userId) => {
    return marketplace.get(`/users/${userId}/permissions`);
};
exports.getPermissions = getPermissions;
/**
 * Alterar nome e sobrenome de usuário do Dashboard e Minha Conta
 */
const updateProfile = (marketplace, userId, body) => {
    return marketplace.patch(`/users/${userId}`, body);
};
exports.updateProfile = updateProfile;
/**
 * Deletar permissão de usuário do Dashboard e Minha Conta
 */
const deletePermissions = (marketplace, userId) => {
    return marketplace.delete(`/users/${userId}`);
};
exports.deletePermissions = deletePermissions;
/**
 * SignIn
 */
const signInUser = (marketplace, body) => {
    validations_1.signInUserScheme.validateSync(body);
    return marketplace.post(`/users/signin`, body, {
        absolute: true,
    });
};
exports.signInUser = signInUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXNlcnMvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBVUEsK0NBQTZEO0FBRTdEOztHQUVHO0FBQ0ksTUFBTSxVQUFVLEdBQUcsQ0FDeEIsV0FBeUIsRUFDekIsSUFBVyxFQUNYLE1BQWdCLEVBQ2hCLEVBQUU7SUFDRix3QkFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQWUsVUFBVSxNQUFNLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0UsQ0FBQyxDQUFDO0FBUFcsUUFBQSxVQUFVLGNBT3JCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLE9BQU8sR0FBRyxDQUFDLFdBQXlCLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDbkUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFRLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUM7QUFGVyxRQUFBLE9BQU8sV0FFbEI7QUFDRjs7R0FFRztBQUNJLE1BQU0sUUFBUSxHQUFHLENBQUMsV0FBeUIsRUFBRSxFQUFFO0lBQ3BELE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBbUIsUUFBUSxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxRQUFRLFlBRW5CO0FBRUY7O0dBRUc7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQy9CLFdBQXlCLEVBQ3pCLE1BQWMsRUFDZCxJQUFlLEVBQ2YsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FDckIsVUFBVSxNQUFNLFdBQVcsRUFDM0IsSUFBSSxDQUNMLENBQUM7QUFDSixDQUFDLENBQUM7QUFUVyxRQUFBLGlCQUFpQixxQkFTNUI7QUFFRjs7R0FFRztBQUNJLE1BQU0sY0FBYyxHQUFHLENBQzVCLFdBQXlCLEVBQ3pCLFFBQWdCLEVBQ2hCLFdBQTZCLEVBQzdCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQ3JCLHlCQUF5QixXQUFXLEVBQUUsRUFDdEM7UUFDRSxRQUFRO0tBQ1QsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBWFcsUUFBQSxjQUFjLGtCQVd6QjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxpQkFBaUIsR0FBRyxDQUMvQixXQUF5QixFQUN6QixNQUFjLEVBQ2QsSUFBNkIsRUFDN0IsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FDckIsVUFBVSxNQUFNLGNBQWMsRUFDOUIsSUFBSSxDQUNMLENBQUM7QUFDSixDQUFDLENBQUM7QUFUVyxRQUFBLGlCQUFpQixxQkFTNUI7QUFFRjs7R0FFRztBQUNJLE1BQU0sY0FBYyxHQUFHLENBQUMsV0FBeUIsRUFBRSxNQUFjLEVBQUUsRUFBRTtJQUMxRSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQVUsVUFBVSxNQUFNLGNBQWMsQ0FBQyxDQUFDO0FBQ2xFLENBQUMsQ0FBQztBQUZXLFFBQUEsY0FBYyxrQkFFekI7QUFDRjs7R0FFRztBQUNJLE1BQU0sYUFBYSxHQUFHLENBQzNCLFdBQXlCLEVBQ3pCLE1BQWMsRUFDZCxJQUFjLEVBQ2QsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBb0IsVUFBVSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RSxDQUFDLENBQUM7QUFOVyxRQUFBLGFBQWEsaUJBTXhCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQy9CLFdBQXlCLEVBQ3pCLE1BQWMsRUFDZCxFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFVLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUM7QUFMVyxRQUFBLGlCQUFpQixxQkFLNUI7QUFDRjs7R0FFRztBQUNJLE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBeUIsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDMUUsOEJBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBaUIsZUFBZSxFQUFFLElBQUksRUFBRTtRQUM3RCxRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUxXLFFBQUEsVUFBVSxjQUtyQiJ9