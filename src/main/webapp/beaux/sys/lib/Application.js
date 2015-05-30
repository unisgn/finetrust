Ext.define('Beaux.sys.lib.Application', {
    alternateClassName:'Beaux.Application',

    mixins:{
        observable:'Ext.util.Observable'
    },
    /**
     * @property
     * @protected
     */
    pid: 0,

    terminated: false,

    /**
     * every single application should implements an static method
     * launch() to provide an entry to run.
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

    constructor: function (cfg) {
        var me = this;
        var procMgr = Beaux.getProcessMgr();
        me.pid = procMgr.register(me);

        me.mixins.observable.constructor.call(this, cfg);
        me.on({
            terminate: me.terminate,
            scope: me
        });
    },

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
        var me = this;
        me.terminated = true;
        Beaux.getProcessMgr().deregister(me.getPid());
    }
});
