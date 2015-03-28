Ext.define('Beaux.sys.apps.cassie.panelWidget.AppsMenu', {
    extend: 'Beaux.sys.lib.cassie.PanelWidget',
    requires: [
        'Beaux.sys.lib.ApplicationLauncher'
    ],

    /**
     * @override
     */
    initComponent: function () {
        var me = this;
        me.items = [
            Ext.create('Ext.toolbar.Toolbar', {
                items: [{
                    text: '标准协议',
                    menu: [{
                        text: '标准协议发布'
                    }, {
                        text: '产品目录'
                    }]
                }, {
                    text: '项目管理',
                    menu: {
                        xtype: 'menu',
                        items: [{
                            text: '项目立项',
                            menu: {
                                xtype: 'menu',
                                items: [{
                                    text: '立项',
                                    handler: function () {
                                        me.launchApp('Finetrust.apps.ProjectHub', {mode: 'CREATE'});
                                    },
                                    scope: me
                                }, {
                                    text: '市场要素',
                                    handler: function () {
                                        me.launchApp('Finetrust.apps.ProjectHub', {mode: 'MARKET'});
                                    },
                                    scope: me
                                }, {
                                    text: '上线',
                                    handler: function () {
                                        me.launchApp('Finetrust.apps.ProjectHub', {mode: 'ONLINE'});
                                    },
                                    scope: me
                                }]
                            }
                        }, {
                            text: '项目运营',
                            menu: {
                                xtype: 'menu',
                                items: [{
                                    text: '权限分配',
                                    handler: function () {
                                        me.launchApp('Finetrust.apps.ProjectHub', {mode: 'PERMISSION'});
                                    },
                                    scope: me
                                }, {
                                    text: '要素审核',
                                    handler: function () {
                                        me.launchApp('Finetrust.apps.ProjectHub', {mode: 'APPROVE'});
                                    },
                                    scope: me
                                }, {
                                    text: '账户',
                                    handler: function () {
                                        me.launchApp('Finetrust.apps.ProjectHub', {mode: 'ACCOUNTS'});
                                    },
                                    scope: me
                                }]
                            }
                        }, {
                            text: '项目监督',
                            menu: {
                                xtype: 'menu',
                                items: [{
                                    text: '投资监督事项',
                                    handler: function () {
                                        me.launchApp('Finetrust.apps.ProjectHub', {mode: 'SUPERVISE'});
                                    },
                                    scope: me
                                }, {
                                    text: '手工监督产品投资'
                                }]
                            }
                        }, {
                            text: '项目归档',
                            handler: function () {
                                me.launchApp('Finetrust.apps.ProjectHub', {mode: 'ARCHIVE'});
                            },
                            scope: me
                        }]
                    }
                }, {
                    text: '客户管理',
                    menu: {
                        xtype: 'menu',
                        items: [{
                            text: '客户信息'
                        }, {
                            text: '客户经理'
                        }]
                    }
                }, {
                    text: '公共信息',
                    menu: {
                        xtype: 'menu',
                        items: [{
                            text: '通知公告'
                        }, {
                            text: '规章制度'
                        }, {
                            text: '产品动态'
                        }, {
                            text: '营销动态'
                        }, {
                            text: '培训资料'
                        }, {
                            text: '考评信息'
                        }]
                    }
                }, {
                    text: '系统管理',
                    menu: {
                        xtype: 'menu',
                        items: [{
                            text: '组织机构',
                            menu: {
                                xtype: 'menu',
                                items: [{
                                    text: '机构'
                                }, {
                                    text: '部门'
                                }, {
                                    text: '岗位'
                                }]
                            }
                        }, {
                            text: '审批链'
                        }, {
                            text: '账户&权限',
                            menu: {
                                xtype: 'menu',
                                items: [{
                                    text: '用户'
                                }, {
                                    text: '角色'
                                }, {
                                    text: '权限'
                                }, {
                                    text: '登陆日志'
                                }]
                            }
                        }]
                    }
                }]

            })
        ];

        me.callParent();

    },

    getApplicationLauncher: function () {
        return Beaux.sys.lib.ApplicationLauncher;
    },

    /**
     * @private
     * @param {String} appCls class name for the app to launch
     * @param {Object} [cfg]
     */
    launchApp: function (appCls, cfg) {
        Beaux.sys.lib.ApplicationLauncher.launchApp(appCls, cfg || {});
    }
});