<template>
  <div style="background-color: #194B99">
    <v-container style="padding-top: 100px; padding-bottom: 100px">
      <v-row no-gutters class="flex-column">
        <v-col>
          <v-row>
            <v-col cols="12" md="6">
              <h1 class="white--text mb-5 font-weight-light">Welcome to the Mint Vision administration site</h1>
              <div class="white--text pa-1" style="max-width: 328px">This administration site is used to check the performance of your tenant <strong>[tenant name]</strong>.
              The visible menu options and functionality is determined by the configuration of your tenant. <a href="" class="font-weight-bold blue--text"><small>More info</small></a>
              </div>

              <v-row cols="12" md="6" class="my-5">
                <v-col><v-btn block depressed light>REST API</v-btn></v-col>
                <v-col><v-btn block outlined dark>WINDOWS APP</v-btn></v-col>
              </v-row>
            </v-col>
            <v-col class="mt-3">
              <v-img src="..\assets\II_Vertical_Blue_Transparent.png" max-height="352" max-width="416" position="top"></v-img>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="mt-n3">
          <div style="background-color: #223D7C;">
            <v-row no-gutters align="stretch">
              <v-col cols="12" sm="4">
                <v-card class="pa-2 py-5 text-center white--text" flat tile style="background: #223D7C">
                  <v-icon color="#DCDCDC" size="48">mdi-newspaper-variant-outline</v-icon>
                  <p class="text-h6">What's new <a href="" class="caption blue--text">See all</a></p>
                  <div><a href="" class="text-decoration-none" style="color: #BBDEFB">Version 11.5.6.75 Bug fixes</a></div>
                  <div><a href="" class="text-decoration-none" style="color: #BBDEFB">Version 11.5.6.75 Bug fixes</a></div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card class="pa-2 py-5 text-center white--text" flat tile style="background: #223D7C">
                  <v-icon color="#DCDCDC" size="48">mdi-bullhorn-outline</v-icon>
                  <p class="text-h6">Announcements <a href="" class="caption blue--text">See all</a></p>
                  <div><a href="" class="text-decoration-none" style="color: #BBDEFB">New image processor available</a></div>
                  <div><a href="" class="text-decoration-none" style="color: #BBDEFB">New image processor available</a></div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card class="pa-2 py-5 text-center white--text" flat tile style="background: #223D7C">
                  <v-icon color="#DCDCDC" size="48">mdi-help-circle-outline</v-icon>
                  <p class="text-h6">Help guides <a href="" class="caption blue--text">See all</a></p>
                  <a href="" class="text-decoration-none" style="color: #BBDEFB" text>
                    <v-icon color="#E3F2FD" left>mdi-cog-outline</v-icon>Rest API
                  </a><br>
                  <a href="" class="text-decoration-none" style="color: #BBDEFB" text>
                    <v-icon color="#E3F2FD" left>mdi-cog-outline</v-icon>Windows app
                  </a>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>