Ext.define('SMDESKTOP.view.main.Login.LoginView', {
    extend: 'Ext.Container',
    xtype: 'login',
    controller: 'login',
    viewModel: 'main',

    ui: 'navigation',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'SMDESKTOP.view.main.Login.LoginController',
        'SMDESKTOP.view.main.Main',
    ],

    autoSize: true,

    width: 450,
    height: 500,
    layout: {
        type: 'vbox',
        align: 'middle',
        pack:'center',
        
        
    },
    scrollable: 'y',
    // otherContent: [
    //     {
    //         type: 'Controller',
    //         path: 'TukTakSoftMake.view.main.LoginController.js'
    //     }
    // ],
    // setting the background of the container
    style:{
        backgroundImage:'url(resources/images/backgroundnew.jpg)',
        // backgroundColor:'#3A0A4E',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover',

    },

    items: [
        {
            xtype: 'form',
            height: 650,
            width: 700,
            reference: 'formLogin',
            bodyPadding: 30,
            // bodyStyle:{'background-image': 'linear-gradient(#FF1AFF, #FF99FF,#FF33FF,#CC00CC);'},
            bodyStyle:{'background-color': '#00008B',
                        'opacity':'70%'
        },
            style: {
                borderColor:'#98fb98',
                borderStyle:'solid',
                borderWidth:'2px',
                borderRadius:'10px',
                // opacity:'80%',
                position:'cover'
                
            },
            

            items: [
                {
                    xtype: 'image',
                    height: 150,
                    width: 400,
                    margin: '0 0 0 100',
                    alt: 'logo',
                    src: Ext.theme.name === "Aria" ? 'resources/images/logo.png' : 'resources/images/logo.png',
                    align:'center',
                    pack:'center',
                    style: {
                        opacity:'80%'
                    }
                },
                
                {
                    xtype: 'component',
                    width: 280,
                    height: 27,
                    margin: '15 0 0 130',
                    html: 'Welcome To Tuktak SoftMake',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'margin': 'auto',
                        'color':'#ffffff',
                        opacity:'100%'
                    }
                },

                {
                    xtype: 'component',
                    reference: 'formLoginFailure',
                    tpl: '<tpl if="errors.length">' +
                        '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                        ' Login Failure</span>' +
                        '</tpl>',
                    height: 26,
                    width: 280,
                    margin: '0 0 0 10',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'color':'#ffffff',
                    }
                },

                {
                    xtype: 'component',
                    width: 280,
                    height: 27,
                    margin: '10 0 0 125',
                    html: 'Login Into Your Account',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'margin': 'auto',
                        'color':'#ffffff',
                        
                    }
                },
                
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    id:'emailField',
                    fieldStyle: 'color: #000000;',
                    width: 400,
                    margin: "35 0 0 80",
                    fieldLabel: 'Email Address',
                    name: 'email',
                    placeholder: 'Email Address',
                    msgTarget: 'qtip',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    },
                    style: {
                        'color':'#000000',
                    }
                },
                {
                    xtype: 'textfield',
                    inputType: 'password',
                    allowBlank: false,
                    required: true,
                    width: 400,
                    id:'passwordField',
                    fieldLabel: 'Password',
                    fieldStyle: 'color: #000000;',
                    name: 'pass',
                    placeholder: 'password',
                    msgTarget: 'qtip',
                    margin: "25 0 0 80",
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    },
                    style: {
                        'color':'#000000',
                    }
                
                },
                {
                    xtype: 'checkbox',
                    width: 280,
                    height: 30,
                    id:'loginCheckBox',
                    boxLabel: 'Keep me logged in',
                    name: 'remember',
                    margin: "50 0 0 115",
                    style: {
                        'font-size': '16px',
                        'letter-spacing': '1.25px',
                        'color': '#ffffff'
                    }
                },
                {
                    xtype: 'button',
                    text: 'LOG IN',
                    id:'loginButton',
                    autoSize: true,
                    handler: 'onLogin',
                    height: 30,
                    width: 280,
                    margin: '50 0 0 150',
                    
                    style: {
                        backgroundColor: '#ffffff',
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'font-size': '14px',
                        borderColor:'#98fb98',
                        borderStyle:'solid',
                        borderWidth:'2px',
                        borderRadius:'8px',
                        
                    }
                },
                {
                    xtype: 'component',
                    html: "<a style='color: var(--base-color);text-decoration: none;' href='#template-reset-password'>Forgot your Password?</a>",
                    style: {
                        'font-size': '16px',
                        'text-align': 'center'
                    },
                    width: 280,
                    margin: "20 0 0 150"
                }
            ]
        },
        {
            xtype: 'component',
            margin: "4 0 0 115",
            width: 280,
            style: {
                'font-size': '16px',
                'text-align': 'center',
                'color': 'var(--base-foreground-color)',
                'letter-spacing': '1.25px'
            },
            html: 'Don’t have an account?' +
            "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;'> Sign-Up</a>"
        }
    ]
    
});