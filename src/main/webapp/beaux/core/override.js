// helper functions for caret positioning in HTML text fields
// http://www.sencha.com/forum/showthread.php?95486#post609639
;Ext.override(Ext.form.field.Text, {
    setCursorPosition: function(pos) {
        var el = this.inputEl.dom;
        if (typeof(el.selectionStart) === "number") {
            el.focus();
            el.setSelectionRange(pos, pos);
        } else if (el.createTextRange) {
            var range = el.createTextRange();
            range.move("character", pos);
            range.select();
        } else {
            throw 'setCaretPosition() not supported';
        }
    },

    getCursorPosition: function() {
        var el = this.inputEl.dom;
        if (typeof(el.selectionStart) === "number") {
            return el.selectionStart;
        } else if (document.selection && el.createTextRange){
            var range = document.selection.createRange();
            range.collapse(true);
            range.moveStart("character", -el.value.length);
            return range.text.length;
        } else {
            throw 'getCaretPosition() not supported';
        }
    }
});

// force to send every field to server even not modified
// because of hibernate session's save method can not save only the modified field
Ext.override(Ext.data.field.Field, {
    critical: true
});


Ext.override(Ext.form.field.Text, {

    /**
     * dynamically change this property is not supported yet
     * TODO evaluate the need for feature of dynamically change this property
     * @private
     */
    clickToEdit: false,

    setReadOnly: function(readOnly) {
        var me = this,
            triggers = me.getTriggers(),
            hideTriggers = me.getHideTrigger(),
            trigger,
            id;

        readOnly = !!readOnly;

        me.callParent([readOnly]);
        if (me.rendered) {
            // override to setup border
            if (me.clickToEdit) {
                me.triggerWrap.setBorder(readOnly ? 0 : 1);
            }
            me.setReadOnlyAttr(readOnly || !me.editable);

            if (triggers) {
                for (id in triggers) {
                    trigger = triggers[id];
                    /*
                     * Controlled trigger visibility state is only managed fully when 'hideOnReadOnly' is falsy.
                     * Truth table:
                     *   - If the trigger is configured/defaulted as 'hideOnReadOnly : true', it's readOnly-visibility
                     *     is determined solely by readOnly state of the Field.
                     *   - If 'hideOnReadOnly : false/undefined', the Fields.{link #hideTrigger hideTrigger} is honored.
                     */
                    if (trigger.hideOnReadOnly === true || (trigger.hideOnReadOnly !== false && !hideTriggers)) {
                        trigger[readOnly ? 'hide' : 'show'].call(trigger);
                    }
                }
            }
        }
    },

    afterRender: function(){
        var me = this;

        me.autoSize();
        me.callParent();
        me.invokeTriggers('afterFieldRender');

        // override to setup border
        if (me.clickToEdit && me.readOnly) {
            me.triggerWrap.setBorder(0);
        }
    },

    initEvents: function(){
        var me = this,
            el = me.inputEl;

        me.callParent();
        if(me.selectOnFocus || me.emptyText){
            me.mon(el, 'mousedown', me.onMouseDown, me);
        }
        if(me.maskRe || (me.vtype && me.disableKeyFilter !== true && (me.maskRe = Ext.form.field.VTypes[me.vtype+'Mask']))){
            me.mon(el, 'keypress', me.filterKeys, me);
        }

        if (me.enableKeyEvents) {
            me.mon(el, {
                scope: me,
                keyup: me.onKeyUp,
                keydown: me.onKeyDown,
                keypress: me.onKeyPress
            });
        }

        // add click to edit function
        if (me.clickToEdit) {
            me.mon(el, {
                scope: me,
                click: function () {
                    me.setReadOnly(!me.readOnly);
                },
                blur: function () {
                    me.setReadOnly(!me.readOnly);
                    // TODO add class to changed field
                }
            });
        }
    }
});