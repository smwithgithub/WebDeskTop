// Ext.define('SMDESKTOP.view.main.CircleDemo', {
//     extend: 'Ext.Component',
//     alias: 'widget.percentagecircle',
//     xtype:'percentagecircle',

//     config: {
//         percentage: 0 // Default percentage value
//     },

//     listeners: {
//         afterrender: function () {
//             this.drawCircle();
//         }
//     },

//     drawCircle: function () {
//         var me = this;
//         var percentage = me.getPercentage();
//         var circleColor = '#007ACC'; // Circle color
//         var size = 100; // Circle size

//         var surface = Ext.create('Ext.draw.Surface', {
//             width: size,
//             height: size
//         });

//         me.add(surface);

//         var draw = Ext.create('Ext.draw.sprite.Arc', {
//             surface: surface,
//             cx: size / 2,
//             cy: size / 2,
//             r: size / 2,
//             fillStyle: circleColor,
//             startAngle: 0,
//             endAngle: 2 * Math.PI * percentage,
//             anticlockwise: false
//         });

//         surface.add([draw]);
//     },

//     updatePercentage: function (percentage) {
//         var me = this;
//         var surface = me.down('surface');
//         var draw = surface.items.first();

//         if (draw) {
//             draw.setAttributes({
//                 endAngle: 2 * Math.PI * percentage
//             });
//             surface.renderFrame();
//         }
//     }
// });
