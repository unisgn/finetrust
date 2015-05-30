;(function () {
    /**
     * @private
     * @type {Beaux.sys.lib.DesktopEnvironment}
     */
    var de;

    /**
     * private
     */
    var dm;

    /**
     * @private
     * @type {Beaux.core.ProcMgr}
     */
    var processMgr = Ext.create('Beaux.core.ProcMgr');

    /**
     *
     * @returns {Beaux.sys.lib.DesktopEnvironment}
     */
    Beaux.getDesktopManager = function () {
        return de;
    };

    /**
     *
     * @param {Beaux.sys.lib.DesktopEnvironment} desktopMgr
     */
    Beaux.setDesktopManager = function (desktopMgr) {
        de = desktopMgr;
    };

    Beaux.getDisplayManager = function () {
        return dm;
    };

    Beaux.setDisplayManager = function (displayMgr) {
        dm = displayMgr;
    };

    Beaux.getProcessMgr = function () {
        return processMgr;
    };

    /**
     * @public
     */
    Beaux.boot = function () {
        Ext.log('start beaux boot;');

        Beaux.sys.lib.XServer.main();


        if (dm) {
            dm.main();
        } else if (de) {
            de.main();
        }

        Ext.log('beaux loaded;');
    }

}());
