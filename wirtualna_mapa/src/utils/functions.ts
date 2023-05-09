import { IServerResponse } from '../models/responses/serverResponse';

export const getPromisedData = async (
    func: Promise<IServerResponse<unknown>>
) => {
    const data = await func;
    const dataPre = JSON.stringify(data.data);
    let dataReady: any[] = [];
    dataReady = JSON.parse(dataPre);
    return dataReady;
};
