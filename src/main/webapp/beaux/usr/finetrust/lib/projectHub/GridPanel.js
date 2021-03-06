/**
 * Created by 0xFranCiS on Mar 28, 2015.
 */
;Ext.define('Finetrust.lib.projectHub.GridPanel', {
    extend: 'Finetrust.lib.ModelGrid',

    requires:[
        'Finetrust.model.Project'
    ],

    model: 'Finetrust.model.Project',

    modelCardClass:'Finetrust.lib.project.Viewer',

    viewConfig: {
        stripeRows: true
    },

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            store: Ext.create('Ext.data.Store', {
                model: 'Finetrust.model.Project',
                autoLoad: true
            }),
            columns: [
                {xtype:'rownumberer'},
                {dataIndex: 'number',text: '编号', flex: 1},
                {dataIndex: 'code',text: '代码', flex: 1},
                {dataIndex: 'name',text: '名称', flex: 2}
            ]
        });

        me.callParent();
    },

    str_tab: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    random_str: function (len) {
        var ret = '';
        for (var i = 0; i < len; i++) {
            ret += this.str_tab[Ext.Number.randomInt(0,this.str_tab.length - 1)];
        }
        return ret;
    },
    random_record: function () {
        return {
            number: this.random_str(4),
            code: this.random_str(4),
            name: this.random_str(8)
        };
    },

    random_store: function (size) {
        var ret = [];
        for (var i = 0; i < size; i++) {
            ret.push(this.random_record());
        }
        return ret;
    }
});