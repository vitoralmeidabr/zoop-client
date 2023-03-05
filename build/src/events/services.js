"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replayEvent = exports.replayEvents = exports.getEvents = void 0;
const qs_1 = __importDefault(require("qs"));
/**
 * Listar eventos por marketplace
 */
const getEvents = (marketplace, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/events?${queryString}`);
};
exports.getEvents = getEvents;
/**
 * Redisparo de eventos
 */
const replayEvents = (marketplace, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/events/actions/replay?${queryString}`);
};
exports.replayEvents = replayEvents;
/**
 * Redisparo de eventos
 */
const replayEvent = (marketplace, eventId) => {
    return marketplace.get(`/events/${eventId}/actions/replay`);
};
exports.replayEvent = replayEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnRzL3NlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQjtBQUtwQjs7R0FFRztBQUNJLE1BQU0sU0FBUyxHQUFHLENBQUMsV0FBeUIsRUFBRSxLQUFjLEVBQUUsRUFBRTtJQUNyRSxNQUFNLFdBQVcsR0FBRyxZQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0FBSFcsUUFBQSxTQUFTLGFBR3BCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLFlBQVksR0FBRyxDQUFDLFdBQXlCLEVBQUUsS0FBYyxFQUFFLEVBQUU7SUFDeEUsTUFBTSxXQUFXLEdBQUcsWUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0FBSFcsUUFBQSxZQUFZLGdCQUd2QjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxXQUFXLEdBQUcsQ0FBQyxXQUF5QixFQUFFLE9BQWUsRUFBRSxFQUFFO0lBQ3hFLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLE9BQU8saUJBQWlCLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFGVyxRQUFBLFdBQVcsZUFFdEIifQ==