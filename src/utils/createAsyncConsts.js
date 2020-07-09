import { AsyncStatus } from "../constans/AsyncStatus";

export const createAsyncConst = (type, asyncStatus) => `${type}_${asyncStatus}`;

export const createAsyncConsts = type => ({
    pending: createAsyncConst(type, AsyncStatus.pending),
    resolved: createAsyncConst(type, AsyncStatus.resolved),
    rejected: createAsyncConst(type, AsyncStatus.rejected)
});