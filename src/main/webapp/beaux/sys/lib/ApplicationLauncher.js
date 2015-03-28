;Ext.define('Beaux.sys.lib.ApplicationLauncher', {
    singleton: true,
    launchApp: function(_appCls, _cfg) {
        var cfg = _cfg || {};
        Ext.require(_appCls, function() {
            var app = Ext.ClassManager.get(_appCls);
            if (app && app.launch) {
                app.launch(cfg);
            }
        });

    }
});
