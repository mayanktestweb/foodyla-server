(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{167:function(t,e,a){"use strict";a.r(e);var n={methods:{logout:function(){this.$store.dispatch("setMobileNumber",null);try{Android.logout()}catch(t){}}},created:function(){this.$store.dispatch("setActiveOption","account")}},i=(a(93),a(0)),r=Object(i.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grey lighten-3",staticStyle:{height:"100%"}},[a("div",{staticClass:"header white"},[a("div",{staticClass:"name title grey--text text--darken-2"},[t._v(t._s(this.$store.state.user_name))]),t._v(" "),a("div",{staticClass:"spacer"}),t._v(" "),a("div",{staticClass:"avatar"},[a("img",{attrs:{src:this.$store.state.user_image,alt:""}})])]),t._v(" "),a("div",{staticClass:"contact white"},[a("div",{staticClass:"heading font-weight-bold grey--text text--darken-1"},[t._v("Contact Details")]),t._v(" "),a("div",{staticClass:"email font-weight-medium grey--text text--darken-2"},[t._v("Email : "+t._s(this.$store.state.user_email))]),t._v(" "),a("div",{staticClass:"phone font-weight-medium grey--text text--darken-2"},[t._v("Mobile Number : \n            "),null!=this.$store.state.mobile_number&&this.$store.state.mobile_number.match(/\b\d{10}\b/)?a("span",[t._v("\n                "+t._s(this.$store.state.mobile_number)+"\n            ")]):a("v-btn",{attrs:{color:"success",flat:"",to:"/app/add_mobile_number"}},[t._v("ADD MOBILE NUMBER")])],1)]),t._v(" "),a("div",{staticClass:"contact white"},[a("v-btn",{attrs:{color:"success",dark:"",to:"/app/orders"}},[t._v("Show Orders")]),t._v(" "),a("v-btn",{attrs:{color:"warning",dark:""},on:{click:function(e){return t.logout()}}},[t._v("Logout")])],1)])},[],!1,null,"2fda69c6",null);e.default=r.exports},26:function(t,e,a){var n=a(94);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(4)(n,i);n.locals&&(t.exports=n.locals)},93:function(t,e,a){"use strict";var n=a(26);a.n(n).a},94:function(t,e,a){(t.exports=a(3)(!1)).push([t.i,"\ndiv.header[data-v-2fda69c6] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row;\r\n    height: 80px;\r\n    padding: 5px;\r\n    box-shadow: 2px 2px 3px lightgrey;\n}\ndiv.name[data-v-2fda69c6] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    padding: 5px;\n}\ndiv.spacer[data-v-2fda69c6] {\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\n}\ndiv.avatar[data-v-2fda69c6] {\r\n    height: 70px;\r\n    width: 70px;\r\n    border-radius: 35px;\r\n    flex-shrink: 0;\n}\ndiv.avatar img[data-v-2fda69c6] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 35px;\n}\ndiv.contact[data-v-2fda69c6] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n    margin-top: 50px;\n}\ndiv.contact div[data-v-2fda69c6] {\r\n    padding-left: 8px;\r\n    font-size: 1.2em;\n}\ndiv.heading[data-v-2fda69c6] {\r\n    padding: 8px;\n}\r\n",""])}}]);