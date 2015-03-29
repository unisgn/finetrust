Ext.log('start ext;');

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Beaux': './.',
        'Finetrust':'./usr/finetrust/.'
    }
});

//Ext.Loader.loadScript('./core/override.js');

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

    Beaux.setLoginMgr(null);
    Beaux.setDesktop(Beaux.sys.apps.cassie.Cassie);
    Beaux.boot();

});
