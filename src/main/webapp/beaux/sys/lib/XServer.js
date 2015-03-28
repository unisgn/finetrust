;Ext.define('Beaux.sys.lib.XServer', {
    singleton: true,
    requires: [
        'Ext.container.Viewport'
    ],

    /**
     * @private
     * @property
     * @type {Ext.container.Viewport}
     */
    viewport: null,

    /**
     * @private
     * @property
     * @type {Beaux.sys.lib.RootXWindow}
     */
    rootXWindow: null,


    /**
     * @public
     * @returns {Beaux.sys.lib.RootXWindow}
     */
    getRootXWindow: function() {
        return this.rootXWindow;
    },

    /**
     * @public
     * @param win {Beaux.sys.lib.RootXWindow}
     */
    setRootXWindow: function(win) {
        var me = this;
        if(me.rootXWindow) {
            me.viewport.remove(me.rootXWindow);
//            me.viewport.update();
        }
        me.rootXWindow = win;
        me.viewport.add(win);
        me.viewport.update();
    },

    /**
     * @public
     */
    main: function() {
        var me = this;
        me.viewport = Ext.create('Ext.container.Viewport', {layout: 'fit'});
    }
});
