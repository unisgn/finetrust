/**
 *
 */
;Ext.define('Beaux.widget.MathExField', {
    extend: 'Ext.form.field.Text',
    alias:'widget.mathexfield',
    xtype:'mathexfield',

    initComponent: function() {
        var me = this;
        me.callParent();
        me.on({
            blur: me.evaluate,
            specialkey: me.evaluate,
            scope: me
        });
    },

    evaluate: function() {
        var me = this;
        try {
            var val = Parser.evaluate(field.getValue() + '');
            me.setValue(val);
        } catch (e) {
            // invalid expression
            me.setValue('');
        }
    }
});
