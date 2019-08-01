<template>
    <v-container>
        <v-layout>
            <v-flex sm3 ma2>
                <v-responsive :aspect-ratio="2/1">
                    <div class="boxone"></div>
                </v-responsive>
            </v-flex>
            <v-flex sm9 ma2>
                <v-layout justify-space-between column fill-height>
                    <div class="sidebox" id="lineone"></div>
                    <div class="sidebox" id="linetwo"></div>
                    <div class="sidebox" id="linethree"></div>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
div.boxone {
    display: inline-block;
    margin: 1px;
    width: 90%;
    min-height: 100%;
    background-color: lightgray;
    animation: pulse 1s infinite ease-in-out;
}

div.sidebox {
    display: inline-block;
    margin-bottom: 2px;
    width: 100%;
    min-height: 20px;
    background-color: lightgray;
    animation: pulse 1s infinite ease-in-out;
}

div#linetwo {
    width: 60%;
}

div#linethree {
    width: 80%;
}

@keyframes pulse {
    0% {
        background-color: rgba(165, 165, 165, 0.3);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.5);
    }

    100% {
        background-color: rgba(165, 165, 165, 0.3);
    }
}
</style>
