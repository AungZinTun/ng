<template>
  <v-container
    id="contact"
    class="pa-0 grey lighten-3 flex-wrap align-start fill-height"
    fluid
    tag="section"
  >
    <iframe
      allowfullscreen
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.7524447699516!2d94.91949961491106!3d20.144372886484156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b7d10d794a4f7d%3A0xfb83a729c39ce89b!2sSCVG%20Office!5e0!3m2!1sen!2smm!4v1593469076710!5m2!1sen!2smm"
      width="100%"
    />

    <v-row
      class="ma-0"
      justify="center"
    >
      <v-col
        cols="12"
        md="4"
      >
        <h1 class="display-1 mb-8 font-weight-bold">
          Contact Info:
        </h1>

        <div class="mb-8">

        </div>

        <div class="mb-4">
          <strong>Address</strong> Magway
        </div>

        <div class="mb-4">
          <strong>Phone</strong> +95943170034
        </div>

        <div class="mb-4">
          <strong>Email</strong> scvg@gmail.com
        </div>

      </v-col>

      <v-col
        cols="12"
        md="5"
      >
        <v-form>
          <v-row class="mb-6">
            <v-col
              cols="12"
              md="6"
            >
              <v-sheet>
                <v-text-field
                  flat
                  hide-details
                  label="Your Name"
                  solo
                />
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-sheet>
                <v-text-field
                  flat
                  hide-details
                  label="Your Email"
                  solo
                />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-sheet>
                <v-text-field
                  flat
                  hide-details
                  label="Your Title"
                  solo
                />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-sheet>
                <v-textarea
                  flat
                  hide-details
                  label="Your Message"
                  solo
                />
              </v-sheet>
            </v-col>
          </v-row>

          <v-btn
            :block="$vuetify.breakpoint.smAndDown"
            class="white--text"
            color="black"
            x-large
          >
            Send Message
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Contact',
  }
</script>
