<template>
    <div class="coupon_main">
        <div :class="['coupon_details', color]">
            <div class="D1"></div>
            <div class="data font-weight-medium">&#x20B9; {{coupon_value}}</div>
            <div class="D2"></div>
        </div>
        <div :class="['coupon_action font-weight-medium', text_color]">
            APPLY
        </div>
    </div>
</template>

<script>
export default {
    props: {coupon: Object},
    data: function() {
        return {
            
        }
    },

    computed: {
        coupon_value: function() {
            return this.coupon.coupon_value;
        },
        color: function() {
            if (this.coupon_value == 1) {
                return "orange";
            } else if (this.coupon_value == 2) {
                return "blue";
            } else if (this.coupon_value == 3) {
                return "teal";
            } else if (this.coupon_value == 4) {
                return "blue-grey";
            } else {
                return "green";
            }
        },

        text_color: function () {
            return this.color+"--text";
        }
    }
}
</script>

<style scoped>
div.coupon_main {
    margin: 5px;
    border-radius: 5px;
    display: flex;
    flex-flow: row;
}

div.coupon_details {
    width: 50%;
    display: flex;
    flex-flow: row;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 0px 0px 5px;
    color: white;
    font-size: 1.5em;
}

div.D1 {
    min-height: 20px;
    width: 10px;
    border-radius: 0px 10px 10px 0px;
    background: white;
}

div.D2 {
    min-height: 20px;
    width: 10px;
    border-radius: 10px 0px 0px 10px;
    background: white;
}

div.coupon_action {
    border-top: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    width: 50%;
    flex-grow: 1;
    border-radius: 0px 5px 5px 0px;
    background: white;
    text-align: center;
    line-height: 50px;
    font-size: 1.3em;
}
</style>