(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(t,s,o){"use strict";o.r(s);var n=o(3),e=o.n(n),i=o(4),r={data:function(){return{processing:!1}},methods:{askForGpsLocation:function(){this.$store.getters.gps_permission?this.getLocationByGps():(this.$store.dispatch("setAndroidResponse","waiting"),this.requestGpsPermission())},getLocationByGps:function(){this.processing=!0,navigator.geolocation.getCurrentPosition(this.setPosition)},setPosition:function(t){var s=this,o={lat:t.coords.latitude,long:t.coords.longitude};this.$store.dispatch("setLatLong",o).then(function(){e.a.get(i.a.get_location,{params:{latlng:o.lat+","+o.long,key:"AIzaSyCbZnPgGn9-uDMQW4uP89ctM7MXsD4kysE"}}).then(function(t){"200"==t.status&&(s.processing=!1,s.$store.dispatch("emptyRestaurants"),s.$store.dispatch("setCurrentLocation",t.data.results[0].formatted_address),s.$router.push("/app/confirm_gps_location"))}).catch(function(t){try{Android.log(t)}catch(t){}})})},requestGpsPermission:function(){try{Android.requestGpsPermission()}catch(t){}}},computed:{androidResponse:function(){return this.$store.getters.android_response}},created:function(){this.$store.dispatch("showBottomNav",!1)},watch:{androidResponse:function(t,s){"waiting"===s&&"done"===t&&(this.$store.getters.gps_permission?this.getLocationByGps():this.$router.push("/app/set_location/manual"))}}},a=o(0),c=Object(a.a)(r,function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("v-layout",{staticClass:"white",attrs:{"justify-center":"","align-center":"","fill-height":""}},[t.processing?o("v-progress-circular",{attrs:{indeterminate:"",color:"amber"}}):o("v-btn",{staticClass:"white--text",attrs:{color:"success",large:""},on:{click:function(s){return t.askForGpsLocation()}}},[o("v-icon",{attrs:{left:"",dark:""}},[t._v("my_location")]),t._v("\n        SET LOCATION\n    ")],1)],1)},[],!1,null,null,null);s.default=c.exports}}]);