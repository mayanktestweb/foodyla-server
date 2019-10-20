//const RootUrl = "https://www.foodyla.com/api";
const RootUrl = "http://192.168.43.116:8000/api";

const UserIdUrl = RootUrl+"/user";
const RestaurantPerPage = 6;
const RestaurantsUrl = RootUrl+"/restaurants";
const RestaurantPage = RootUrl+"/restaurants/page/";
const ConfirmOrder = RootUrl+"/app/confirm_order";
const OrderStatus = RootUrl+"/order_status";
const ConfirmMobileNumber = RootUrl+"/app/confirm_mobile_number";
const ConfirmOtp = RootUrl+"/app/confirm_otp";
const GetLocation = "https://maps.googleapis.com/maps/api/geocode/json";
const DiscountCouponsUrl = RootUrl+"/discount_coupons";
const SearchUrl = RootUrl+"/search";


const DeliveryLogin = RootUrl+"/delivery/login";
const AssignedOrders = RootUrl+"/delivery/assigned_orders";
const OrderDetails = RootUrl+"/delivery/orders/details";
const ConfirmDeliveryCode = RootUrl+"/delivery/orders/confirm_delivery";
const UserInfo = RootUrl+"/delivery/user_info";
const DiscountUser = RootUrl+"/delivery/user/discount";

// admin url
const AddRestaurant = RootUrl + "/admin/restaurants/add";
const AdminRestaurants = RootUrl + "/admin/restaurants";
const RestaurantData = RootUrl + "/admin/restaurant";
const EditRestaurant = RootUrl + "/admin/restaurant/edit"
const RestaurantDishes = RootUrl + "/admin/restaurant/dishes"
const EditDish = RootUrl + "/admin/dish/edit"
const EditVarient = RootUrl + "/admin/varient/edit"
const AddDish = RootUrl + "/admin/dish/add"
const AddVarient = RootUrl + "/admin/varient/add"
const LoadOrders = RootUrl + "/admin/orders"
const AdminAssignedOrder = RootUrl + "/admin/assigned_orders"
const AssignOrderAdmin = RootUrl + "/admin/assign_order"
const DeliveryMen = RootUrl + "/admin/delivery_men"
const CancelOrder = RootUrl + "/admin/cancel_order"

export default {
    root_url: RootUrl,
    user_id_url: UserIdUrl,
    restaurant_per_load: RestaurantPerPage,
    restaurants_url: RestaurantsUrl,
    restaurant_page: RestaurantPage,
    confirm_order: ConfirmOrder,
    order_status: OrderStatus,
    confirm_mobile_number: ConfirmMobileNumber,
    confirm_otp: ConfirmOtp,
    get_location: GetLocation,
    discount_coupons_url: DiscountCouponsUrl,
    search_url: SearchUrl,

    delivery_login: DeliveryLogin,
    assigned_orders:  AssignedOrders,
    order_details: OrderDetails,
    confirm_delivery_code: ConfirmDeliveryCode,
    user_info: UserInfo,
    discount_user: DiscountUser,

    add_restaurant: AddRestaurant,
    admin_restaurants: AdminRestaurants,
    restaurant_data: RestaurantData,
    edit_restaurant: EditRestaurant,
    restaurant_dishes: RestaurantDishes,
    edit_dish: EditDish,
    edit_varient: EditVarient,
    add_dish: AddDish,
    add_varient: AddVarient,
    load_orders: LoadOrders,
    assign_order_admin: AssignOrderAdmin,
    delivery_men: DeliveryMen,
    admin_assigned_orders: AdminAssignedOrder,
    cancel_order: CancelOrder
}