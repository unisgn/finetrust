Ext.define('Beaux.sys.apps.cassie.Cassie', {
    extend: 'Beaux.sys.lib.Desktop',

    singleton: true,
    requires: [
        'Beaux.sys.lib.XServer',
        'Beaux.sys.lib.RootXWindow'
    ],
    
    /**
     * @private 
     * @property
     * @type {Beaux.sys.apps.cassie.RootXWindow}
     */
    rootXWindow: null,

    /**
     * @private
     * @property
     */
    currentUser: null,

    /**
     * @private
     */
    createRootXWindow: function() {
        return Ext.create('Beaux.sys.apps.cassie.RootXWindow');
    },

    /**
     * @public
     * @override
     */
    main: function() {
        var me = this;
        Ext.log('start loading cassie desktop environment;');
        me.rootXWindow = me.createRootXWindow();
        Beaux.sys.lib.XServer.setRootXWindow(me.rootXWindow);
        Ext.log('cassie desktop environment loaded;');
        this.callParent();
    },

    getRootXWindow: function () {
        return this.rootXWindow;
    }
});
