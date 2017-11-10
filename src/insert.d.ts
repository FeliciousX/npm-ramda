import { List } from "./$types";
declare const insert: insert_000;
type insert_000 = {
    /**
     * Inserts the supplied element into the list, at the specified `index`. _Note that
     *
     * this is not destructive_: it returns a copy of the list with the changes.
     * <small>No lists have been harmed in the application of this function.</small>
     *
     * @func
     * @memberOf R
     * @since v0.2.2
     * @category List
     * @sig Number -> a -> [a] -> [a]
     * @param {Number} index The position to insert the element
     * @param {*} elt The element to insert into the Array
     * @param {Array} list The list to insert into
     * @return {Array} A new Array with `elt` inserted at `index`.
     * @example
     *
     *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
     */
    (index: number): insert_100;
    <T>(index: number, value: T): insert_110<T>;
    <$SEL extends "111">(): <T, U>(index: number, value: T, list: List<U>) => insert_111<T, U>;
    <$SEL extends "11">(): <T>(index: number, value: T) => insert_110<T>;
    <$SEL extends "1">(): (index: number) => insert_100;
    <T, U>(index: number, value: T, list: List<U>): insert_111<T, U>;
};
type insert_100 = {
    <T>(value: T): insert_110<T>;
    <$SEL extends "11">(): <T, U>(value: T, list: List<U>) => insert_111<T, U>;
    <$SEL extends "1">(): <T>(value: T) => insert_110<T>;
    <T, U>(value: T, list: List<U>): insert_111<T, U>;
};
type insert_110<T> = {
    <U>(list: List<U>): insert_111<T, U>;
};
type insert_111<T, U> = Array<T | U>;
export = insert;
