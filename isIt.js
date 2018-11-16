function isIt() {
  const what = [...arguments];
  return {
    args: what,
    what: function (opts) {
      const check = (obj) => {
        if (this.func(obj)) {
          return 'Function'
        }
        if (this.array(obj)) {
          return 'Array'
        }
        if (this.string(obj)) {
          return 'String'
        }
        if (this.event(obj)) {
          return 'Event'
        }
        if (this.boolean) {
          return 'Boolean'
        }
        if (this.int) {
          return 'Integer'
        } else {
          return "I couldn't figure out what this is...";
        }
      }

      if (this.args.length > 1) {
        let returns = [];
        this.args.forEach(arg => {
          returns.push(check(arg));
        });
        return returns;
      } else {
        return check(this.args[0]);
      }


    },

    object: function (opts) {
      const check = (obj) => {
        if (this.func(obj)) {
          return false;
        }
        if (this.array(obj)) {
          return false;
        }
        if (this.string(obj)) {
          return false;
        }
        if (this.event(obj)) {
          return false;
        }

        return true;
      }

      if (this.args.length > 1) {
        let returns = [];
        this.args.forEach(arg => {
          returns.push(check(arg));
        });
        return returns;
      } else {
        return check(this.args[0]);
      }


    },

    array: function (opts) {
      const check = (arr) => {
        return Array.isArray(arr);
      }

      if (this.args.length > 1) {
        let returns = [];
        this.args.forEach(arg => {
          returns.push(check(arg))
        });
        return returns;
      } else {
        return check(this.args[0])
      }
    },

    func: function (opts) {
      const check = (fn) => {
        return Object.getPrototypeOf(fn) === Object.getPrototypeOf(function () {});
      }

      if (this.args.length > 1) {
        let returns = [];
        this.args.forEach(arg => {
          returns.push(check(arg))
        })
        return returns;
      } else {
        return check(this.args[0])
      }
    },

    string: function (opts) {
      const check = (str) => {
        return typeof str === 'string';
      }
      if (this.args.length > 1) {
        let returns = [];
        this.args.forEach(arg => {
          returns.push(check(arg));
        })
        return returns;
      } else {
        return check(this.args[0]);
      }
    },

    event: function (opts) {
      const check = (e) => {
        return e instanceof Event;
      }
      if (this.args.length > 1) {
        let returns = [];
        this.args.forEach(arg => {
          returns.push(check(arg));
        })
        return returns;
      } else {
        return check(this.args[0]);
      }
    },

    boolean: function (opts) {
      const check = (bool) => {
        return typeof bool === 'boolean';
      }
      if (this.args.length > 1) {
        let returns = []
        this.args.forEach(arg => {
          returns.push(check(arg));
        })
        return returns;
      } else {
        return check(this.args[0]);
      }
    },

    int: function (opts) {
      const check = (int) => {
        return typeof int === 'number';
      }

      if (this.args.length > 1) {
        let returns = [];
        this.args.forEach(arg => {
          returns.push(check(arg));
        })
        return returns;
      } else {
        return check(this.args[0]);
      }

    }
  }
}




module.exports = (() => {
  return isIt
})();