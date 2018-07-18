import { Morphism } from "./$types";
export type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};
export type Evolver<T> = Morphism<T, T> | {
    [K in keyof T]?: Evolver<T[K]>;
};
export type Diff<T extends PropertyKey, U extends PropertyKey> = ({
    [P in T]: P;
} & {
    [P in U]: never;
} & {
    [x: string]: never;
})[T];
export type Omit<T, K extends PropertyKey> = Pick<T, Diff<keyof T, K>>;
export type Same<T extends PropertyKey, U extends PropertyKey> = Diff<T | U, Diff<T, U> | Diff<U, T>>;
export type Merge<T, U> = Omit<T, keyof U> & U;
export interface NumberStringMap {
    "0": "0";
    "1": "1";
    "2": "2";
    "3": "3";
    "4": "4";
    "5": "5";
    "6": "6";
    "7": "7";
    "8": "8";
    "9": "9";
    "10": "10";
    "11": "11";
    "12": "12";
    "13": "13";
    "14": "14";
    "15": "15";
    "16": "16";
    "17": "17";
    "18": "18";
    "19": "19";
    "20": "20";
    "21": "21";
    "22": "22";
    "23": "23";
    "24": "24";
    "25": "25";
    "26": "26";
    "27": "27";
    "28": "28";
    "29": "29";
    [n: number]: string;
}
export type NumberToString<T extends number> = T extends never ? never : NumberStringMap[T];
export type KeyOf<T> = Exclude<keyof T, number | symbol> | NumberToString<Extract<keyof T, number>>;
