/**
 * Created by 0xFranCiS on Mar 23, 2015..
 */
;Ext.define('Finetrust.apps.ProjectHub', {
    extend:'Beaux.sys.lib.Application',
    statics:{
        launch: function (cfg) {
            var me = this;
            if (me.instance) {
                me.instance.xwindow.toFront();
            } else {
                me.instance = new this(cfg);
                me.instance.xwindow.show();
            }
        },
        instance: null
    },

    /**
     * @type {Finetrust.lib.projectHub.XWindow}
     */
    xwindow: null,

    constructor: function (cfg) {
        var me = this;
        me.initXWindow(cfg);
        me.callParent(cfg);
    },

    initXWindow: function (cfg) {
        var me = this;
        me.xwindow = Ext.create('Finetrust.lib.projectHub.XWindow', cfg);
        me.xwindow.on({
            destroy: function () {
                me.fireEvent('terminate');
            },
            scope: me
        });
    },

    terminate: function () {
        var me = this;
        me.callParent();
        me.self.instance = null;
        //TODO implement destroy xwindow
    }
});