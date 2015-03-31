/**
 * Created by 0xFranCiS on Mar 23, 2015.
 *
 * create an GRID by the given STORE.
 * input: store, display fields ( and width), filter fields (and group fields)
 * output: the grid (fancy infinite style), and a filter/grouping sub panel
 */
;Ext.define('Finetrust.lib.SimpleModelGrid', {
    extend: 'Ext.grid.Panel',

    /**
     * stores all the context menu
     * and remember to destroy all the menus after the component is destroyed
     * @type {Ext.util.HashMap}
     */
    menus: Ext.create('Ext.util.HashMap'),

    /**
     * create an {@link Ext.KeyMap} for this component
     * just one KeyMap instance is enough
     * init the keymap in initComponent method will failed, reason unknown.
     * so just init the keymap after the component is rendered
     * and if you pass the component Object to the KeyMap's target will also fail,
     * so just pass the el (obtained by the return of getEl())
     * or id (obtained by the return of getId()) of the component
     * to the KeyMap's target
     * and remember to destroy the keymap after the component is destroyed.
     * @type {Ext.KeyMap}
     */
    keymap: undefined,

    initComponent: function () {
        var me = this;

        me.callParent();

        me.on({
            itemcontextmenu: me.onItemcontextmenu,
            itemdblclick: me.onItemdblclick,
            containercontextmenu: me.onContainercontextmenu,
            afterrender: me.onAfterrender,
            destroy: me.onDestroy,
            scope: me
        });

    },

    onItemdblclick: function (dom, record) {
        var me = this;
        me.launchModelCard({
            mode:'read',
            record: record
        });
    },

    /**
     *
     * @param dom
     * @param {Finetrust.model.Project} record
     * @param item
     * @param idx
     * @param e
     */
    onItemcontextmenu: function (dom, record, item, idx, e) {
        var me = this,
            menuId = 'item',
            menu;
        if (!me.menus.get(menuId)) {
            menu = Ext.create('Ext.menu.Menu', {
                items:[{
                    text: '新建',
                    handler: function () {
                        me.launchModelCard({
                            mode: 'create',
                            store: me.getStore()
                        });
                    },
                    scope: me
                },{
                    text:'查看',
                    handler: function () {
                        me.launchModelCard({
                            mode:'read',
                            record: record
                        });
                    }
                },{
                    text:'编辑',
                    handler: function () {
                        me.launchModelCard({
                            mode: 'update',
                            record: record
                        });
                    },
                    scope: me
                },{
                    text:'删除',
                    handler: function () {
                        me.getStore().remove(record);
                    },
                    scope: me
                }]
            });
            me.menus.add(menu);
        } else {
            menu = me.menus.get(menuId);
        }
        menu.showAt(e.getXY());
    },

    onContainercontextmenu: function (dom, e) {
        var me = this,
            menuId = 'container',
            menu;
        if (!me.menus.get(menuId)) {
            menu = Ext.create('Ext.menu.Menu', {
                items:[{
                    text:'新建',
                    handler: function () {
                        me.launchModelCard({
                            mode: 'create',
                            store: me.getStore()
                        });
                    },
                    scope: me
                }]
            });
            me.menus.add(menu);
        } else {
            menu = me.menus.get(menuId);
        }
        menu.showAt(e.getXY());
    },
    
    onAfterrender: function () {
        var me = this;

        if (!me.keymap) {
            me.keymap = Ext.create('Ext.KeyMap', {
                target: me.getEl(),
                binding: [{
                    key: 's',
                    shift: true,
                    handler: me.launchQueryPanel,
                    scope: me
                }]
            });
        }
    },

    onDestroy: function () {
        var me = this;
        if (me.keymap) {
            me.keymap.destroy();
        }
        me.menus.each(function (key, val, len) {
            val.destroy();
        });
        if (me.queryPanel) {
            me.queryPanel.destroy();
        }
    },

    launchModelCard: function (cfg) {
        var me = this;
        Ext.create(me.modelCardClass, cfg).show();
    },

    launchQueryPanel: function () {
        var me = this;
        if (!me.queryPanel) {
            me.queryPanel = Ext.create('Finetrust.widget.GridSearchPanel');
        }
        me.queryPanel.show();
    },

    queryByCriteria: function () {
        
    }
});