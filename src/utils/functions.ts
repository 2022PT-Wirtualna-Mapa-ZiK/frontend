import { IServerResponse } from '../models/responses/serverResponse';

export const getPromisedData = async (
    func: Promise<IServerResponse<unknown>>
) => {
    const data = await func;
    const dataPre = JSON.stringify(data.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let dataReady: any[] = [];
    dataReady = JSON.parse(dataPre);
    return dataReady;
};