function pubsub() {
  const subs = {};

  const logSubs = () => console.log(subs);

  const publish = (eventName, data) => {
    if (!Array.isArray(subs[eventName])) return console.log(data);
    return subs[eventName].map((callback) => callback(data));
  };

  const subscribe = (eventName, callback) => {
    if (!Array.isArray(subs[eventName])) subs[eventName] = [];
    return subs[eventName].push(callback);
  };

  const unsub = (id) => delete subs[id];

  function removeAllExceptOneSub(id) {
    Object.keys(subs).forEach((sub) => {
      if (sub !== id) {
        delete subs[sub];
      }
    });
  }

  const removeAllSubs = () => {
    Object.keys(subs).map((sub) => delete subs[sub]);
  };

  return { logSubs, subscribe, publish, unsub, removeAllSubs, removeAllExceptOneSub };
}

const ps = pubsub();

export default ps;
