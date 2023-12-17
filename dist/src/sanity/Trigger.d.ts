import { ITriggerClassType, ITriggerContructorParams, ITriggerOptions, IHelpers, AnyObject } from "actionsflow-core";
import { Item } from "./Item";
export declare abstract class Trigger<I extends Item> implements ITriggerClassType {
    options: ITriggerOptions;
    helpers: IHelpers;
    constructor({ helpers, options }: ITriggerContructorParams);
    abstract trigger(): Promise<I[]>;
    run(): Promise<AnyObject[]>;
    getItemKey(object: AnyObject): string;
}
