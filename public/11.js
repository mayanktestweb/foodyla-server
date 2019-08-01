(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/SetLocation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mobile/SetLocation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../AppConst */ "./resources/js/AppConst.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      processing: false
    };
  },
  methods: {
    askForGpsLocation: function askForGpsLocation() {
      if (this.$store.getters.gps_permission) {
        this.getLocationByGps();
      } else {
        this.$store.dispatch('setAndroidResponse', 'waiting');
        this.requestGpsPermission();
      }
    },
    getLocationByGps: function getLocationByGps() {
      this.processing = true;
      navigator.geolocation.getCurrentPosition(this.setPosition);
    },
    setPosition: function setPosition(position) {
      var _this = this;

      var value = {
        lat: position.coords.latitude,
        "long": position.coords.longitude
      };
      this.$store.dispatch('setLatLong', value).then(function () {
        // send coordinates for reverse geo encoding
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_AppConst__WEBPACK_IMPORTED_MODULE_1__["default"].get_location, {
          params: {
            latlng: value.lat + "," + value["long"],
            key: "AIzaSyCbZnPgGn9-uDMQW4uP89ctM7MXsD4kysE"
          }
        }).then(function (response) {
          if (response.status == '200') {
            _this.processing = false;

            _this.$store.dispatch('emptyRestaurants');

            _this.$store.dispatch('setCurrentLocation', response.data.formatted_address);

            _this.$router.push("/app/confirm_gps_location");
          }
        })["catch"](function (error) {
          try {
            Android.log(error);
          } catch (error) {}
        });
      });
    },
    requestGpsPermission: function requestGpsPermission() {
      try {
        Android.requestGpsPermission();
      } catch (error) {}
    }
  },
  computed: {
    androidResponse: function androidResponse() {
      return this.$store.getters.android_response;
    }
  },
  created: function created() {
    this.$store.dispatch("showBottomNav", false);
  },
  watch: {
    androidResponse: function androidResponse(newVal, oldVal) {
      if (oldVal === 'waiting' && newVal === 'done') {
        if (this.$store.getters.gps_permission) {
          this.getLocationByGps();
        } else {
          this.$router.push('/app/set_location/manual');
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    {
      staticClass: "white",
      attrs: { "justify-center": "", "align-center": "", "fill-height": "" }
    },
    [
      _vm.processing
        ? _c("v-progress-circular", {
            attrs: { indeterminate: "", color: "amber" }
          })
        : _c(
            "v-btn",
            {
              staticClass: "white--text",
              attrs: { color: "success", large: "" },
              on: {
                click: function($event) {
                  return _vm.askForGpsLocation()
                }
              }
            },
            [
              _c("v-icon", { attrs: { left: "", dark: "" } }, [
                _vm._v("my_location")
              ]),
              _vm._v("\n        SET LOCATION\n    ")
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/mobile/SetLocation.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/mobile/SetLocation.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SetLocation_vue_vue_type_template_id_247e2669___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetLocation.vue?vue&type=template&id=247e2669& */ "./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669&");
/* harmony import */ var _SetLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetLocation.vue?vue&type=script&lang=js& */ "./resources/js/views/mobile/SetLocation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SetLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetLocation_vue_vue_type_template_id_247e2669___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SetLocation_vue_vue_type_template_id_247e2669___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/mobile/SetLocation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/mobile/SetLocation.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/mobile/SetLocation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SetLocation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/SetLocation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_template_id_247e2669___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SetLocation.vue?vue&type=template&id=247e2669& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_template_id_247e2669___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_template_id_247e2669___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);