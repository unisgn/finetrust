/**
 * Created by 0xFranCiS on Mar 23, 2015..
 */
;Ext.define('Finetrust.lib.CustomIdGenerator', {
    extend: 'Ext.data.identifier.Generator',
    alias: 'data.identifier.primitive',
    generate: function () {
        return 0; // a new id
    }
});
;Ext.define('Finetrust.model.AbstractEntity', {
    extend: 'Ext.data.Model',
    fields:[
        {name:'createdDate', type:'int', defaultValue: new Date().getTime()},
        {name:'lastModifiedDate', type:'int', defaultValue:new Date().getTime()},
        {name:'version', type:'int'},
        {name:'archived', type:'boolean', defaultValue:false},
        {name:'active', type:'boolean', defaultValue: true}
    ],
    versionProperty: 'version',
    identifier:'primitive',
    schema: {
        namespace: 'Finetrust.model',
        proxy:{
            type:'rest',
            url:'../rest/{entityName}',
            format: 'json',
            reader:{
                type:'json',
                rootProperty: 'data'
            }
        }
    }
});