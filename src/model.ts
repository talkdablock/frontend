export interface ResponseModel{
    chain_id:number;
    query:ResQuery;
    response:string[];
}

export interface ResQuery {
    address: string;
}

export interface RequestModel{
    address:string;
}