<template>
  <v-container
    id="blog"
    class="pa-0"
    fluid
    tag="section"
  >
    <v-responsive
      class="mx-auto"
      max-width="1280"
    >
      <v-container>
        <div>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left headline">
                    Plan
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                  <th class="text-left">
                    Pages
                  </th>
                  <th class="text-left">
                    Contact Form
                  </th>
                   <th class="text-left">
                    Video Conference Page
                  </th>
                  <th class="text-left">
                    Admin can manage
                  </th>
                  <th class="text-left">
                    User Interaction
                  </th>
                  <th class="text-left">
                    Social media integration
                  </th>
                  <th class="text-left">
                    Personalized Training
                  </th>
                  <th class="text-left">
                    Allowed Modification
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in plan"
                  :key="item.name"
                >
                  <td class="headline">{{ item.title }} </td>
                  <td>{{ item.price }} MMK</td>
                  <td>{{ item.pages }}</td>
                  <td>
                    <v-icon
                      v-if="item.contact_form"
                      color="green"
                    >
                      mdi-check
                    </v-icon>
                    <v-icon
                      v-else
                      color="red"
                    >
                      mdi-close
                    </v-icon>
                  </td>
                   <td>
                    <v-icon
                      v-if="item.video"
                      color="green"
                    >
                      mdi-check
                    </v-icon>
                    <v-icon
                      v-else
                      color="red"
                    >
                      mdi-close
                    </v-icon>
                  </td>
                  <td>
                    <v-icon
                      v-if="item.admin_manage_content"
                      color="green"
                    >
                      mdi-check
                    </v-icon>
                    <v-icon
                      v-else
                      color="red"
                    >
                      mdi-close
                    </v-icon>
                  </td>
                  <td>
                    <v-icon
                      v-if="item.user"
                      color="green"
                    >
                      mdi-check
                    </v-icon>
                    <v-icon
                      v-else
                      color="red"
                    >
                      mdi-close
                    </v-icon>
                  </td>
                  <td>
                    <v-icon
                      v-if="item.social_media"
                      color="green"
                    >
                      mdi-check
                    </v-icon>
                    <v-icon
                      v-else
                      color="red"
                    >
                      mdi-close
                    </v-icon>
                  </td>
                  <td>
                    <v-icon
                      v-if="item.training"
                      color="green"
                    >
                      mdi-check
                    </v-icon>
                    <v-icon
                      v-else
                      color="red"
                    >
                      mdi-close
                    </v-icon>
                  </td>
                  <td>{{ item.allowed_modification }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <v-row>
          <v-spacer />
        </v-row>
        <v-card
          max-width="375"
          class="mx-auto"
        >
          <v-row class="fill-height">
            <v-card-title>
              <v-btn
                dark
                icon
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>

              <v-spacer />

              <v-btn
                dark
                icon
                class="mr-4"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn
                dark
                icon
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-card-title>

            <v-spacer />

            <v-card-title class="indigo--text pl-12 pt-12">
              <div class="display-1 pl-12 pt-12">
                Aung Zin Tun
              </div>
            </v-card-title>
          </v-row>

          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-phone
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>(95) 9798494364</v-list-item-title>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item>
              <v-list-item-action />

              <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-divider inset />

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-email
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>aungzintun2@gmail.com</v-list-item-title>
                <v-list-item-subtitle>Personal</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action />

              <v-list-item-content>
                <v-list-item-title>aungzintun.pgk@gmail.com</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset />

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-map-marker
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Taunggyi-Hopong Street</v-list-item-title>
                <v-list-item-subtitle>Taunggyi, TBC</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    name: 'Blog',

    components: {
      // PostCard: () => import('./components/PostCard'),
      VFilter: () => import('@/components/Filter'),
    },

    data: () => ({
      dense: false,
      fixedHeader: false,
      height: 300,
      plan: [
        { title: 'Starter', price: '150000', pages: 3, video: false, admin_manage_content: false, user: false, social_media: false, training: false, allowed_modification: 1, contact_form: true },
        { title: 'Informatinal', price: '500000', pages: 10, video: false, admin_manage_content: true, user: false, social_media: false, training: true, allowed_modification: 5, contact_form: true },
        { title: 'Interactive', price: '1500000', pages: 25, video: true, admin_manage_content: true, user: true, social_media: true, training: true, allowed_modification: 20, contact_form: true },

      ],
    }),
  }
</script>
