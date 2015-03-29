/**
 * Created by 0xFranCiS on Mar 23, 2015..
 */
;Ext.define('Finetrust.model.Project', {
    extend: 'Finetrust.model.BusinessEntity',
    fields:[
        {name:'feeRate', type:'float', comment:'费率'},
        {name:'estimateScale', type:'int'},
        {name:'duration', type:'int'},
        {name:'estimateSetupDate', type:'date', defaultValue: new Date().getTime()}
    ],
    proxy:{
        type:'rest',
        url:'../rest/project.json',
        reader: {
            type:'json'
        }
    }
});