/// <reference types="node" />
import { EventEmitter } from 'events';
declare module "simple-pubsub" {
    export interface PubSub extends EventEmitter{
        publish:(topic:string, data:any)=>boolean;
        subscribe:(topic:string, callback:(topic:string)=>string)=>string;
        unsubscribe:(token:string)=>boolean;
    }
}