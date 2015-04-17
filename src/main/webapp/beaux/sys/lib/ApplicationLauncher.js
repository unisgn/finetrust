;Ext.define('Beaux.sys.lib.ApplicationLauncher', {
    singleton: true,

    /**
     *
     * @param {String} app the app class name
     * @param {Object} [cfg]
     */
    launch: function(app, cfg) {
        var _cfg = cfg || {};
        Ext.require(app, function() {
            var _app = Ext.ClassManager.get(app);
            if (_app && _app.launch) {
                _app.launch(_cfg);
            }
        });

    }
});
