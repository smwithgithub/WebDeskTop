/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SMDESKTOP.Application',

    name: 'SMDESKTOP',

    requires: [
        // This will automatically load all classes in the SMDESKTOP namespace
        // so that application classes do not need to require each other.
        'SMDESKTOP.*'
    ],

    // The name of the initial view to create.
    mainView: 'SMDESKTOP.view.main.Login.LoginView'
});
