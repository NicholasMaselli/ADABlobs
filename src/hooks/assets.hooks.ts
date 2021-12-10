import { useInfiniteQuery, useQuery } from "react-query";
import { fetchAssets, fetchAsset, fetchOwnedAssets, fetchScriptAssets } from "../api/requests";

const BASE_ASSET_KEY = "assets"

export const useFetchAssets = () => useInfiniteQuery(BASE_ASSET_KEY, fetchAssets, { 
    getNextPageParam: (lastPage, pages) => {
        if (lastPage.curPage < lastPage.maxPage) {
            return lastPage.curPage + 1;
        } 
        return undefined;   
    }
});

export const useFetchAsset = (asset: string) => useQuery([BASE_ASSET_KEY, asset], fetchAsset);

export const useOwnedAssets = () => useQuery(`${BASE_ASSET_KEY}.owned`, fetchOwnedAssets)

export const useScriptAssets = () => useQuery(`${BASE_ASSET_KEY}.script`, fetchScriptAssets)