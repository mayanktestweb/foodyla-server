(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{146:function(t,e,n){"use strict";n.r(e);var i=n(7),r=n(2),o=n.n(r),a=n(1),s={data:function(){return{mobile_number:"",otp:"",button_state:"get mobile number",showOtp:!0,get_otp:!1,lock_otp:!1,timer:30,progress:!1,app_hash:"nohash"}},created:function(){this.$store.dispatch("showBottomNav",!1);try{this.app_hash=Android.getAppHash()}catch(t){}},computed:{btn_text:function(){return"get mobile number"==this.button_state?"Confirm Mobile Number":"get otp"==this.button_state?"Resend OTP":void 0},disable_button:function(){return"get mobile number"==this.button_state?!this.mobile_number.match(/\b\d{10}\b/):"get otp"==this.button_state?0!=this.timer:void 0},disable_reason:function(){return"get mobile number"==this.button_state?"Enter Valid Mobile Number":"get otp"==this.button_state?"Resend OTP in "+this.timer:void 0}},methods:{goBack:function(){history.back()},onAction:function(){var t=this;if("get mobile number"==this.button_state){try{Android.listenForOtp()}catch(t){}this.progress=!0,o.a.post(a.a.confirm_mobile_number,{user_id:this.$store.state.user_id,mobile_number:this.mobile_number,otp:this.generateOtp(),app_hash:this.app_hash}).then(function(e){t.progress=!1,200==e.status&&(t.button_state="get otp",t.get_otp=!0,t.timer=30,t.startTimer())}).catch(function(t){console.log(t);try{Android.showToast("Sorry Something went wrong")}catch(t){}history.back()})}else"get otp"==this.button_state&&o.a.post(a.a.confirm_mobile_number,{user_id:this.$store.state.user_id,mobile_number:this.mobile_number,otp:this.generateOtp()}).then(function(e){t.timer=30,t.startTimer()})},generateOtp:function(){for(var t=[0,1,2,3,4,5,6,7,8,9],e=[],n=0;n<4;n++)e.push(t[Math.floor(10*Math.random())]);return e.join("")},sendOtp:function(){var t=this;o.a.post(a.a.confirm_otp,{user_id:this.$store.state.user_id,mobile_number:this.mobile_number,otp:this.otp}).then(function(e){if(t.progress=!1,"success"==e.data.status){t.$store.dispatch("setMobileNumber",t.mobile_number);try{Android.showToast("Congratulations verification successful")}catch(t){}}else try{Android.showToast("Sorry Verification failed")}catch(t){}history.back()}).catch(function(e){try{Android.showToast(e)}catch(t){}t.goBack()})},startTimer:function(){var t=this,e=Object(i.setInterval)(function(){t.timer-=1,0==t.timer&&Object(i.clearInterval)(e)},1e3)}},watch:{otp:function(t,e){t.match(/\b\d{4}\b/)&&(this.lock_otp=!0,this.progress=!0,this.sendOtp())}}},c=(n(75),n(0)),l=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main white"},[n("div",{staticClass:"title"},[n("div",{staticClass:"back",on:{click:function(e){return t.goBack()}}},[n("v-icon",[t._v("arrow_back")])],1),t._v(" "),n("div",{staticClass:"text"},[t._v("\n            Add Mobile Number\n        ")])]),t._v(" "),n("div",{staticClass:"mobile_number"},[n("div",{staticClass:"font-weight-medium grey--text text--darken-2 title",attrs:{id:"nineone"}},[t._v("+91 - ")]),t._v(" "),n("div",{attrs:{id:"mn"}},[n("v-text-field",{attrs:{type:"number",label:"Enter Mobile Number",disabled:t.get_otp},model:{value:t.mobile_number,callback:function(e){t.mobile_number=e},expression:"mobile_number"}})],1)]),t._v(" "),t.get_otp?n("div",{staticClass:"otp"},[n("v-text-field",{attrs:{label:"Enter OTP","append-icon":t.showOtp?"visibility":"visibility_off",type:t.showOtp?"number":"password",disabled:t.lock_otp},on:{"click:append":function(e){t.showOtp=!t.showOtp}},model:{value:t.otp,callback:function(e){t.otp=e},expression:"otp"}})],1):t._e(),t._v(" "),t.progress?n("v-progress-circular",{attrs:{indeterminate:"",color:"green"}}):n("div",{staticClass:"action"},[t.disable_button?n("div",{staticClass:"orange--text text--darken-4 font-weight-regular subhead"},[t._v(t._s(t.disable_reason))]):n("v-btn",{attrs:{color:"warning",dark:"",large:"",value:"true"},on:{click:function(e){return t.onAction()}}},[t._v(t._s(t.btn_text))])],1)],1)},[],!1,null,"cc91dc4c",null);e.default=l.exports},22:function(t,e,n){var i=n(76);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,r);i.locals&&(t.exports=i.locals)},75:function(t,e,n){"use strict";var i=n(22);n.n(i).a},76:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\ndiv.main[data-v-cc91dc4c] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    height: 100%;\n}\ndiv.main > div[data-v-cc91dc4c] {\r\n    padding: 5px;\n}\ndiv.title[data-v-cc91dc4c] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row;\r\n    width: 100%;\n}\ndiv.back[data-v-cc91dc4c] {\r\n    width: 10%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 50px;\r\n    -webkit-box-align: center;\r\n            align-items: center;\n}\ndiv.text[data-v-cc91dc4c] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    height: 100%;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n    line-height: 50px;\n}\ndiv.mobile_number[data-v-cc91dc4c] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row;\r\n    width: 100%;\n}\ndiv#nineone[data-v-cc91dc4c] {\r\n    width: 15%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\n}\ndiv#mn[data-v-cc91dc4c] {\r\n    padding: 5px;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\n}\ndiv.otp[data-v-cc91dc4c] {\r\n    padding: 5px;\r\n    width: 40%;\n}\ndiv.action[data-v-cc91dc4c] {\r\n    padding: 5px;\n}\r\n",""])}}]);