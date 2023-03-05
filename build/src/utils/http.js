"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resLog = exports.reqLog = exports.buildURL = void 0;
const buildURL = (url, uri, options) => {
    // Check version API
    const version = (options === null || options === void 0 ? void 0 : options.version) != undefined && options.version > 0
        ? `/v${options.version}`
        : '/v1';
    return !(options === null || options === void 0 ? void 0 : options.absolute) ? `${version}${url}${uri}` : `${version}${uri}`;
};
exports.buildURL = buildURL;
const reqLog = (request) => console.log('Starting Request', JSON.stringify({
    method: request.method,
    params: request.params,
    url: request.url,
    data: request.data,
}, null, 2));
exports.reqLog = reqLog;
const resLog = (response) => console.log('Starting Response:', JSON.stringify({
    status: response.status,
    message: response.statusText,
    data: response.data,
}, null, 2));
exports.resLog = resLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9odHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdPLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxPQUFrQixFQUFFLEVBQUU7SUFDdkUsb0JBQW9CO0lBQ3BCLE1BQU0sT0FBTyxHQUNYLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE9BQU8sS0FBSSxTQUFTLElBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFDeEIsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLE9BQU8sQ0FBQyxDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxRQUFRLENBQUEsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUM1RSxDQUFDLENBQUM7QUFQVyxRQUFBLFFBQVEsWUFPbkI7QUFFSyxNQUFNLE1BQU0sR0FBRyxDQUFDLE9BQVksRUFBRSxFQUFFLENBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQ1Qsa0JBQWtCLEVBQ2xCLElBQUksQ0FBQyxTQUFTLENBQ1o7SUFDRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07SUFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO0lBQ3RCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztJQUNoQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7Q0FDbkIsRUFDRCxJQUFJLEVBQ0osQ0FBQyxDQUNGLENBQ0YsQ0FBQztBQWJTLFFBQUEsTUFBTSxVQWFmO0FBQ0csTUFBTSxNQUFNLEdBQUcsQ0FBQyxRQUFhLEVBQUUsRUFBRSxDQUN0QyxPQUFPLENBQUMsR0FBRyxDQUNULG9CQUFvQixFQUNwQixJQUFJLENBQUMsU0FBUyxDQUNaO0lBQ0UsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNO0lBQ3ZCLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVTtJQUM1QixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7Q0FDcEIsRUFDRCxJQUFJLEVBQ0osQ0FBQyxDQUNGLENBQ0YsQ0FBQztBQVpTLFFBQUEsTUFBTSxVQVlmIn0=