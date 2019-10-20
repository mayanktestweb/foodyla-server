(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      processing: false,
      android_state: "null",
      loc_found: false
    };
  },
  methods: {
    askForGpsLocation: function askForGpsLocation() {
      if (this.$store.getters.gps_permission) {
        this.getLocationByGps();
      } else {
        this.android_state = "getting_permit";
        this.$store.dispatch('setAndroidResponse', 'waiting');
        this.requestGpsPermission();
      }
    },
    getLocationByGps: function getLocationByGps() {
      this.processing = true;
      navigator.geolocation.getCurrentPosition(this.setPosition);
    },
    setPosition: function setPosition(position) {
      var value = {
        lat: position.coords.latitude,
        "long": position.coords.longitude
      };

      try {
        this.processing = false;
        this.android_state = "getting_loc";
        this.loc_found = false;
        this.$store.dispatch('setAndroidResponse', 'waiting');
        Android.startLocationSystem(value.lat, value["long"]);
      } catch (error) {
        Android.log("something went wrong");
      }
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

    try {
      Android.requestLocationSetting();
    } catch (error) {}
  },
  watch: {
    androidResponse: function androidResponse(newVal, oldVal) {
      if (oldVal === 'waiting' && newVal === 'done') {
        if (this.android_state == "getting_permit") {
          if (this.$store.getters.gps_permission) {
            this.getLocationByGps();
          } else {
            this.$router.push('/app/set_location/manual');
          }
        } else if (this.android_state == "getting_loc") {
          localStorage.setItem("current_location", this.$store.state.current_location);
          localStorage.setItem("location_description", this.description);
          localStorage.setItem("latlong", JSON.stringify(this.$store.state.lat_long));

          if (this.loc_found) {
            this.$router.push("/app/landing_page");
          } else {
            try {
              Android.showToast("You didn't set location !");
            } catch (error) {}
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mobile/SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.img[data-v-247e2669] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\n}\nimg[data-v-247e2669] {\r\n    border-style: none;\r\n    position: absolute;\r\n    top: 100px;\r\n    width: 40%;\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mobile/SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            "div",
            { staticClass: "setloc" },
            [
              _c(
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
                  _vm._v("\n            SET LOCATION\n        ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "img",
                  staticStyle: {
                    display: "flex",
                    "flex-flow": "row",
                    "justify-content": "center"
                  }
                },
                [
                  _c("img", {
                    attrs: {
                      src:
                        "https://foodyla.b-cdn.net/system_icons/burgerDrink.svg"
                    }
                  })
                ]
              )
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
/* harmony import */ var _SetLocation_vue_vue_type_template_id_247e2669_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetLocation.vue?vue&type=template&id=247e2669&scoped=true& */ "./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669&scoped=true&");
/* harmony import */ var _SetLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetLocation.vue?vue&type=script&lang=js& */ "./resources/js/views/mobile/SetLocation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SetLocation_vue_vue_type_style_index_0_id_247e2669_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css& */ "./resources/js/views/mobile/SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SetLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetLocation_vue_vue_type_template_id_247e2669_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SetLocation_vue_vue_type_template_id_247e2669_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "247e2669",
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

/***/ "./resources/js/views/mobile/SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/mobile/SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_style_index_0_id_247e2669_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/SetLocation.vue?vue&type=style&index=0&id=247e2669&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_style_index_0_id_247e2669_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_style_index_0_id_247e2669_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_style_index_0_id_247e2669_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_style_index_0_id_247e2669_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_style_index_0_id_247e2669_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_template_id_247e2669_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SetLocation.vue?vue&type=template&id=247e2669&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/SetLocation.vue?vue&type=template&id=247e2669&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_template_id_247e2669_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetLocation_vue_vue_type_template_id_247e2669_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);