/**
 * Created by 0xFranCiS on Mar 23, 2015..
 */
;Ext.define('Finetrust.model.AbstractEntity', {
    extend: 'Ext.data.Model',
    fields:[
        {name:'id', type:'int', defaultValue: 0},
        {name:'createdDate', type:'int', defaultValue: new Date().getTime()},
        {name:'lastModifiedDate', type:'int', defaultValue:new Date().getTime()},
        {name:'version', type:'int'},
        {name:'archived', type:'boolean', defaultValue:false},
        {name:'active', type:'boolean', defaultValue: true}
    ]
});