/**
 * Created by 0xFranCiS on Mar 23, 2015.
 *
 * create an GRID by the given STORE.
 * input: store, display fields ( and width), filter fields (and group fields)
 * output: the grid (fancy infinite style), and a filter/grouping sub panel
 */
;Ext.define('Finetrust.lib.SimpleModelGrid', {
    extend: 'Ext.grid.Panel',

    model:'',

    queryCriteria: '',

    constructor: function (cfg) {
        var me = this;

        me.callParent(cfg);
    },

    initComponent: function (cfg) {
        var me = this;

        me.callParent(cfg);

        me.on({
            itemcontextmenu: me.onItemcontextmenu,
            itemdblclick: me.onItemdblclick,
            containercontextmenu: me.onContainercontextmenu,
            scope: me
        });

        //TODO implement shortcuts for component
        //Ext.create('Ext.util.KeyMap', {
        //    target: me.getId(),
        //    binding: [{
        //        key: 'n',
        //        shift: true,
        //        handler: function (keycode, e) {console.log(keycode);}
        //    }],
        //    scope: me
        //});
    },

    onItemdblclick: function () {
    },

    onItemcontextmenu: function (dom, record, item, idx, e) {
        Ext.create('Ext.menu.Menu', {
            items:[{
                text:'删除'
            }]
        }).showAt(e.getXY());
    },

    onContainercontextmenu: function (dom, e) {
        Ext.create('Ext.menu.Menu', {
            items:[{
                text:'新建'
            }]
        }).showAt(e.getXY());
    },

    queryByCriteria: function () {
        
    }
});