Ext.define('Beaux.sys.lib.Application', {

    /**
     * @property
     * @protected
     */
    pid: 0,

    terminated: false,

    /**
     * every single application should implements an static method
     * launch() to provide an entry to start.
     * statics: {
     *     launch: function(cfg) {
     *         // implements statement;
     *         return new this(cfg)
     *     }
     * }
     *
     * application should also implements singleton mechanics if needed.
     *
     */

    constructor: function () {
        var procMgr = Beaux.getProcessMgr();
        var pid = procMgr.registerProcess(this);
        if (pid) {
            this.pid = pid;
        }
    },


    /**
     * To be implemented by concrete app
     */
    postConstructor: Ext.emptyFn,

    /**
     * @public
     * @returns {Number}
     */
    getPid: function () {
        return this.pid;
    },

    /**
     * @public
     */
    terminate: function () {
        this.terminated = true;
        var procMgr = Beaux.getProcessMgr();

        procMgr.deregisterProcess(this.getPid());
    },

    /**
     * To be implemented by concrete app
     */
    preTerminate: Ext.emptyFn
});
