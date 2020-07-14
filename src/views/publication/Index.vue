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
        <v-filter :tabs="tabs" />

        <v-row>
          <v-col
            v-for="(post, i) in posts"
            :key="i"
            class="d-flex"
            cols="12"
            md="4"
          >
            <post-card :post="post" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    name: 'Blog',

    components: {
      PostCard: () => import('./components/PostCard'),
      VFilter: () => import('@/components/Filter'),
    },

    data: () => ({
      posts: [
        { title: 'သိကောင်းစရာ', category: 'Health Knowledegs', blurb: 'ဒီနေ့အတွက် သိကောင်းစရာ (၃၂)(၂၀၂၀) ပြည့်နှစ်၊ ဇွန်လ (၂၄) ရက်နေ့ ကလေးငယ်များရဲ့ အသက်အရွယ်အလိုက် ဖွံ့ဖြိုးတိုးတက်မှုတွေနဲ့ပတ်သက်ပြီး ဂရုပြုရမယ့်အချက်တွေက ဘာတွေလဲ', src: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg' },
        { title: 'SCVG', category: 'Health Knowledegs', blurb: '၂၀၂၀ ပြည့်နှစ်၊ ဇွန်လ (၁၄) ရက် သွေးလှူရှင်တွေအနေနဲ့ ဘာတွေသိထားသင့်တာလဲ? သွေးလှူမည့်သူတွေအနေနဲ့ ဒီအချက်တွေနဲ့ကိုက်ညီဖို့ လိုပါတယ်။', src: 'https://ww2.kqed.org/app/uploads/sites/43/2019/12/many-old-books-stacked-in-texture-picture-id1074590734-800x450.jpg' },
      ],
      tabs: [
        'All',
        'Nature',
        'Cities',
        'Branding',
        'Design',
      ],
    }),
  }
</script>
