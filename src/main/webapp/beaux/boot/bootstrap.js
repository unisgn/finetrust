Ext.log('start ext;');

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Beaux': '.',
        'Finetrust':'./usr/finetrust'
    }
});

Ext.Loader.loadScript('./sys/lib/override.js');

Ext.Loader.loadScript('./core/Beaux.js');


// doesn't work on extjs5
/*Ext.getDoc().on({
    contextmenu: function(e) { e.stopEvent(); }
});*/

Ext.require('Beaux.sys.apps.loginmgr.LoginMgr');
Ext.require('Beaux.sys.apps.cassie.Cassie');

Ext.onReady(function () {


    // disable browser oncontextmenu event
    Ext.getBody().on({
        contextmenu: function(e) {
            e.stopEvent();
        }
    });

    Beaux.setDisplayManager(null);
    Beaux.setDesktopManager(Beaux.sys.apps.cassie.Cassie);
    Beaux.boot();

});
