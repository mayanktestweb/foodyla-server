(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Orders.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Orders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      orders: [],
      show_assign_order: false,
      sales_man_id: null,
      order_to_work: null,
      show_details: false,
      loading: false,
      delivery_men: [],
      assigned_orders: [],
      order_detail: null,
      show_cancel_order: false,
      order_to_cancel: null
    };
  },
  created: function created() {
    this.loadOrders();
    this.loadAssignedOrders();
  },
  computed: {
    total_price: function total_price() {
      var p = 0;
      this.order_detail.dishes.forEach(function (item) {
        p += item.price * item.count;
      });
      p += this.order_detail.delivery_charge;
      p -= this.order_detail.discount;
      return p;
    },
    total_cost: function total_cost() {
      var p = 0;
      this.order_detail.dishes.forEach(function (item) {
        p += item.cost * item.count;
      });
      return p;
    }
  },
  methods: {
    loadOrders: function loadOrders() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_AppConst__WEBPACK_IMPORTED_MODULE_1__["default"].load_orders, {
        params: {}
      }).then(function (response) {
        _this.orders = response.data.orders.reverse();
      })["catch"](function (error) {
        window.alert('something went wrong while loading orders');
      });
    },
    loadAssignedOrders: function loadAssignedOrders() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_AppConst__WEBPACK_IMPORTED_MODULE_1__["default"].admin_assigned_orders).then(function (response) {
        _this2.assigned_orders = response.data.assigned_orders;
      })["catch"](function (error) {
        window.alert("something went wrong while loading assigned orders");
      });
    },
    assignOrder: function assignOrder(order) {
      var _this3 = this;

      this.order_to_work = order;
      this.show_assign_order = true;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_AppConst__WEBPACK_IMPORTED_MODULE_1__["default"].delivery_men).then(function (response) {
        _this3.delivery_men = response.data.delivery_men;
      })["catch"](function (error) {
        window.alert("something went wrong");
      })["finally"](function () {
        _this3.loading = false;
      });
    },
    assignNow: function assignNow() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_AppConst__WEBPACK_IMPORTED_MODULE_1__["default"].assign_order_admin, {
        order_id: this.order_to_work.id,
        delivery_man_id: this.sales_man_id
      }).then(function (response) {
        window.alert(response.data);
      })["catch"](function (e) {
        window.alert("something went wrong");
      });
    },
    isAssigned: function isAssigned(id) {
      var assigned = false;
      this.assigned_orders.forEach(function (item) {
        if (item.order_id == id) assigned = true;
      });
      return assigned;
    },
    showOrderDetails: function showOrderDetails(order) {
      var _this4 = this;

      this.show_details = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_AppConst__WEBPACK_IMPORTED_MODULE_1__["default"].order_details, {
        params: {
          id: order.id
        }
      }).then(function (response) {
        _this4.order_detail = response.data;
      })["catch"](function (error) {
        window.alert("something went wrong");
      });
    },
    confirmOrderCancel: function confirmOrderCancel(order) {
      this.show_cancel_order = true;
      this.order_to_cancel = order;
    },
    cancelOrder: function cancelOrder() {
      this.show_cancel_order = false;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_AppConst__WEBPACK_IMPORTED_MODULE_1__["default"].cancel_order, {
        id: this.order_to_cancel.id
      }).then(function (response) {
        window.alert(response.data + " in operation");
      })["catch"](function (error) {
        window.alert("something went wrong");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.order[data-v-181ddfc4] {\r\n    margin: 10px;\r\n    padding: 20px;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\n}\ndiv.order > div[data-v-181ddfc4] {\r\n    padding: 5px 0px;\n}\ndiv.action_W[data-v-181ddfc4] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\n}\ndiv.assign_status[data-v-181ddfc4] {\r\n    min-height: 50px;\r\n    width: 50px;\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Orders.vue?vue&type=template&id=181ddfc4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Orders.vue?vue&type=template&id=181ddfc4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "reload" }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "main_body" },
      _vm._l(_vm.orders, function(order) {
        return _c("div", { key: order.id, staticClass: "orders" }, [
          _c("div", { staticClass: "order" }, [
            _c(
              "div",
              { staticClass: "grey--text text--darken-3 font-weight-medium" },
              [
                _vm._v(
                  "\n                    Order ID : " +
                    _vm._s(order.id) +
                    "\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "grey--text text--darken-3 font-weight-medium" },
              [
                _vm._v(
                  "\n                    Mobile Number : " +
                    _vm._s(order.mobile_number) +
                    "\n                "
                )
              ]
            ),
            _vm._v(" "),
            order.status == "delivered"
              ? _c(
                  "div",
                  {
                    staticClass: "green--text text--darken-3 font-weight-medium"
                  },
                  [
                    _vm._v(
                      "\n                    Status: DELIVERED\n                "
                    )
                  ]
                )
              : order.status == "cancel"
              ? _c(
                  "div",
                  {
                    staticClass: "red--text text--darken-3 font-weight-medium"
                  },
                  [
                    _vm._v(
                      "\n                    Status: CANCELED\n                "
                    )
                  ]
                )
              : _c(
                  "div",
                  {
                    staticClass:
                      "orange--text text--darken-3 font-weight-medium"
                  },
                  [
                    _vm._v(
                      "\n                    Status: " +
                        _vm._s(order.status.toUpperCase()) +
                        "\n                "
                    )
                  ]
                ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "grey--text text--darken-3 font-weight-medium" },
              [
                _vm._v(
                  "\n                    Current Location : " +
                    _vm._s(order.current_location) +
                    "\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "grey--text text--darken-3 font-weight-medium" },
              [
                _vm._v(
                  "\n                    Location Description : " +
                    _vm._s(order.location_description) +
                    "\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "grey--text text--darken-3 font-weight-medium" },
              [
                _vm._v(
                  "\n                    Latitude Longitude : " +
                    _vm._s(order.latlong) +
                    "\n                "
                )
              ]
            ),
            _vm._v(" "),
            _vm.isAssigned(order.id)
              ? _c("div", { staticClass: "assign_status red" })
              : _c("div", { staticClass: "assign_status green" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "action_W" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "teal", dark: "" },
                    on: {
                      click: function($event) {
                        return _vm.assignOrder(order)
                      }
                    }
                  },
                  [_vm._v("Assign Order")]
                ),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { color: "amber", dark: "" },
                    on: {
                      click: function($event) {
                        return _vm.showOrderDetails(order)
                      }
                    }
                  },
                  [_vm._v("Show Details")]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { color: "red", dark: "" },
                    on: {
                      click: function($event) {
                        return _vm.confirmOrderCancel(order)
                      }
                    }
                  },
                  [_vm._v("Cancel Order")]
                )
              ],
              1
            )
          ])
        ])
      }),
      0
    ),
    _vm._v(" "),
    _vm.show_assign_order
      ? _c(
          "div",
          [
            _c(
              "v-dialog",
              {
                model: {
                  value: _vm.show_assign_order,
                  callback: function($$v) {
                    _vm.show_assign_order = $$v
                  },
                  expression: "show_assign_order"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-card-title",
                      {
                        staticClass: "headline grey lighten-2",
                        attrs: { "primary-title": "" }
                      },
                      [
                        _vm._v(
                          "\n                    Assign Order\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-card-text", [
                      _vm.loading
                        ? _c(
                            "div",
                            [
                              _c("v-progress-circular", {
                                attrs: { inderminate: "", color: "warning" }
                              })
                            ],
                            1
                          )
                        : _c(
                            "div",
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "Delivery Man",
                                  items: _vm.delivery_men,
                                  "item-text": "name",
                                  "item-value": "id"
                                },
                                model: {
                                  value: _vm.sales_man_id,
                                  callback: function($$v) {
                                    _vm.sales_man_id = $$v
                                  },
                                  expression: "sales_man_id"
                                }
                              })
                            ],
                            1
                          )
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-action",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary", dark: "" },
                            on: {
                              click: function($event) {
                                return _vm.assignNow()
                              }
                            }
                          },
                          [_vm._v("Assign Now")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.show_details
      ? _c(
          "div",
          [
            _c(
              "v-dialog",
              {
                model: {
                  value: _vm.show_details,
                  callback: function($$v) {
                    _vm.show_details = $$v
                  },
                  expression: "show_details"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-card-title",
                      {
                        staticClass: "headline grey lighten-2",
                        attrs: { "primary-title": "" }
                      },
                      [
                        _vm._v(
                          "\n                    Order Details\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "grey--text text--darken-3 font-weight-medium"
                          },
                          [
                            _vm._v(
                              "\n                        Restaurant : " +
                                _vm._s(_vm.order_detail.restaurant) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "grey--text text--darken-3 font-weight-medium"
                          },
                          [
                            _vm._v(
                              "\n                        Restaurant Mobile Number : " +
                                _vm._s(_vm.order_detail.rest_mobile_number) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "subheading" }, [
                          _vm._v("Items")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.order_detail.dishes, function(dish) {
                          return _c(
                            "div",
                            { key: dish.id, staticClass: "dish" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "grey--text text--darken-3 font-weight-regular"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(dish.name) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "grey--text text--darken-3 font-weight-regular"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(dish.label) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "grey--text text--darken-3 font-weight-regular"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(dish.count) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "green--text text--darken-3 font-weight-regular"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(dish.price) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "orange--text text--darken-3 font-weight-regular"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(dish.cost) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("hr")
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "teal--text font-weight-medium" },
                          [
                            _vm._v(
                              "\n                        Delivery Charge : " +
                                _vm._s(_vm.order_detail.delivery_charge) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "red--text font-weight-medium" },
                          [
                            _vm._v(
                              "\n                        Discount : " +
                                _vm._s(_vm.order_detail.discount) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "green--text title" }, [
                          _vm._v(
                            "\n                        Total Cost : " +
                              _vm._s(_vm.total_price) +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "orange--text title" }, [
                          _vm._v(
                            "\n                        Total Cost : " +
                              _vm._s(_vm.total_cost) +
                              "\n                    "
                          )
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-action",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary", dark: "" },
                            on: {
                              click: function($event) {
                                _vm.show_details = false
                              }
                            }
                          },
                          [_vm._v("Okay")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.show_cancel_order
      ? _c(
          "div",
          [
            _c(
              "v-dialog",
              {
                model: {
                  value: _vm.show_cancel_order,
                  callback: function($$v) {
                    _vm.show_cancel_order = $$v
                  },
                  expression: "show_cancel_order"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-card-title",
                      {
                        staticClass: "headline red white--text",
                        attrs: { "primary-title": "" }
                      },
                      [
                        _vm._v(
                          "\n                    Cancel Order\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-card-text", [
                      _c(
                        "div",
                        { staticClass: "title grey--text text--darken-3" },
                        [
                          _vm._v(
                            "\n                        Are You sure to cancel this order\n                    "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-action",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "red", dark: "" },
                            on: {
                              click: function($event) {
                                return _vm.cancelOrder()
                              }
                            }
                          },
                          [_vm._v("Yes")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "red", flat: "" },
                            on: {
                              click: function($event) {
                                _vm.show_cancel_order = false
                              }
                            }
                          },
                          [_vm._v("No")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/Orders.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/admin/Orders.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orders_vue_vue_type_template_id_181ddfc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=181ddfc4&scoped=true& */ "./resources/js/views/admin/Orders.vue?vue&type=template&id=181ddfc4&scoped=true&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Orders_vue_vue_type_style_index_0_id_181ddfc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css& */ "./resources/js/views/admin/Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Orders_vue_vue_type_template_id_181ddfc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Orders_vue_vue_type_template_id_181ddfc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "181ddfc4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Orders.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/admin/Orders.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/admin/Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_181ddfc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Orders.vue?vue&type=style&index=0&id=181ddfc4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_181ddfc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_181ddfc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_181ddfc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_181ddfc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_style_index_0_id_181ddfc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/admin/Orders.vue?vue&type=template&id=181ddfc4&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/admin/Orders.vue?vue&type=template&id=181ddfc4&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_181ddfc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=template&id=181ddfc4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Orders.vue?vue&type=template&id=181ddfc4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_181ddfc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_181ddfc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);