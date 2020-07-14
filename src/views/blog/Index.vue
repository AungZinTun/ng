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
        { title: 'သိကောင်းစရာ', category: 'Health Knowledegs', blurb: 'ဒီနေ့အတွက် သိကောင်းစရာ (၃၂)(၂၀၂၀) ပြည့်နှစ်၊ ဇွန်လ (၂၄) ရက်နေ့ ကလေးငယ်များရဲ့ အသက်အရွယ်အလိုက် ဖွံ့ဖြိုးတိုးတက်မှုတွေနဲ့ပတ်သက်ပြီး ဂရုပြုရမယ့်အချက်တွေက ဘာတွေလဲ', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/child.jpg?alt=media&token=692d6e7b-365e-4317-8359-79bc6a474ae6' },
        { title: 'ကမ္ဘာ့သွေးလှူရှင်များနေ့', category: 'Health Knowledegs', blurb: '၂၀၂၀ ပြည့်နှစ်၊ ဇွန်လ (၁၄) ရက် သွေးလှူရှင်တွေအနေနဲ့ ဘာတွေသိထားသင့်တာလဲ? သွေးလှူမည့်သူတွေအနေနဲ့ ဒီအချက်တွေနဲ့ကိုက်ညီဖို့ လိုပါတယ်။', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/blood-donation.jpg?alt=media&token=30346531-2fda-47db-aa82-b1fd6d5b1ca6' },
        { title: 'အမေများအားလုံး ကျန်းမာပျော်ရွှင်ကြပါစေ...', category: 'General Knowledegs', blurb: 'ပညာရေးနဲ့ပတ်သက်ပြီး အပတ်စဉ်ကျင်းပတဲ့ ပြုစု စောင့်ရှောက်သူ ဆွေးနွေးပွဲများကို တက်ရောက်ခဲ့သူတစ်‌ဦးဖြစ်သူ မကွေးမြို့နယ်၊ ဖိုလေးလုံးကျေးရွာမှ မိခင်တစ်ဦးဖြစ်သူ မမြမြမှ သားဖြစ်သူအတွက် စာဖတ်ခြင်းအလေ့အထကို ဘယ်လိုဂရုစိုက်ပံ့ပိုးခဲ့သလဲဆိုတာ ပြောပြထားပါတယ်။', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/mother.jpg?alt=media&token=e2ba8292-61b2-4367-b649-ba10d7f3ea6e' },
        { title: 'ကဆုန်လပြည့် ဗုဒ္ဓနေ့', blurb: '(၂၀၂၀) ပြည့်နှစ်၊ မေလ (၆) ရက်နေ့ ဗုဒ္ဓဟူးနေ့ ကျရောက်သော 🙏ကဆုန်လပြည့်', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/fullmoon.jpg?alt=media&token=87064422-1f0e-4b18-9df0-fde5f6a4b84d', category: 'General Knowledegs' },
        { title: 'COVID-19 ကမ္ဘာ့ကပ်ရောဂါဘေးမှ ကာကွယ်၊ ထိန်းချုပ်နိုင်ရန် အသိပညာပေး ဆောင်ရွက်ခြင်း', blurb: 'COVID-19 ကမ္ဘာ့ကပ်ရောဂါဘေးမှ ကာကွယ်၊ ထိန်းချုပ်နိုင်ရန်အတွက် အသိပညာပေး လုပ်ငန်းစဉ်များ ဆောင်ရွက်ခဲ့ပါသည်', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/covid.jpg?alt=media&token=157a1e8d-5968-485d-ac1f-00965b46aa36', category: 'COVID-19 Response' },
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
