(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{116:function(t,i,n){"use strict";n.r(i);var e={data:function(){return{confirm_cod:!1}},created:function(){this.$store.dispatch("showBottomNav",!1),0==this.$store.getters.cart.length&&this.$router.push("/app/landing_page")},methods:{showMsg:function(){try{Android.showToast("This service is not currently available.")}catch(t){}}}},a=(n(68),n(0)),r=Object(a.a)(e,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"mainP white"},[n("div",{staticClass:"titleP green--text title"},[t._v("\n        Select Payment Method\n    ")]),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("div",{staticClass:"payment_option",staticStyle:{opacity:"0.3"},on:{click:function(i){return t.showMsg()}}},[t._m(0),t._v(" "),n("div",{staticClass:"name subheading font-weight-medium grey--text text--darken-3"},[t._v("\n            Paytm\n        ")])]),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("div",{staticClass:"payment_option",staticStyle:{opacity:"0.3"},on:{click:function(i){return t.showMsg()}}},[t._m(1),t._v(" "),n("div",{staticClass:"name subheading font-weight-medium grey--text text--darken-3"},[t._v("PhonePe")])]),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("div",{staticClass:"payment_option",on:{click:function(i){t.confirm_cod=!0}}},[t._m(2),t._v(" "),n("div",{staticClass:"name subheading font-weight-medium grey--text text--darken-3"},[t._v("Cash On Delivery")])]),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("v-dialog",{model:{value:t.confirm_cod,callback:function(i){t.confirm_cod=i},expression:"confirm_cod"}},[n("v-layout",{staticClass:"white",attrs:{"justify-center":"","align-center":"","fill-height":""}},[n("v-btn",{attrs:{color:"warning",dark:"",block:"",large:"",to:"/app/confirm_order"}},[t._v("Confirm Cash ON DELIVERY")])],1)],1)],1)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"img"},[i("img",{attrs:{src:"http://192.168.43.116/img/paytm.png",alt:"paytm image"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"img"},[i("img",{attrs:{src:"http://192.168.43.116/img/phonepe.png",alt:"phonepe"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"img"},[i("img",{attrs:{src:"http://192.168.43.116/img/cash.png",alt:"cash"}})])}],!1,null,"732f3ce4",null);i.default=r.exports},22:function(t,i,n){var e=n(69);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(2)(e,a);e.locals&&(t.exports=e.locals)},68:function(t,i,n){"use strict";var e=n(22);n.n(e).a},69:function(t,i,n){(t.exports=n(1)(!1)).push([t.i,"\ndiv.mainP[data-v-732f3ce4] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n    padding: 0px 8px;\n}\ndiv.titleP[data-v-732f3ce4]{\r\n    padding: 15px;\r\n    text-align: center;\r\n    width: 100%;\n}\ndiv.payment_option[data-v-732f3ce4] {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row;\r\n    padding-left: 5px;\n}\ndiv.payment_option div.img[data-v-732f3ce4] {\r\n    height: 60px;\r\n    width: 60px;\r\n    padding: 8px;\n}\ndiv.payment_option div.img img[data-v-732f3ce4] {\r\n    width: 100%;\r\n    height: 100%;\n}\ndiv.payment_option div.name[data-v-732f3ce4] {\r\n    padding-left: 8px;\r\n    line-height: 60px;\n}\ndiv.divider[data-v-732f3ce4] {\r\n    border-bottom: 1px solid #888;\n}\r\n",""])}}]);