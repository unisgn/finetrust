/**
 * Created by 0xFranCiS on Mar 28, 2015.
 */
;
Ext.define('Finetrust.widget.GridSearchPanel', {
    extend: 'Beaux.sys.lib.cassie.XWindow',

    model: '',
    title: 'Query Panel',
    width: 400,
    height: 300,

    closable: false,

    initComponent: function (cfg) {
        var me = this;
        Ext.apply(me, {
            dockedItems: {
                xtype: 'toolbar',
                dock: 'bottom',
                defaults: {
                    width: 60
                },
                items: [
                    '->',
                    {
                        xtype: 'button',
                        text: 'ok',
                        handler: function () {
                            me.hide();
                        }
                    }, {
                        xtype: 'button',
                        text: 'Cancel',
                        handler: function () {
                            me.hide();
                        }
                    },
                    '->'
                ]
            }
        });
        me.callParent(cfg);
    }
});