;(function () {
    /**
     * @private
     * @type {Beaux.sys.lib.Desktop}
     */
    var desktop;

    /**
     * private
     */
    var loginMgr;

    /**
     * @private
     * @type {Beaux.core.ProcMgr}
     */
    var processMgr = Ext.create('Beaux.core.ProcMgr');

    /**
     *
     * @returns {Beaux.sys.lib.Desktop}
     */
    Beaux.getDesktop = function () {
        return desktop;
    };

    /**
     *
     * @param {Beaux.sys.lib.Desktop} _desktop
     */
    Beaux.setDesktop = function (_desktop) {
        desktop = _desktop;
    };

    Beaux.getLoginMgr = function () {
        return loginMgr;
    };

    Beaux.setLoginMgr = function (_loginMgr) {
        loginMgr = _loginMgr;
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

        if (loginMgr) {
            loginMgr.main();
        } else if (desktop) {
            desktop.main();
        }

        Ext.log('beaux loaded;');
    }

}());
