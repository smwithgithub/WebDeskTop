Ext.define('SMDESKTOP.store.EducationInfo.Student', {
    extend: 'Ext.data.Store',

    alias: 'store.student',

    model: 'SMDESKTOP.model.EducationModel.StudentModel',

    data: { items: [
        { name: 'SM Shamim',   roll:'105660', registration:'1500000001', depertment:'CSE', address:'Mahigonj, Rangpur', gender:'Male', email: "sm.shamim@enterprise.com",        phone: "555-111-1111" },

        { name: 'Hasibul Hasan',   roll:'101360', registration:'1500444001', depertment:'CSE', address:'Noyakhali', gender:'Male', email: "hasibul.hasan@enterprise.com",        phone: "555-333-3333" },

        { name: 'Rajib',   roll:'161460', registration:'1502344001', depertment:'Mechanical', address:'Manikgonj', gender:'Male', email: "mr.rajib@enterprise.com",        phone: "555-444-4444" },

        { name: 'Jakiya Tabasshum',   roll:'161460', registration:'1502355501', depertment:'CMT', address:'Shirajgonj', gender:'Female', email: "jakiyatabasshum@enterprise.com",        phone: "555-444-4444" },

        { name: 'Kamrujjaman',   roll:'146892', registration:'1503335501', depertment:'Mechanical', address:'Charpur', gender:'Male', email: "kamrujjaman@enterprise.com",        phone: "555-000-4444" },

        { name: 'Abu Nasim',   roll:'103654', registration:'1500011101', depertment:'CSE', address:'Maal-Gram, Bogura', gender:'Male', email: "abu.nasim@enterprise.com",        phone: "555-444-4444" },
        
        { name: 'Akib',   roll:'143654', registration:'1502211101', depertment:'EEE', address:'JigaTola, Chadpur', gender:'Male', email: "mr.akib@enterprise.com",        phone: "555-222-4444" },

        { name: 'Neo Was',   roll:'105660', registration:'1500000001', depertment:'Chemical', address:'Taout-Gram, Noyakhali', gender:'Male', email: "mr.neowas@enterprise.com",        phone: "555-444-4444" },

        { name: 'Nila Rayhan',   roll:'140054', registration:'1503331101', depertment:'Electrical', address:'Pirgacha, Rangpur', gender:'Female', email: "mis.nila@enterprise.com",        phone: "555-505-1111" },
        
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
