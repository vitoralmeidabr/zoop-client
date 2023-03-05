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
    (0, utils_1.reqLog)(request);
    return request;
}, (error) => {
    return Promise.reject(error);
});
// Add a response interceptor
axios_1.default.interceptors.response.use((response) => {
    if (response.status >= 200 && response.status < 400)
        (0, utils_1.resLog)(response);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWFya2V0cGxhY2Uvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOENBQThDO0FBQzlDLGtEQUFrRDtBQUNsRCx3Q0FBd0M7QUFDeEMsa0RBQTZDO0FBQzdDLDhEQUFxQztBQUVyQyxvQ0FBb0Q7QUFJcEQ7O0dBRUc7QUFDSCxJQUFBLHFCQUFVLEVBQUMsZUFBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUscUJBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDM0UsZUFBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUM1QixDQUFDLE9BQU8sRUFBRSxFQUFFO0lBQ1YsSUFBQSxjQUFNLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEIsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxFQUNELENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDUixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUNGLENBQUM7QUFFRiw2QkFBNkI7QUFDN0IsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUM3QixDQUFDLFFBQVEsRUFBRSxFQUFFO0lBQ1gsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUc7UUFBRSxJQUFBLGNBQU0sRUFBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxPQUFPLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRztRQUNwRCxDQUFDLENBQUMsUUFBUTtRQUNWLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDLEVBQ0QsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNSLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQ0YsQ0FBQztBQUNXLFFBQUEsT0FBTyxHQUFHLHFCQUFxQixDQUFDO0FBQzdDOztHQUVHO0FBQ0gsTUFBYSxXQUFXO0lBUXRCOztPQUVHO0lBQ0gsWUFBcUIsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7UUFrQnBDOztXQUVHO1FBQ0gsVUFBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBcEJ0QyxNQUFNLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsYUFBYSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNuQixjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtZQUMxQixPQUFPLEVBQUUsY0FBYyxJQUFJLEtBQUs7WUFDaEMsT0FBTyxFQUFFLE9BQU8sSUFBSSxlQUFPO1lBQzNCLElBQUksRUFBRTtnQkFDSixRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLEVBQUU7YUFDYjtTQUNGLENBQUM7SUFDSixDQUFDO0lBU0Q7O09BRUc7SUFDSCxJQUFJLENBQ0YsR0FBVyxFQUNYLElBQVcsRUFDWCxPQUFrQjtRQUVsQixNQUFNLEdBQUcsR0FBRyxJQUFBLGdCQUFRLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0MsT0FBTyxlQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLG9CQUN0QixJQUFJLENBQUMsYUFBYSxFQUNyQixDQUFDO0lBQ0wsQ0FBQztJQUNEOztPQUVHO0lBQ0gsR0FBRyxDQUNELEdBQVcsRUFDWCxPQUFrQjtRQUVsQixNQUFNLEdBQUcsR0FBRyxJQUFBLGdCQUFRLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0MsT0FBTyxlQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsb0JBQ2YsSUFBSSxDQUFDLGFBQWEsRUFDckIsQ0FBQztJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNILE1BQU0sQ0FDSixHQUFXLEVBQ1gsT0FBa0I7UUFFbEIsTUFBTSxHQUFHLEdBQUcsSUFBQSxnQkFBUSxFQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sZUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLG9CQUNsQixJQUFJLENBQUMsYUFBYSxFQUNyQixDQUFDO0lBQ0wsQ0FBQztJQUNEOztPQUVHO0lBQ0gsR0FBRyxDQUNELEdBQVcsRUFDWCxJQUFXLEVBQ1gsT0FBa0I7UUFFbEIsTUFBTSxHQUFHLEdBQUcsSUFBQSxnQkFBUSxFQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxvQkFDckIsSUFBSSxDQUFDLGFBQWEsRUFDckIsQ0FBQztJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNILEtBQUssQ0FDSCxHQUFXLEVBQ1gsSUFBVyxFQUNYLE9BQWtCO1FBRWxCLE1BQU0sR0FBRyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QyxPQUFPLGVBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksb0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQWU7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDM0IsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsRDtRQUNELE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7QUF6R0Qsa0NBeUdDIn0=