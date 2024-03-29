class API {
    baseURL: string;
    endpoints: any;

    // We require client URLS to protect API keys
    clientURL: string;
    clientEndpoints: any;

    constructor({ baseURL, endpoints, clientURL, clientEndpoints } : any) {
        this.baseURL = baseURL;
        this.endpoints = endpoints;
        this.clientURL = clientURL;
        this.clientEndpoints = clientEndpoints;
    }    
}

export const adablobsAPI = new API (
    {
        baseURL: process.env.NEXT_PUBLIC_ADABLOBS_API_URL,
        endpoints: {
            blobs: {
                base: (page: number) => `/blobs?page=${page}`,
                blob: (asset: string) => `/blobs/${asset}`,
                script: () => `/blobs/scripts`
            },
            addresses: {
                base: (address: string) => `/addresses/${address}`,
                auctions: (address: string) => `/addresses/${address}/auctions`,
            }
        }
    }
)

export const blockfrostAPI = new API(
    {
        baseURL: process.env.NEXT_PUBLIC_BLOCKFROST_API_URL,
        endpoints: {
            addresses: {
                base: (address: string) => `/addresses/${address}`,
                utxos: {
                    base: (address: string) => `/addresses/${address}/utxos`,
                    asset: (address: string, asset: string) => `/addresses/${address}/utxos/${asset}`
                },
            },
            assets: {
                addresses: (asset: string) => `/assets/${asset}/addresses`,
            },
            blocks: {
                latest: {
                    base: () => `/blocks/latest`,
                }
            },
            epochs: {
                latest: {
                    parameters: () => `/epochs/latest/parameters`
                }
            },
            txs: {
                metadata: (tx_hash: string) => `/txs/${tx_hash}/metadata`
            },
        },
        clientURL: process.env.NEXT_PUBLIC_BLOCKFROST_CLIENT_API_URL,
        clientEndpoints: {
            addresses: {
                base: (address: string) => `/addresses/${address}`,
                utxos: {
                    base: (address: string) => `/addresses/${address}/utxos`,
                    asset: (address: string, asset: string) => `/addresses/${address}/utxos/${asset}`
                },
            },
            assets: {
                addresses: (asset: string) => `/assets/${asset}/addresses`,
            },
            blocks: {
                latest: {
                    base: () => `/blocks/latest`,
                }
            },
            epochs: {
                latest: {
                    parameters: () => `/epochs/latest/parameters`
                }
            },
            txs: {
                metadata: (tx_hash: string) => `/txs/${tx_hash}/metadata`
            },
            utils: {
                txs: {
                    evaluate: () => `/utils/txs/evaluate`
                }
            }
        }    
    }
)
    