(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{185:function(t,o,s){"use strict";s.r(o);s(1),s(2);var i={data:function(){return{processing:!1,android_state:"null",loc_found:!1}},methods:{askForGpsLocation:function(){this.$store.getters.gps_permission?this.getLocationByGps():(this.android_state="getting_permit",this.$store.dispatch("setAndroidResponse","waiting"),this.requestGpsPermission())},getLocationByGps:function(){this.processing=!0,navigator.geolocation.getCurrentPosition(this.setPosition)},setPosition:function(t){var o={lat:t.coords.latitude,long:t.coords.longitude};try{this.processing=!1,this.android_state="getting_loc",this.loc_found=!1,this.$store.dispatch("setAndroidResponse","waiting"),Android.startLocationSystem(o.lat,o.long)}catch(t){Android.log("something went wrong")}},requestGpsPermission:function(){try{Android.requestGpsPermission()}catch(t){}}},computed:{androidResponse:function(){return this.$store.getters.android_response}},created:function(){this.$store.dispatch("showBottomNav",!1);try{Android.requestLocationSetting()}catch(t){}},watch:{androidResponse:function(t,o){if("waiting"===o&&"done"===t)if("getting_permit"==this.android_state)this.$store.getters.gps_permission?this.getLocationByGps():this.$router.push("/app/set_location/manual");else if("getting_loc"==this.android_state)if(localStorage.setItem("current_location",this.$store.state.current_location),localStorage.setItem("location_description",this.description),localStorage.setItem("latlong",JSON.stringify(this.$store.state.lat_long)),this.loc_found)this.$router.push("/app/landing_page");else try{Android.showToast("You didn't set location !")}catch(t){}}}},n=(s(80),s(0)),e=Object(n.a)(i,function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("v-layout",{staticClass:"white",attrs:{"justify-center":"","align-center":"","fill-height":""}},[t.processing?s("v-progress-circular",{attrs:{indeterminate:"",color:"amber"}}):s("div",{staticClass:"setloc"},[s("v-btn",{staticClass:"white--text",attrs:{color:"success",large:""},on:{click:function(o){return t.askForGpsLocation()}}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v("my_location")]),t._v("\n            SET LOCATION\n        ")],1),t._v(" "),s("div",{staticClass:"img",staticStyle:{display:"flex","flex-flow":"row","justify-content":"center"}},[s("img",{attrs:{src:"https://foodyla.b-cdn.net/system_icons/burgerDrink.svg"}})])],1)],1)},[],!1,null,"684c5438",null);o.default=e.exports},20:function(t,o,s){var i=s(81);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(4)(i,n);i.locals&&(t.exports=i.locals)},80:function(t,o,s){"use strict";var i=s(20);s.n(i).a},81:function(t,o,s){(t.exports=s(3)(!1)).push([t.i,"\ndiv.img[data-v-684c5438] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\n}\nimg[data-v-684c5438] {\r\n    border-style: none;\r\n    position: absolute;\r\n    top: 100px;\r\n    width: 40%;\n}\r\n",""])}}]);