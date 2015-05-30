;Ext.define('Beaux.core.ProcMgr', function () {
    // process id generator
    var pidGen = (function () {
        var pid = 0;
        return {
            next: function () {
                return ++pid;
            }
        }
    }());

    var procColl = (function () {
        var  processes = Ext.create('Ext.util.HashMap');
        return {

            /**
             *
             * @param key {String | Number}
             * @param proc {Object}
             * @returns {Object}
             */
            register: function (key, proc) {
                return processes.add(key + '', proc);
            },

            /**
             *
             * @param {String | Number} pid
             * @returns {*}
             */
            deregister: function (pid) {
                return processes.removeAtKey(pid + '');
            },

            /**
             *
             * @param {String | Number} key
             * @returns {Object}
             */
            get: function (key) {
                return processes.get(key + '');
            }
        }
    }());

    function check (obj) {
        if (typeof(obj) != 'object') {
            return false;
        } else if (!obj.superclass) {
            return false;
        } else if (obj.superclass.$className === 'Beaux.sys.lib.Application' ) {
            return true;
        } else {
            return check(obj.superclass);
        }
    }

    return {

        /**
         * @param  {Beaux.sys.lib.Application} _proc
         * @returns {Number} the pid of _proc assigned by mgr
         */
        register: function (_proc) {
            var pid = pidGen.next();
            if (check(_proc)) {
                procColl.register(pid, _proc);
                return pid;
            } else {
                console.log('register rejected: only a sub class of #Beaux.sys.lib.Application allowed.');
                return -1;
            }
        },

        /**
         *
         * @param {String | Number} pid
         * @returns {Object}
         */
        deregister: function (pid) {
            return  procColl.deregister(pid);
        },

        /**
         *
         * @param {Number | String} pid get process by pid
         * @returns {Object}
         */
        get: function (pid) {
            return procColl.get(pid);
        },

        terminate: function (pid) {
            var proc = procColl.get(pid);
            proc && proc.terminate();
        }
    }
});