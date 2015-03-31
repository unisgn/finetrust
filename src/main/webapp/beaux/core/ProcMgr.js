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
             * @param key {String | Number}
             * @returns {Object}
             */
            get: function (key) {
                return processes.get(key + '');
            }
        }
    }());

    return {

        /**
         * @param {Beaux.sys.lib.Application} _proc
         * @returns {Number} the pid of _proc assigned by mgr
         */
        register: function (_proc) {
            var pid = pidGen.next();
            if (_proc) { //TODO determine _proc is extends Beaux.sys.Application, (implements by JSDoc)
                procColl.register(pid, _proc);
                return pid;
            } else {
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
            proc && proc.terminate && proc.terminate();
        }
    }
});