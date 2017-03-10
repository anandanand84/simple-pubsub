/// <reference types="node" />
import { EventEmitter } from 'events';
declare class PubSub extends EventEmitter{
    constructor();
    publish:(topic:string, data:any)=>boolean;
    subscribe:(topic:string, callback:(topic:string, data:any)=>void)=>string;
    unsubscribe:(token:string)=>boolean;
}
export = PubSub;