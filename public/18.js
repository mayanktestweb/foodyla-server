(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
      loading: false,
      order_message: "",
      order_successful: false,
      order_id: '1221A5',
      delivery_code: '2341'
    };
  },
  created: function created() {
    this.confirmOrder();
  },
  methods: {
    confirmOrder: function confirmOrder() {
      var _this = this;

      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_AppConst__WEBPACK_IMPORTED_MODULE_1__["default"].confirm_order, {
        user_id: this.$store.state.user_id,
        mobile_number: this.$store.state.mobile_number,
        restaurant_id: this.$store.state.cart_restaurant,
        current_location: this.$store.state.current_location,
        location_description: this.$store.state.location_description,
        latlong: this.$store.state.lat_long.lat + "," + this.$store.state.lat_long["long"],
        order: this.getOrder(),
        delivery_code: this.generateDeliveryCode(),
        applied_discount_coupon: this.$store.state.applied_discount_coupon != null ? this.$store.state.applied_discount_coupon.id : null,
        delivery_charge: this.$store.state.delivery_charge,
        other_discount: this.$store.state.other_discount,
        cashback_string: this.$store.state.cashback_string
      }).then(function (response) {
        if (response.status == 200) {
          _this.loading = false;
          _this.order_successful = true;
          _this.order_id = response.data.order_id;
          _this.delivery_code = response.data.delivery_code;
          _this.order_message = "Your Order is placed successfully. Thanks for using Foodyla.";

          if (localStorage.getItem('orders') == null) {
            var orders = [];
          } else {
            var orders = JSON.parse(localStorage.getItem('orders'));
          }

          var order = {
            order_id: _this.order_id,
            delivery_code: _this.delivery_code,
            status: null
          };
          orders.splice(0, 0, order);
          localStorage.setItem('orders', JSON.stringify(orders));
        } else {
          _this.order_successful = false;
          _this.order_message = "Sorry Something went wrong while placing your order";
        }
      })["catch"](function (error) {
        console.log("error " + error);
      });
    },
    getOrder: function getOrder() {
      var orderedVarients = [];
      var orderIndex = [];
      this.$store.getters.cart.forEach(function (item) {
        if (orderedVarients[item.varient_id]) {
          orderedVarients[item.varient_id].count += 1;
        } else {
          orderedVarients[item.varient_id] = {
            dish_id: item.dish_id,
            varient_id: item.varient_id,
            price: item.varient_price,
            count: 1
          };
          orderIndex.push(item.varient_id);
        }
      });
      var order = [];
      orderIndex.forEach(function (index) {
        order.push(orderedVarients[index]);
      });
      return order;
    },
    generateDeliveryCode: function generateDeliveryCode() {
      var toReturn = [];

      for (var i = 0; i < 4; i++) {
        toReturn.push(Math.floor(Math.random() * 10));
      }

      return toReturn.join("");
    }
  },
  watch: {
    order_successful: function order_successful(newVal, oldVal) {
      var _this2 = this;

      if (newVal) {
        var items = [];
        this.$store.getters.cart.forEach(function (item) {
          items.push(item);
        });
        items.forEach(function (item) {
          _this2.$store.dispatch('removeDishVarient', item.varient_id);
        });
        this.$store.dispatch('setAppliedDiscountCoupon', null);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.mainCO[data-v-ae2ea3a8] {\n  height: 100%;\n}\ndiv.main_loading[data-v-ae2ea3a8] {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\ndiv.spinner[data-v-ae2ea3a8] {\n  padding: 20px;\n  text-align: center;\n}\ndiv.loading_text[data-v-ae2ea3a8] {\n  text-align: center;\n}\ndiv.main_message[data-v-ae2ea3a8] {\n  text-align: center;\n  padding: 20px;\n  width: 100%;\n  font-family: \"Lobster\", cursive !important;\n  font-size: 2em !important;\n  text-shadow: 2px 2px 2px yellow;\n}\ndiv.order_details[data-v-ae2ea3a8] {\n  margin-top: 20px;\n}\ndiv.order_details > div[data-v-ae2ea3a8] {\n  padding: 5px;\n}", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=template&id=ae2ea3a8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=template&id=ae2ea3a8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mainCO white" }, [
    _vm.loading
      ? _c("div", { staticClass: "main_loading" }, [
          _c(
            "div",
            { staticClass: "spinner" },
            [
              _c("v-progress-circular", {
                attrs: { indeterminate: "", color: "orange darken-3" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "loading_text orange--text text--darken-3 title" },
            [
              _vm._v(
                "\n            Wait a second. Your Order is in progress.\n        "
              )
            ]
          )
        ])
      : _c("div", { staticClass: "main_loading" }, [
          _c(
            "div",
            {
              staticClass: "main_message",
              class: [
                _vm.order_successful ? "green--text" : "red--text",
                "title"
              ]
            },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.order_message) + "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _vm.order_successful
            ? _c("div", { staticClass: "order_details" }, [
                _c(
                  "div",
                  { staticClass: "title orange--text text--darken-3" },
                  [_vm._v("Order ID: " + _vm._s(_vm.order_id))]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "title orange--text text--darken-3" },
                  [_vm._v("Delivery Code : " + _vm._s(_vm.delivery_code))]
                )
              ])
            : _vm._e()
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/mobile/ConfirmOrder.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/mobile/ConfirmOrder.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfirmOrder_vue_vue_type_template_id_ae2ea3a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmOrder.vue?vue&type=template&id=ae2ea3a8&scoped=true& */ "./resources/js/views/mobile/ConfirmOrder.vue?vue&type=template&id=ae2ea3a8&scoped=true&");
/* harmony import */ var _ConfirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmOrder.vue?vue&type=script&lang=js& */ "./resources/js/views/mobile/ConfirmOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ConfirmOrder_vue_vue_type_style_index_0_id_ae2ea3a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true& */ "./resources/js/views/mobile/ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConfirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmOrder_vue_vue_type_template_id_ae2ea3a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfirmOrder_vue_vue_type_template_id_ae2ea3a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ae2ea3a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/mobile/ConfirmOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/mobile/ConfirmOrder.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/mobile/ConfirmOrder.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/mobile/ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/mobile/ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_style_index_0_id_ae2ea3a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=style&index=0&id=ae2ea3a8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_style_index_0_id_ae2ea3a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_style_index_0_id_ae2ea3a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_style_index_0_id_ae2ea3a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_style_index_0_id_ae2ea3a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_style_index_0_id_ae2ea3a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/mobile/ConfirmOrder.vue?vue&type=template&id=ae2ea3a8&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/mobile/ConfirmOrder.vue?vue&type=template&id=ae2ea3a8&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_template_id_ae2ea3a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmOrder.vue?vue&type=template&id=ae2ea3a8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mobile/ConfirmOrder.vue?vue&type=template&id=ae2ea3a8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_template_id_ae2ea3a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmOrder_vue_vue_type_template_id_ae2ea3a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);