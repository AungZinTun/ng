<template>
  <v-container
    id="about"
    class="pa-0"
    fluid
    tag="section"
  >
    <v-row
      class="ma-0"
      no-gutters
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          height="calc(100vh - 96px - 156px)"
          gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .6)"
          src="https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/training.jpg?alt=media&token=2be2b1b3-6fe3-40b9-83c1-9dfd991541cc"
        />
      </v-col>

      <v-col
        class="d-block d-md-flex align-center grey lighten-3 pa-6"
        cols="12"
        md="6"
      >
        <v-responsive
          class="mx-auto px-3 px-md-12"
          max-width="750"
        >
          <h1
            class="mb-6"
            :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
          >
            Who we are?<br>
          </h1>

          <p>
      Social Care Volunteer Group (SCVG) is a youth-led local non-profit non-governmental civil society organisation working for youth and children in Myanmar since 2007. SCVG served several thousands of youth and children in Magway region through its interventions: HIV prevention, youth capacity building, civil society organisations/ community-based organisations strengthening and child rights governance, legal aid, paralegal volunteer and advocacy projects, MnCH community system strengthening, collective voices: Gender equity and Health service equality. SCVG is recognised as a leading organisation in Magway region and is working with local and international NGOs/CSOs and government ministries on local and national issues.
      SCVG is legally registered at Magway Regional Government with the registration number (2/ Magway/ 0006) dated by 9th August, 2016.
          </p>

          <p>
            Nulla, porro? Quos architecto vero itaque temporibus in illo nam perferendis ex nemo distinctio?
          </p>

          <div class="signature">
            SCVG
          </div>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'About',
  }
</script>

<style lang="sass">
  .signature
    font-family: 'Cedarville Cursive', cursive !important
    font-size: 2rem
    font-style: italic
</style>
