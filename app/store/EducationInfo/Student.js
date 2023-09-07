Ext.define('SMDESKTOP.store.EducationInfo.Student', {
    extend: 'Ext.data.Store',

    alias: 'store.student',

    model: 'SMDESKTOP.model.EducationModel.StudentModel',

    data: { items: [
        { name: 'SM Shamim', roll:'105660', depertment:'CSE', email: "sm.shamim@enterprise.com", phone: "555-111-1111" },
        { name: 'Neo Was',   roll:'105660', depertment:'Chemical',  email: "mr.neowas@enterprise.com",        phone: "555-444-4444" },
        { name: 'Abu Nasim',  roll:'105660', depertment:'CSE',   email: "abu.nasim@enterprise.com",  phone: "555-222-2222" },
        { name: 'Akib',   roll:'105660', depertment:'Chemical',  email: "mr.akib@enterprise.com",        phone: "555-444-4444" },
        { name: 'Hasibul Hasan', roll:'105660', depertment:'CSE',  email: "hasibul.hasan@enterprise.com",    phone: "555-333-3333" },
        { name: 'Rajib',   roll:'105660', depertment:'Mechanical',  email: "mr.rajib@enterprise.com",        phone: "555-444-4444" },
        
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
