Ext.define('Beaux.sys.lib.cassie.XWindow', {
    extend: 'Ext.window.Window',

    alternateClassName: 'Cassie.XWindow',
    
    requires:[
        'Beaux.sys.lib.cassie.WindowManager',
        'Beaux.sys.lib.cassie.WindowArranger'
    ],
    
    /**
     * @override
     * @config
     * @brief function called on ESC key stroke
     */
    onEsc: Ext.emptyFn,

    /**
     * @override
     * @config
     * @brief set false to make transform css function properly;
     */
    shadow: false,

    /**
     * @override
     * @config
     * set false to make drag function with full dynamic contents;
     */
    ghost: false,

    liveDrag: true,

    /**
     * @override
     * @config
     * @brief set dynamic to make resize function with full dynamic contents;
     */
    resizable: {
        dynamic: true
    },

    /**
     * @override
     * @config
     */
    maximizable: true,
    
    /**
     * @property
     * flag to detect this window has any transform css;
     * 
     */
    transformed: false,
    
    /**
     * @property
     * @private
     *
     */
    freezed: false,

    /**
     * @property
     * @config the application by which this window been created
     */
    application: undefined,

    /**
     * @private
     * @property
     * @readonly
     * the desktop
     *
     */

//    constrainHeader: true,

    /**
     * @override
     */
    initComponent: function() {
        var me = this;
        me.renderTo = me.getDesktop().getRootXWindow().getDesk();
        me.callParent();
        me.getWindowManager().registerWindow(me);

        // TODO implement window keymap
    },

    /**
     * @private
     */
    getWindowManager: function() {
        return Beaux.sys.lib.cassie.WindowManager;
    },

    /**
     * @private
     * @returns {Beaux.sys.apps.cassie.Cassie|*}
     */
    getDesktop: function() {
        return Beaux.sys.apps.cassie.Cassie;
    },

    /**
     * @returns {Object}
     */
    getApplication: function() {
        return this.application;
    },
    
    /**
     * @private
     * @brief support for transform function;
     *
     */
    freeze: function() {
        var me = this;
        if(me.dd) {
            me.dd.disable();
        }
        if(me.resizer) {
            me.resizer.disable();
        }
        
        /**
         * when windows are arranged by WindowArranger,
         * this onClick event would
         * trigger an event to resetWindows and make sure 2 things:
         * 1, when the close button clicked, only to close window
         * without trigger resetWindows;
         * 2, when the body of the window clicked, should trigger resetWindows;
         * to achieve this, an alternative way might be using the onActivate
         * event, but with 2 problems:
         * 1, when the close button clicked, it would trigger the activate event, 
         * so to trigger resetWindows, not expected;
         * 2, when the body of the window clicked, the Ext wouldn't trigger
         * the activate event,
         * (probably a BUG) and so can not trigger the resetWindows event, not expected;
         *
         */
        me.body.on('click', me.onFreezeBodyClick, me);        
        me.freezed = true;
    },
    
    /**
     * @private
     * 
     */
    defreeze: function() {
        var me = this;
        if(me.dd) {
            me.dd.enable();
        }
        if(me.resizer) {
            me.resizer.enable();
        }
        me.body.un('click', me.onFreezeBodyClick, me);        
        me.freezed = false;
    },

    /**
     * @public
     * @param _scale
     * @param _dx
     * @param _dy
     * @returns {Beaux.sys.lib.cassie.XWindow}
     */
    transform: function(_scale, _dx, _dy) {
        var me = this;
        if(!me.transformed) {
            /*
             * .XWindow-transform-${this.id} {
             *     -webkit-transform: matrix(${_scale}, 0, 0, ${_scale}, ${_dx},   ${_dy});
             *        -moz-transform: matrix(${_scale}, 0, 0, ${_scale}, ${_dx}px, ${_dy}px);
             * }
             *
             */
            var cls_id = me.getTransformClsId();
            var cls_text =
                ' {-webkit-transform: matrix('+ _scale + ', 0, 0, ' + _scale + ', ' + _dx + ', ' + _dy + ');' +
                '     -moz-transform: matrix('+ _scale + ', 0, 0, ' + _scale + ', ' + _dx + 'px, ' + _dy + 'px);} ';
            Ext.util.CSS.createStyleSheet('.' + cls_id + cls_text, this.id);
            
            me.freeze();
            me.addCls(cls_id);
            me.transformed = true;    
        }
        return me;
    },
    
    /**
     * @public
     * 
     */
    resetTransform: function() {
        var me = this;
        if(me.transformed) {
            var _cls = me.getTransformClsId();
            me.removeCls(_cls);
            Ext.util.CSS.removeStyleSheet(this.id);
            me.transformed = false;
            me.defreeze();
        }
    },


    getTransformClsId: function () {
        return 'XWindow-transform-' + this.id;
    },
    
    
    /**
     * @override
     * @brief emptyFn to disable maximize and restore tool(button in header);
     */
    addTools: Ext.emptyFn,
    
    
    /**
     * @override
     */
    afterRender: function() {
        var me = this;
        me.callParent();
        var _wa = Beaux.sys.lib.cassie.WindowArranger;
        if(_wa.isArranged()) {
            _wa.resetWindows();
        }
    },


    
    /**
     * @override
     *
     */
    beforeDestroy: function() {
        var me = this;
        me.getWindowManager().deregisterWindow(me);
        //me.desktop.getRootXWindow().getDesk().remove(me);        
        me.callParent();
    },

    /**
     * @private
     */
    onFreezeBodyClick: function() {
        Beaux.sys.lib.cassie.WindowArranger.resetWindows();
    },

    /**
     * @override {@link Ext.window.Window.#maximize}
     *
     *
     */
    maximize: function(animate) {
        var me = this,
            header = me.header,
            tools = me.tools,
            changed;

        if (!me.maximized) {
            me.expand(false);
            if (!me.hasSavedRestore) {
                me.restoreSize = me.getSize();

                // override getPosition(true);
                me.restorePos = me.getPosition(false);
            }

            // Manipulate visibility of header tools if there is a header
            if (header) {
                header.suspendLayouts();
                if (tools.maximize) {
                    tools.maximize.hide();
                    changed = true;
                }
                if (tools.restore) {
                    tools.restore.show();
                    changed = true;
                }
                if (me.collapseTool) {
                    me.collapseTool.hide();
                    changed = true;
                }
                me.resumeHeaderLayout(changed);
            }

            me.maximized = true;
            me.el.disableShadow();

            if (me.dd) {
                me.dd.disable();
                if (header) {
                   header.removeCls(header.indicateDragCls);
                }
            }
            if (me.resizer) {
                me.resizer.disable();
            }
            
            me.el.addCls(Ext.baseCSSPrefix + 'window-maximized');
            me.container.addCls(Ext.baseCSSPrefix + 'window-maximized-ct');

            me.syncMonitorWindowResize();
            me.fitContainer(animate = (animate || !!me.animateTarget) ? {
                callback: function() {
                    me.fireEvent('maximize', me);
                }
            } : null);
            if (!animate) {
                me.fireEvent('maximize', me);
            }
        }
        return me;
    },

    /**
     * @override {@link Ext.util.Floating.#fitContainer} override to make maximize to be constrained to the desktop region.
     */
    fitContainer: function(animate) {
        var me = this,
            _box = me.getDesktop().getRootXWindow().getDesk().getSize(),
            _deskRegion = me.getDesktop().getRootXWindow().getDesk().getRegion();
        _box.x = _deskRegion.x;
        _box.y = _deskRegion.y;
        me.setBox(_box, animate);

    }

    /**
     * @override {@link Ext.panel.Panel.#initSimpleDraggable}
     *
     */
//    initSimpleDraggable: function() {
//        var me = this;
//        me.callParent();
//        if(me.dd) {
//            // override {@link Ext.util.ComponentDragger.onDrag()};
//            me.dd.onDrag = function(e) {
//                var _offset = me.dd.getOffset(),
//                    _deskRegion = me.desk.getRegion(),
//                    endXY = [me.dd.startPosition[0] + _offset[0], me.dd.startPosition[1] + _offset[1]];
//                // adjust offset;
//                if(endXY[1] < _deskRegion.top) {
//                    endXY[1] = _deskRegion.top;
//                } else if(endXY[1] > _deskRegion.bottom - me.header.getHeight()) {
//                    endXY[1] = _deskRegion.bottom - me.header.getHeight();
//                }
//
//                me.setPagePosition(endXY[0], endXY[1]);
//            };
//        }
//    }

});
