/**
 * Created by 0xFranCiS on Mar 29, 2015.
 */
;
Ext.define('Finetrust.lib.project.Viewer', {
    extend: 'Finetrust.lib.ModelViewer',

    model: 'Finetrust.model.Project',
    title: '项目立项',
    width: 600,
    height: 400,

    buildFormPanel: function () {
        return Ext.create('Ext.form.Panel', {
            layout:'form',
            padding:5,
            defaults: {
                labelWidth: 60,
                labelAlign: 'right'
            },
            defaultType:'textfield',
            items:[{
                fieldLabel: '编号',
                name: 'number'
            }, {
                fieldLabel: '代码',
                name: 'code'
            }, {
                fieldLabel: '名称',
                name: 'name'
            }, {
                fieldLabel: '概述',
                name: 'brief'
            }, {
                fieldLabel: '费率',
                xtype: 'numberfield',
                name: 'feeRate'
            }, {
                fieldLabel: '预计规模',
                xtype: 'numberfield',
                name: 'estimateScale'
            }, {
                fieldLabel: '项目期限',
                xtype: 'numberfield',
                name: 'duration'
            },{
                fieldLabel:'预计上线日期',
                xtype:'datefield',
                name:'estimateSetupDate'
            }]
        });
    }

});