var EntryEmptyEmitter = require('entry-empty-emitter');
const util = require('util');

function PubSub() {
  "use strict";
  EntryEmptyEmitter.call(this);
  this.topics = {};
  this.subUid = -1;
}

util.inherits(PubSub, EntryEmptyEmitter);

PubSub.prototype.publish = function (topic, args) {
  if (!this.topics[topic]) {
    return false;
  }
  var subscribers = this.topics[topic], len = subscribers ? subscribers.length : 0;
  while (len--) {
    subscribers[len].func(topic, args);
  }
  return true;
};
PubSub.prototype.subscribe = function (topic, func) {
  if (!this.topics[topic]) {
    this.topics[topic] = [];
  }
  var token = (++this.subUid).toString();
  this.topics[topic].push({
    token: token,
    func: func
  });
  this.add(topic);
  return token;
};
PubSub.prototype.unsubscribe = function (token) {
  for (var m in this.topics) {
    if (this.topics[m]) {
      for (var i = 0, j = this.topics[m].length; i < j; i++) {
        if (this.topics[m][i].token === token) {
          this.topics[m].splice(i, 1);
          this.remove(m);
          return true;
        }
      }
      if (this.topics[m].length == 0) {
        delete this.topics[m];
      }
    }
  }
  return false;
};

global.Pubsub = module.exports = PubSub;