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
            getProcesses: function () {
                return processes;
            },

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
            getProc: function (key) {
                return processes.get(key + '');
            }
        }
    }());

    return {

        /**
         * @param {Beaux.sys.lib.Application} _proc
         * @returns {Number} the pid of _proc assigned by mgr
         */
        registerProcess: function (_proc) {
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
        deregisterProcess: function (pid) {
            return  procColl.deregister(pid);
        },

        /**
         *
         * @param {Number | String} pid get process by pid
         * @returns {Object}
         */
        getProcess: function (pid) {
            return procColl.getProc(pid);
        },

        /**
         *
         * @returns {Ext.util.MixedCollection}
         */
        getProcesses: function () {
            return procColl.getProcesses().clone();
        },

        terminateProcess: function (pid) {
            var proc = procColl.getProc(pid);
            if (proc && proc.terminate) {
                proc.terminate();
            }
        }
    }
});