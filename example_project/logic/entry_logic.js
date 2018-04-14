let entryDB = new (require("../models/entry_db"))();

exports.createUser = function(params) {
  return new Promise((resolve, reject) => {
    //_validateParams
    entryDB
      .createUser(params)
      .then(result => {
        console.log("result: ", result);
        resolve({ success: result });
      })  
      .catch(error => {
        reject(`[entry] createUser error => ${error}`);
      });
  });
};
