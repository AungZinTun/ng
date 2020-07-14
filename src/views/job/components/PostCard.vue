<template>
  <v-card>
    <v-img
      :src="post.src"
      height="200"
    >
      <router-link to="#">
        <v-hover>
          <template v-slot="{ hover }">
            <v-overlay
              :color="hover ? 'white' : 'black'"
              absolute
              class="align-end pa-3 justify-start"
              opacity=".2"
            >
              <v-row justify="right">
                <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="600px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="success"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      rounded
                    >
                      Apply now
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              label="Legal first name*"
                              required
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              label="Legal middle name"
                              hint="example of helper text only on focus"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              label="Legal last name*"
                              hint="example of persistent helper text"
                              persistent-hint
                              required
                            />
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Email*"
                              required
                            />
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Password*"
                              type="password"
                              required
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-select
                              :items="['0-17', '18-29', '30-54', '54+']"
                              label="Age*"
                              required
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-autocomplete
                              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                              label="Interests"
                              multiple
                            />
                          </v-col>
                        </v-row>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                      >
                        Close
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                      >
                        Apply
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </v-overlay>
          </template>
        </v-hover>
      </router-link>
    </v-img>

    <div class="px-3 pb-4">
      <v-card-title
        class="headline font-weight-bold mb-2"
        v-text="post.title"
      />

      <v-card-text class="body-1 grey--text text-darken-2">
        <div
          class="mb-4"
          v-text="post.date"
        />

        <div v-text="post.blurb" />
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'BlogCard',

    props: {
      post: {
        type: Object,
        default: () => ({
          category: undefined,
          date: undefined,
          blurb: undefined,
          src: undefined,
          title: undefined,
        }),
      },
    },
    data: () => ({
      dialog: false,
    }),
  }
</script>
