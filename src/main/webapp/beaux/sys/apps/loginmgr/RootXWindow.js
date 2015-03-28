Ext.define('Beaux.sys.apps.loginmgr.RootXWindow', {
    extend: 'Beaux.sys.lib.xserver.RootXWindow',
    requires: [
        'Beaux.sys.apps.loginmgr.LoginForm'
    ],

    initComponent: function() {
        var me = this;
        me.items = [{
            x:500,
            y:200,
            xtype: 'beaux.loginForm'
        }];
        
        me.callParent();
    }
});
