(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{127:function(t,e,n){"use strict";var r=n(43);n.n(r).a},128:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\ndiv.order[data-v-5f474374] {\r\n    margin: 10px;\r\n    padding: 20px;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\n}\ndiv.order > div[data-v-5f474374] {\r\n    padding: 5px 0px;\n}\ndiv.action_W[data-v-5f474374] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\n}\ndiv.assign_status[data-v-5f474374] {\r\n    min-height: 50px;\r\n    width: 50px;\n}\r\n",""])},182:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),a=n(2),s={data:function(){return{orders:[],show_assign_order:!1,sales_man_id:null,order_to_work:null,show_details:!1,loading:!1,delivery_men:[],assigned_orders:[],order_detail:null,show_cancel_order:!1,order_to_cancel:null}},created:function(){this.loadOrders(),this.loadAssignedOrders()},computed:{total_price:function(){var t=0;return this.order_detail.dishes.forEach(function(e){t+=e.price*e.count}),t+=this.order_detail.delivery_charge,t-=this.order_detail.discount},total_cost:function(){var t=0;return this.order_detail.dishes.forEach(function(e){t+=e.cost*e.count}),t}},methods:{loadOrders:function(){var t=this;i.a.get(a.a.load_orders,{params:{}}).then(function(e){t.orders=e.data.orders.reverse()}).catch(function(t){window.alert("something went wrong while loading orders")})},loadAssignedOrders:function(){var t=this;i.a.get(a.a.admin_assigned_orders).then(function(e){t.assigned_orders=e.data.assigned_orders}).catch(function(t){window.alert("something went wrong while loading assigned orders")})},assignOrder:function(t){var e=this;this.order_to_work=t,this.show_assign_order=!0,this.loading=!0,i.a.get(a.a.delivery_men).then(function(t){e.delivery_men=t.data.delivery_men}).catch(function(t){window.alert("something went wrong")}).finally(function(){e.loading=!1})},assignNow:function(){i.a.post(a.a.assign_order_admin,{order_id:this.order_to_work.id,delivery_man_id:this.sales_man_id}).then(function(t){window.alert(t.data)}).catch(function(t){window.alert("something went wrong")})},isAssigned:function(t){var e=!1;return this.assigned_orders.forEach(function(n){n.order_id==t&&(e=!0)}),e},showOrderDetails:function(t){var e=this;this.show_details=!0,i.a.get(a.a.order_details,{params:{id:t.id}}).then(function(t){e.order_detail=t.data}).catch(function(t){window.alert("something went wrong")})},confirmOrderCancel:function(t){this.show_cancel_order=!0,this.order_to_cancel=t},cancelOrder:function(){this.show_cancel_order=!1,i.a.post(a.a.cancel_order,{id:this.order_to_cancel.id}).then(function(t){window.alert(t.data+" in operation")}).catch(function(t){window.alert("something went wrong")})}}},o=(n(127),n(0)),d=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"reload"}),t._v(" "),n("div",{staticClass:"main_body"},t._l(t.orders,function(e){return n("div",{key:e.id,staticClass:"orders"},[n("div",{staticClass:"order"},[n("div",{staticClass:"grey--text text--darken-3 font-weight-medium"},[t._v("\n                    Order ID : "+t._s(e.id)+"\n                ")]),t._v(" "),n("div",{staticClass:"grey--text text--darken-3 font-weight-medium"},[t._v("\n                    Mobile Number : "+t._s(e.mobile_number)+"\n                ")]),t._v(" "),"delivered"==e.status?n("div",{staticClass:"green--text text--darken-3 font-weight-medium"},[t._v("\n                    Status: DELIVERED\n                ")]):"cancel"==e.status?n("div",{staticClass:"red--text text--darken-3 font-weight-medium"},[t._v("\n                    Status: CANCELED\n                ")]):n("div",{staticClass:"orange--text text--darken-3 font-weight-medium"},[t._v("\n                    Status: "+t._s(e.status.toUpperCase())+"\n                ")]),t._v(" "),n("div",{staticClass:"grey--text text--darken-3 font-weight-medium"},[t._v("\n                    Current Location : "+t._s(e.current_location)+"\n                ")]),t._v(" "),n("div",{staticClass:"grey--text text--darken-3 font-weight-medium"},[t._v("\n                    Location Description : "+t._s(e.location_description)+"\n                ")]),t._v(" "),n("div",{staticClass:"grey--text text--darken-3 font-weight-medium"},[t._v("\n                    Latitude Longitude : "+t._s(e.latlong)+"\n                ")]),t._v(" "),t.isAssigned(e.id)?n("div",{staticClass:"assign_status red"}):n("div",{staticClass:"assign_status green"}),t._v(" "),n("div",{staticClass:"action_W"},[n("v-btn",{attrs:{color:"teal",dark:""},on:{click:function(n){return t.assignOrder(e)}}},[t._v("Assign Order")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"amber",dark:""},on:{click:function(n){return t.showOrderDetails(e)}}},[t._v("Show Details")]),t._v(" "),n("v-btn",{attrs:{color:"red",dark:""},on:{click:function(n){return t.confirmOrderCancel(e)}}},[t._v("Cancel Order")])],1)])])}),0),t._v(" "),t.show_assign_order?n("div",[n("v-dialog",{model:{value:t.show_assign_order,callback:function(e){t.show_assign_order=e},expression:"show_assign_order"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n                    Assign Order\n                ")]),t._v(" "),n("v-card-text",[t.loading?n("div",[n("v-progress-circular",{attrs:{inderminate:"",color:"warning"}})],1):n("div",[n("v-select",{attrs:{label:"Delivery Man",items:t.delivery_men,"item-text":"name","item-value":"id"},model:{value:t.sales_man_id,callback:function(e){t.sales_man_id=e},expression:"sales_man_id"}})],1)]),t._v(" "),n("v-card-action",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){return t.assignNow()}}},[t._v("Assign Now")])],1)],1)],1)],1):t._e(),t._v(" "),t.show_details?n("div",[n("v-dialog",{model:{value:t.show_details,callback:function(e){t.show_details=e},expression:"show_details"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n                    Order Details\n                ")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"grey--text text--darken-3 font-weight-medium"},[t._v("\n                        Restaurant : "+t._s(t.order_detail.restaurant)+"\n                    ")]),t._v(" "),n("div",{staticClass:"grey--text text--darken-3 font-weight-medium"},[t._v("\n                        Restaurant Mobile Number : "+t._s(t.order_detail.rest_mobile_number)+"\n                    ")]),t._v(" "),n("div",{staticClass:"subheading"},[t._v("Items")]),t._v(" "),t._l(t.order_detail.dishes,function(e){return n("div",{key:e.id,staticClass:"dish"},[n("div",{staticClass:"grey--text text--darken-3 font-weight-regular"},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),n("div",{staticClass:"grey--text text--darken-3 font-weight-regular"},[t._v("\n                            "+t._s(e.label)+"\n                        ")]),t._v(" "),n("div",{staticClass:"grey--text text--darken-3 font-weight-regular"},[t._v("\n                            "+t._s(e.count)+"\n                        ")]),t._v(" "),n("div",{staticClass:"green--text text--darken-3 font-weight-regular"},[t._v("\n                            "+t._s(e.price)+"\n                        ")]),t._v(" "),n("div",{staticClass:"orange--text text--darken-3 font-weight-regular"},[t._v("\n                            "+t._s(e.cost)+"\n                        ")]),t._v(" "),n("hr")])}),t._v(" "),n("div",{staticClass:"teal--text font-weight-medium"},[t._v("\n                        Delivery Charge : "+t._s(t.order_detail.delivery_charge)+"\n                    ")]),t._v(" "),n("div",{staticClass:"red--text font-weight-medium"},[t._v("\n                        Discount : "+t._s(t.order_detail.discount)+"\n                    ")]),t._v(" "),n("div",{staticClass:"green--text title"},[t._v("\n                        Total Cost : "+t._s(t.total_price)+"\n                    ")]),t._v(" "),n("div",{staticClass:"orange--text title"},[t._v("\n                        Total Cost : "+t._s(t.total_cost)+"\n                    ")])],2),t._v(" "),n("v-card-action",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){t.show_details=!1}}},[t._v("Okay")])],1)],1)],1)],1):t._e(),t._v(" "),t.show_cancel_order?n("div",[n("v-dialog",{model:{value:t.show_cancel_order,callback:function(e){t.show_cancel_order=e},expression:"show_cancel_order"}},[n("v-card",[n("v-card-title",{staticClass:"headline red white--text",attrs:{"primary-title":""}},[t._v("\n                    Cancel Order\n                ")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"title grey--text text--darken-3"},[t._v("\n                        Are You sure to cancel this order\n                    ")])]),t._v(" "),n("v-card-action",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red",dark:""},on:{click:function(e){return t.cancelOrder()}}},[t._v("Yes")]),t._v(" "),n("v-btn",{attrs:{color:"red",flat:""},on:{click:function(e){t.show_cancel_order=!1}}},[t._v("No")])],1)],1)],1)],1):t._e()])},[],!1,null,"5f474374",null);e.default=d.exports},43:function(t,e,n){var r=n(128);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(t.exports=r.locals)}}]);