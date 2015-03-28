/**
 * Created by 0xFranCiS on Mar 23, 2015.
 *
 * create an ENTITY DETAIL CARD by the given RECORD/MODEL ( alone with its STORE, for auto sync.)
 * input: record(store).
 * output: entity detail card frame.
 * the detail card layout (as it is difficult to auto layout the fields) should be implemented by concrete entity
 */
;Ext.define('Finetrust.lib.SimpleModelCard', {
    extend: 'Beaux.sys.lib.cassie.XWindow',

    layout:'fit',
    title: '',
    titleProperty: '',
    width: 600,
    height: 400,

    edit_indicator: ' * ',

    i18n: {
        btn_reset: 'RESET',
        btn_save:'SAVE',
        btn_save_and_new: 'SAVE & NEW',
        msg_failure: 'FAILED: '
    },

    /**
     * @property
     * @type string
     */
    model:'',

    /**
     * @property
     * @type {Ext.data.Model}
     */
    record: null,

    readonly: false,


    /**
     * @type {Ext.form.Basic}
     */
    form: null,

    /**
     * 0: view
     * 1: edit
     * @private
     *
     */
    mode: 0,

    MODE_VIEW: 0,
    MODE_EDIT: 1,

    constructor: function (cfg) {
        var me = this;

        if (cfg.record) { // favor record first
            me.record = cfg.record;
            me.model = Ext.getClassName(me.record);
        } else if (typeof cfg.model === 'string') {
            me.model = cfg.model;
            me.record = Ext.create(me.model);
        } else {
            throw new Error('no record or model class found!')
        }

        if (typeof cfg.readonly === 'boolean') {
            me.readonly = cfg.readonly;
        }

        me.callParent();
    },

    initComponent: function() {
        var me = this;

        me.items =[me.layoutBody()];

        if (!me.readonly) {
            me.dockedItems = [{
                xtype:'toolbar',
                dock:'bottom',
                ui:'footer',
                defaults:{
                    minWidth: 80
                },
                items:[{
                    xtype: 'component',
                    flex: 1 // make buttons to be aligned to right
                }, {
                    xtype: 'button',
                    text: me.i18n.btn_reset,
                    handler: me.handle_btn_reset,
                    scope: me
                }, {
                    xtype: 'button',
                    text: me.i18n.btn_save,
                    handler: me.handle_btn_save,
                    scope: me
                }, {
                    xtype:'button',
                    text: me.i18n.btn_save_and_new,
                    handler: me.handle_btn_save_and_new,
                    scope: me
                }]
            }];
        }

        me.callParent();

        me.form.loadRecord(me.record);
    },

    /**
     * implemented by concrete entity
     */
    layoutBody: function () {

    },

    reset: function () {
        this.form.reset();
    },

    handle_btn_reset: function () {
        var me = this;
        if (me.mode = me.MODE_EDIT) {
            me.reset();
        }
    },
    handle_btn_save: function () {
        var me = this;
        var success = function () {
            me.setTitle(me.title + '#' + me.record.getId());
        };
        me.save(success);
    },

    handle_btn_new: function () {
        var me = this;
        if (me.record.store) {
            me.record = me.record.store.add(Ext.create(me.model))[0];
        } else {
            me.record = Ext.create(me.model);
        }
        me.form.loadRecord(me.record);
        me.setTitle(me.edit_indicator + title);
    },

    handle_btn_save_and_new: function () {
        this.save(this.handle_btn_new);
    },

    /**
     *
     * @param [success]
     * @param [callback]
     */
    save: function (success, callback) {
        var me = this;
        me.form.updateRecord(me.record);
        me.setLoading(true);
        me.record.save({
            scope: me,
            failure: function (record, op) {
                // op.getError() function propertly only
                // when model's proxy's reader messageProperty settled
                Ext.Msg.alert(me.i18n.msg_failure, op.getMessage());
            },
            success: function (record, op) {
                me.record = record;
                success && success(record, op);
            },
            callback: function (record, op) {
                callback && callback(record, op);
                me.setLoading(false);
            }
        });
    }
});
