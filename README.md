# simple-pubsub

## Installation

npm install --save simple-pubsub

## Simple pubsub module provide 3 methods to use.

1. subscribe
2. unsubscribe
3. publish

## Usage

```javascript

 var pubsub = require('simple-pubsub');
  
  var subscriberId = pubsub.subscribe('topic',function callback(topic,data){
       console.log(data);
   });

  pubsub.publish('topic',{'message':'hello'});
  
  pubsub.unsubscribe(subscriberId);
  
```