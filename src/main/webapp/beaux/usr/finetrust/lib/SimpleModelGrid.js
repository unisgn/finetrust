/**
 * Created by 0xFranCiS on Mar 23, 2015.
 *
 * create an GRID by the given STORE.
 * input: store, display fields ( and width), filter fields (and group fields)
 * output: the grid (fancy infinite style), and a filter/grouping sub panel
 */
;Ext.define('Finetrust.lib.SimpleModelGrid', {
    extend: 'Ext.grid.Panel',
    i18n: {},

    constructor: function (cfg) {
        var me = this;

        me.callParent(cfg);
    },

    initComponent: function (cfg) {
        var me = this;

        me.callParent(cfg);

        me.on({
            contextmenu: me.onContextmenu,
            itemdbclick: me.onItemdbclick,
            scope: me
        });
    },

    onItemdbclick: function () {
        Ext.Msg.alert('on itemdbclick');
    },

    onContextmenu: function () {
        Ext.Msg.alert('on contextmenu');
    }
});