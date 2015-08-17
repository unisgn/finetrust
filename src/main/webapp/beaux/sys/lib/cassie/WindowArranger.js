Ext.define('Beaux.sys.lib.cassie.WindowArranger', {
    singleton: true,
    requires:[
        'Beaux.sys.apps.cassie.Cassie'
    ],

    /**
     * @static
     * @final
     * @brief the ratio of the transformed window to its arranged cell;
     */
    FIX_RATIO: 0.9,

    /**
     * @static
     * @final
     */
    GOLDEN_RATIO: 1.6,


    /**
     * @private
     * @property
     * @brief flag status
     */
    arranged: false,

    /**
     * @public
     */

    toggleArrangeWindows: function() {
        var me = this;
        var _winCount = me.getWindowManager().getWindows().length;
        if(_winCount > 0) {
            me[me.arranged ? 'resetWindows':'arrangeWindows']();
        }
    },

    /**
     * @public
     * @brief arrange windows to desk in cell grid;
     */
    arrangeWindows: function() {
        var me = this;
        if (!me.arranged) {
            var _wins = me.getWindowManager().getWindows();// a MixedCollections
            var _winCount = _wins.length;
            if (_winCount) {
                var _desk = me.getDesk();
                var _deskRegion = me.getDeskRegion();
                var _regionRate = _desk.getWidth() / _desk.getHeight();
                var _cellGrid = me.makeCellGrid(_regionRate, _winCount);

                var _cellWidth = _desk.getWidth() / _cellGrid.cols;
                var _cellHeight = _desk.getHeight() / _cellGrid.rows;

                _wins.each(function(_win, idx) {
                    var _cellX = idx % _cellGrid.cols;
                    var _cellY = Math.floor(idx / _cellGrid.cols);

                    // http://www.eleqtriq.com/wp-content/static/demos/2010/css3d/matrix2dExplorer.html
                    // http://dev.opera.com/articles/view/understanding-the-css-transforms-matrix/
                    var _dx = (_deskRegion.left + _cellWidth / 2) + _cellX * _cellWidth - (_win.getRegion().left + _win.getRegion().right) / 2;
                    var _dy = (_deskRegion.top + _cellHeight / 2) + _cellY * _cellHeight - (_win.getRegion().top + _win.getRegion().bottom) / 2;

                    var _r1 = _win.getWidth() / _cellWidth;
                    var _r2 = _win.getHeight() / _cellHeight;

                    var _ratio = (_r1 <= me.FIX_RATIO && _r2 <= me.FIX_RATIO) ? 1 : me.FIX_RATIO/Math.max(_r1, _r2);
                    _win.transform(_ratio, _dx, _dy);
                });
            }
            me.arranged = true;
        }
    },

    /**
     * @public
     */
    resetWindows: function() {
        var me = this;
        if (me.arranged) {
            var _wins = me.getWindowManager().getWindows();
            if (_wins.length) {
                _wins.each( function(_win) {
                    _win.resetTransform();
                });
            }
            me.arranged = false;
        }
    },

    /**
     * @public
     * @returns {boolean}
     */
    isArranged: function () {
        return this.arranged;
    },

    /**
     * @public
     * @returns {Object}
     */
    getDesk: function() {
        return Beaux.sys.apps.cassie.Cassie.getRootXWindow().getDesk();
    },

    /**
     * @private
     */
    getWindowManager: function() {
        return Beaux.sys.lib.cassie.WindowManager;
    },

    /**
     * @private
     */
    getDeskRegion: function() {
        return this.getDesk().getRegion();
    },

    /**
     * initial grid is {rows: 1, columns: 1}
     * then we add a row or column depending on which will make the cell ratio
     * more closer to our golden ratio.
     * until the given count less than cell count
     * @private
     * @brief calculate a cell grid by given (windows) ratio(=region.width / region.height)
     * and (windows) count.
     * @returns {{rows: Number, cols: Number}}
     */
    makeCellGrid: function(_ratio, _count) {
        var g_ratio = this.GOLDEN_RATIO;
        var rows = 1;
        var cols = 1;
        if(_count == 1) {
            return {rows: rows, cols: cols};
        } else {
            var r_row, // cell ratio if add row
                r_col; // cell ratio if add col
            while (_count > rows * cols) {
                r_row = (rows + 1) * _ratio / cols; // ((rows + 1) / cols) * _ratio
                r_col = rows * _ratio / (cols + 1); // (rows / (cols + 1)) * _ratio
                if (Math.abs(g_ratio - r_row) < Math.abs(g_ratio - r_col)) {
                    rows++;
                } else {
                    cols++;
                }
            }
        }
        return {rows: rows, cols: cols};
    }
});
