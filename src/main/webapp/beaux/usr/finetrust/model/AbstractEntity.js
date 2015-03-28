/**
 * Created by 0xFranCiS on Mar 23, 2015..
 */
;Ext.define('Finetrust.model.AbstractEntity', {
    extend: 'Ext.data.Model',
    fields:[
        {name:'createdBy', type:'string'},
        {name:'createdDate', type:'int', defaultValue: new Date().getTime()},
        {name:'lastModifiedBy', type:'string'},
        {name:'lastModifiedDate', type:'int', defaultValue:new Date().getTime()},
        {name:'version', type:'int'},
        {name:'archived', type:'boolean'},
        {name:'active', type:'boolean', defaultValue: true}
    ]
});