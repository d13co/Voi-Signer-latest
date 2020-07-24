export declare const JSONRPC_VERSION: string;
export declare enum JsonRpcMethod {
    Heartbeat = "heartbeat",
    Authorization = "authorization",
    AuthorizationAllow = "authorization-allow",
    AuthorizationDeny = "authorization-deny",
    SignTransaction = "sign-transaction",
    Algod = "algod",
    Indexer = "indexer",
    Accounts = "accounts",
    CreateWallet = "create-wallet",
    CreateAccount = "create-account",
    SaveAccount = "save-account",
    ImportAccount = "import-account",
    DeleteAccount = "delete-account",
    GetSession = "get-session",
    Login = "login",
    AccountDetails = "account-details",
    Transactions = "transactions",
    AssetDetails = "asset-details",
    SignSendTransaction = "sign-send-transaction"
}
export declare enum SupportedAlgod {
    Status = "status"
}
export declare type JsonPayload = {
    [key: string]: string | number | JsonPayload | undefined;
};
export declare type JsonRpcBody = {
    readonly jsonrpc: string;
    readonly method: JsonRpcMethod;
    readonly params: JsonPayload;
    readonly id: string;
};
export declare enum MessageSource {
    Extension = "extension",
    DApp = "dapp",
    Router = "router",
    UI = "ui"
}
export declare type MessageBody = {
    readonly source: MessageSource;
    readonly body: JsonRpcBody;
};
export declare type JsonRpcResponse = string;