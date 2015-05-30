Ext.define('Beaux.sys.apps.cassie.RootXWindow', {
    extend: 'Beaux.sys.lib.RootXWindow',


    /**
     * @type {Ext.util.KeyMap}
     */
    globalKeymap: null,

    /**
     * @override
     */
    layout: 'vbox',

    /**
     * @private
     * @property
     * @readonly
     */
    desk: null,

    /**
     * @override
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            dockedItems: [{
                dock:'top',
                items:[me.createBanner()]
            }],
            items:[{
                xtype: 'container',
                padding: 5,
                html: 'Welcome To Beaux'
            }]
        });

        me.globalKeymap =  Ext.create('Ext.util.KeyMap', {
            target: Ext.getBody(),
            binding: {
                key: 27,
                handler: me.toggleArrangeWindows,
                scope: me
            }
        });
        
        me.callParent();
    },


    /**
     * @private
     * @returns {Beaux.sys.lib.cassie.EdgePanel}
     */
    createBanner: function() {
        var _appMenu = Ext.create('Beaux.sys.apps.cassie.panelWidget.AppsMenu');

        return Ext.create('Beaux.sys.lib.cassie.EdgePanel', {
            items: [
                _appMenu
            ]
        });
    },

    /**
     * @public
     * @returns {Beaux.sys.lib.cassie.EdgePanel}
     */
    getDesk: function() {
        return this.body;
    },

    /**
     * @private
     */
    toggleArrangeWindows: function() {
        Beaux.sys.lib.cassie.WindowArranger.toggleArrangeWindows();
    }
    
});
