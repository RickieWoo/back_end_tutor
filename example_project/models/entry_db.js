const mongojs = require("mongojs");

class EntryForm {
  constructor() {
    this.db = mongojs("entryForms", ["entryForms"]);
    this.likeWhatDB = mongojs("entryForms", ["likeWhat"]);
    this.hashKey = "phone";
  }

  getUserList() {
    return this.db.entryForms.find().promise();
  }

  getUser(params) {
    if (!params[this.hashKey]) {
      return Promise.reject(() => {
        return {
          reason: "params error , no hashKey inside"
        };
      });
    }
    let queryParam = {
      phone: params.phone
    };
    return this.db.entryForms.findOne(queryParam).promise();
  }

  createUser(params) {
    console.log('params: ', params);
    if (!params[this.hashKey]) {
      return Promise.reject(() => {
        return {
          reason: "params error , no hashKey inside"
        };
      });
    }
    return this.db.entryForms.insert(params).promise();
  }
}

module.exports = EntryForm;
