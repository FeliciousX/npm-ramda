import { Property } from "./$types";
declare const propOr: propOr_000;
type propOr_000 = {
    /**
     * If the given, non-null object has an own property with the specified name,
     * returns the value of that property. Otherwise returns the provided default
     * value.
     *
     * @func
     * @memberOf R
     * @since v0.6.0
     * @category Object
     * @sig a -> String -> Object -> a
     * @param {*} val The default value.
     * @param {String} p The name of the property to return.
     * @param {Object} obj The object to query.
     * @return {*} The value of given property of the supplied object or the default value.
     * @example
     *
     *      var alice = {
     *        name: 'ALICE',
     *        age: 101
     *      };
     *      var favorite = R.prop('favoriteLibrary');
     *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
     *
     *      favorite(alice);  //=> undefined
     *      favoriteWithDefault(alice);  //=> 'Ramda'
     */
    <D>(defaults: D): propOr_keyof_100<D>;
    <D>(defaults: D): propOr_record_100<D>;
    <T>(defaults: T): propOr_general_100<T>;
    <D, T, K extends keyof T>(defaults: D, key: K): propOr_keyof_110<D, T, K>;
    <D, K extends string>(defaults: D, key: K): propOr_record_110<D, K>;
    <T>(defaults: T, key: Property): propOr_general_110<T>;
    <D, T, K extends keyof T>(defaults: D, key: K, object: T): propOr_keyof_111<D, T, K>;
    <D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T): propOr_record_111<D, K, T>;
    <$SEL extends "111", $KIND extends "general">(): <T, U>(defaults: T, key: Property, object: any) => propOr_general_111<T, U>;
    <$SEL extends "111", $KIND extends "record">(): <D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T) => propOr_record_111<D, K, T>;
    <$SEL extends "111", $KIND extends "keyof">(): <D, T, K extends keyof T>(defaults: D, key: K, object: T) => propOr_keyof_111<D, T, K>;
    <$SEL extends "11", $KIND extends "general">(): <T>(defaults: T, key: Property) => propOr_general_110<T>;
    <$SEL extends "11", $KIND extends "record">(): <D, K extends string>(defaults: D, key: K) => propOr_record_110<D, K>;
    <$SEL extends "11", $KIND extends "keyof">(): <D, T, K extends keyof T>(defaults: D, key: K) => propOr_keyof_110<D, T, K>;
    <$SEL extends "1", $KIND extends "general">(): <T>(defaults: T) => propOr_general_100<T>;
    <$SEL extends "1", $KIND extends "record">(): <D>(defaults: D) => propOr_record_100<D>;
    <$SEL extends "1", $KIND extends "keyof">(): <D>(defaults: D) => propOr_keyof_100<D>;
    <T, U>(defaults: T, key: Property, object: any): propOr_general_111<T, U>;
};
type propOr_keyof_100<D> = {
    <T, K extends keyof T>(key: K): propOr_keyof_110<D, T, K>;
    <$SEL extends "11">(): <T, K extends keyof T>(key: K, object: T) => propOr_keyof_111<D, T, K>;
    <$SEL extends "1">(): <T, K extends keyof T>(key: K) => propOr_keyof_110<D, T, K>;
    <T, K extends keyof T>(key: K, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_100<D> = {
    <K extends string>(key: K): propOr_record_110<D, K>;
    <$SEL extends "11">(): <K extends string, T extends Record<K, any>>(key: K, object: T) => propOr_record_111<D, K, T>;
    <$SEL extends "1">(): <K extends string>(key: K) => propOr_record_110<D, K>;
    <K extends string, T extends Record<K, any>>(key: K, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_100<T> = {
    (key: Property): propOr_general_110<T>;
    <$SEL extends "11">(): <U>(key: Property, object: any) => propOr_general_111<T, U>;
    <$SEL extends "1">(): (key: Property) => propOr_general_110<T>;
    <U>(key: Property, object: any): propOr_general_111<T, U>;
};
type propOr_keyof_110<D, T, K extends keyof T> = {
    (object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_110<D, K extends string> = {
    <T extends Record<K, any>>(object: T): propOr_record_111<D, K, T>;
};
type propOr_general_110<T> = {
    <U>(object: any): propOr_general_111<T, U>;
};
type propOr_keyof_111<D, T, K extends keyof T> = T[K] | D;
type propOr_record_111<D, K extends string, T extends Record<K, any>> = T[K] | D;
type propOr_general_111<T, U> = T | U;
export = propOr;
