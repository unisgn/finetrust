/**
 * Created by 0xFranCiS on Mar 28, 2015.
 */
;Ext.define('Finetrust.lib.projectHub.XWindow', {
    extend: 'Beaux.sys.lib.cassie.XWindow',

    width: 800,
    height: 600,
    title: '项目管理',
    layout:'fit',

    initComponent: function (cfg) {
        var me = this;

        Ext.apply(me, {
            items:[
                Ext.create('Finetrust.lib.projectHub.ProjectGridPanel')
            ]
        });
        me.callParent(cfg);
    }
});