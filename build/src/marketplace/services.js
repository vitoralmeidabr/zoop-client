"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marketplace = exports.BaseURL = void 0;
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-this-expression */
/* eslint-disable functional/no-class */
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const utils_1 = require("../utils");
/**
 * Retry Request
 */
(0, axios_retry_1.default)(axios_1.default, { retries: 3, retryDelay: axios_retry_1.default.exponentialDelay });
axios_1.default.interceptors.request.use((request) => {
    return request;
}, (error) => {
    return Promise.reject(error);
});
// Add a response interceptor
axios_1.default.interceptors.response.use((response) => {
    return response.status >= 200 && response.status < 400
        ? response
        : Promise.reject(response.data);
}, (error) => {
    return Promise.reject(error);
});
exports.BaseURL = 'https://api.zoop.ws';
/**
 * Marketplace Class
 */
class Marketplace {
    /**
     * Constructor
     */
    constructor(config) {
        this.config = config;
        /**
         * Post
         */
        this.getId = () => this.config.marketplaceId;
        const { requestTimeout, baseURL, marketplaceId, publishableKey } = config;
        this.isSandbox = config.sandbox || false;
        this.url = `/marketplaces/${marketplaceId}`;
        this.requestConfig = {
            validateStatus: () => true,
            timeout: requestTimeout || 30000,
            baseURL: baseURL || exports.BaseURL,
            auth: {
                username: publishableKey,
                password: '',
            },
        };
    }
    /**
     * Post
     */
    post(uri, body, options) {
        const url = (0, utils_1.buildURL)(this.url, uri, options);
        console.log(url, body);
        return axios_1.default.post(url, body, Object.assign({}, this.requestConfig));
    }
    /**
     * Get
     */
    get(uri, options) {
        const url = (0, utils_1.buildURL)(this.url, uri, options);
        return axios_1.default.get(url, Object.assign({}, this.requestConfig));
    }
    /**
     * Delete
     */
    delete(uri, options) {
        const url = (0, utils_1.buildURL)(this.url, uri, options);
        return axios_1.default.delete(url, Object.assign({}, this.requestConfig));
    }
    /**
     * Put
     */
    put(uri, body, options) {
        const url = (0, utils_1.buildURL)(this.url, uri, options);
        return axios_1.default.put(url, body, Object.assign({}, this.requestConfig));
    }
    /**
     * Patch
     */
    patch(uri, body, options) {
        const url = (0, utils_1.buildURL)(this.url, uri, options);
        return axios_1.default.patch(url, body, Object.assign({}, this.requestConfig));
    }
    /**
     * Singleton Instance of Marketplace
     */
    static instance(config) {
        if (!Marketplace.__instance) {
            Marketplace.__instance = new Marketplace(config);
        }
        return Marketplace.__instance;
    }
}
exports.Marketplace = Marketplace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWFya2V0cGxhY2Uvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOENBQThDO0FBQzlDLGtEQUFrRDtBQUNsRCx3Q0FBd0M7QUFDeEMsa0RBQTZDO0FBQzdDLDhEQUFxQztBQUVyQyxvQ0FBb0M7QUFJcEM7O0dBRUc7QUFDSCxJQUFBLHFCQUFVLEVBQUMsZUFBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUscUJBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDM0UsZUFBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUM1QixDQUFDLE9BQU8sRUFBRSxFQUFFO0lBQ1YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxFQUNELENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDUixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUNGLENBQUM7QUFFRiw2QkFBNkI7QUFDN0IsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUM3QixDQUFDLFFBQVEsRUFBRSxFQUFFO0lBQ1gsT0FBTyxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUc7UUFDcEQsQ0FBQyxDQUFDLFFBQVE7UUFDVixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxFQUNELENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDUixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUNGLENBQUM7QUFDVyxRQUFBLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQztBQUM3Qzs7R0FFRztBQUNILE1BQWEsV0FBVztJQVF0Qjs7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