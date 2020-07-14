// Utilities
import { make } from 'vuex-pathify'

const categories = [
  'All',
  'Health Knowledge',
  'General Knowledge',
  'Covid',
]

const state = {
  categories,
  filter: 'All',
  picture: null,
  articles: [
{ title: 'သိကောင်းစရာ', category: 'Health Knowledegs', body: 'ဒီနေ့အတွက် သိကောင်းစရာ (၃၂)(၂၀၂၀) ပြည့်နှစ်၊ ဇွန်လ (၂၄) ရက်နေ့ ကလေးငယ်များရဲ့ အသက်အရွယ်အလိုက် ဖွံ့ဖြိုးတိုးတက်မှုတွေနဲ့ပတ်သက်ပြီး ဂရုပြုရမယ့်အချက်တွေက ဘာတွေလဲ', src: '@/assests/baby.jpg' },
{ title: 'ကမ္ဘာ့သွေးလှူရှင်များနေ့', category: 'Health Knowledegs', body: '၂၀၂၀ ပြည့်နှစ်၊ ဇွန်လ (၁၄) ရက် သွေးလှူရှင်တွေအနေနဲ့ ဘာတွေသိထားသင့်တာလဲ? သွေးလှူမည့်သူတွေအနေနဲ့ ဒီအချက်တွေနဲ့ကိုက်ညီဖို့ လိုပါတယ်။', src: '@/assests/baby.jpg' },
{ title: 'အမေများအားလုံး ကျန်းမာပျော်ရွှင်ကြပါစေ...', category: 'General Knowledegs', body: 'ပညာရေးနဲ့ပတ်သက်ပြီး အပတ်စဉ်ကျင်းပတဲ့ ပြုစု စောင့်ရှောက်သူ ဆွေးနွေးပွဲများကို တက်ရောက်ခဲ့သူတစ်‌ဦးဖြစ်သူ မကွေးမြို့နယ်၊ ဖိုလေးလုံးကျေးရွာမှ မိခင်တစ်ဦးဖြစ်သူ မမြမြမှ သားဖြစ်သူအတွက် စာဖတ်ခြင်းအလေ့အထကို ဘယ်လိုဂရုစိုက်ပံ့ပိုးခဲ့သလဲဆိုတာ ပြောပြထားပါတယ်။', src: '@/assests/baby.jpg' },
{ title: 'ကဆုန်လပြည့် ဗုဒ္ဓနေ့', body: '(၂၀၂၀) ပြည့်နှစ်၊ မေလ (၆) ရက်နေ့ ဗုဒ္ဓဟူးနေ့ ကျရောက်သော 🙏ကဆုန်လပြည့်', src: '@/assests/fullmoon.jpg', category: 'General Knowledegs' },
{ title: 'COVID-19 ကမ္ဘာ့ကပ်ရောဂါဘေးမှ ကာကွယ်၊ ထိန်းချုပ်နိုင်ရန် အသိပညာပေး ဆောင်ရွက်ခြင်း', body: 'COVID-19 ကမ္ဘာ့ကပ်ရောဂါဘေးမှ ကာကွယ်၊ ထိန်းချုပ်နိုင်ရန်အတွက် အသိပညာပေး လုပ်ငန်းစဉ်များ ဆောင်ရွက်ခဲ့ပါသည်', src: '@/assests/covid.jpg', category: 'COVID-19 Response' },
],
}

const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  mutations,
}
