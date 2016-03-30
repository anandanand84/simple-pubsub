/**
 * Created by AAravindan on 3/30/16.
 */
var PubSub  = require('./index.js');

var stockPublisher = new PubSub();

stockPublisher.on('entry', function(topic){
  console.log('New topic subscribed', topic);
})

stockPublisher.on('empty', function(topic){
  console.log('All listeners unsubscribed for topic', topic);
})

var subscriptionID = stockPublisher.subscribe('NSE:RELIANCE', function(){
  console.log('Subscription result for ', Reliance);
})

stockPublisher.unsubscribe(subscriptionID);