import { Buffer } from "buffer";
import { BigNum, PlutusData } from "@emurgo/cardano-serialization-lib-browser";
import Loader from "../loader";

// Thank you SpaceBudz for help on these
export const fromHex = (hex: any) => Buffer.from(hex, "hex");
export const toHex = (bytes: any) => Buffer.from(bytes).toString("hex");
export const toBytesNum = (num: any) =>
  num
    .toString()
    .split("")
    .map((d: any) => "3" + d)
    .join("");
export const fromAscii = (hex: any) => Buffer.from(hex).toString("hex");