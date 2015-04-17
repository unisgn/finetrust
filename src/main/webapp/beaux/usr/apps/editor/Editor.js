Ext.define('Beaux.usr.apps.editor.Editor', {
    extend: 'Beaux.sys.lib.Application',
    
    requires: [
        'Ext.form.field.HtmlEditor'
        //'Ext.form.field.TextArea'
    ],
    
    statics: {
        /**
         * @static
         */
        launch: function(cfg) {
            return new this(cfg);
        }
    },
    
    constructor: function() {
        this.callParent();
        this.initXWindow();
    },
    

    
    initXWindow: function() {
        var me = this;
        var win = Ext.create('Beaux.sys.lib.cassie.XWindow', {
            title:'EditorEditorEditorEditorEditor',
            width:600,
            height:400,
            border: false,
            hideMode: 'offsets',
            layout: 'fit',
            items: [
                {
                    xtype: 'htmleditor',
                    //xtype: 'textarea',
                    value: [
                        'Some <b>rich</b> <font color="red">text</font> goes <u>here</u><br>',
                        'Give it a try!'
                    ].join('')
                }
            ]
        });
        win.on({
            destroy: me.terminate,
            scope: me
        });
        win.show();
    }
    
    
        
});
