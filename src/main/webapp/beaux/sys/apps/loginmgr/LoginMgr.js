Ext.define('Beaux.sys.apps.loginmgr.LoginMgr', {
    singleton : true,
    requires : ['Beaux.sys.lib.XServer' ],

    rootXWindow : null,
    currentLoginUser : null,

    /**
     * @public
     */
    main : function () {
        var me = this;
        Ext.log('start loading loginManager;');
        me.rootXWindow = me.createRootXWindow();
        Beaux.sys.lib.XServer.setRootXWindow(me.rootXWindow);
        Ext.log('loginManager loaded;');
    },

    /**
     * private
     * @returns {Beaux.sys.apps.loginmgr.RootXWindow}
     */
    createRootXWindow : function () {
        var me = this;
        return Ext.create('Beaux.sys.apps.loginmgr.RootXWindow');
    },

    getAuthentication : function (_username, _password) {},

    // @public
    getCurrentLoginUser : function () {}
});
