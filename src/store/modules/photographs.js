// Utilities
import { make } from 'vuex-pathify'

const state = {
  filter: 'All',
  picture: null,
  categories: [
    'Health Knowledge',
    'COVID-19',
    'General',
  ],
  pictures: [{ message: 'SCVG served several thousands of youth', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/childmpower.jpg?alt=media&token=b33c3645-9553-4be2-af50-b0dfa01a29d1', icon: 'mdi-lightbulb-on', indicator: 'Youth network', value: 1500 },
  { message: 'community strengthening', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/child_writing.jpg?alt=media&token=298a611b-70ed-444b-9fcb-0f9136020e86', icon: 'mdi-lightbulb-on', indicator: 'Trainging', value: 1500 },
  { message: 'child rights governance', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/child.jpg?alt=media&token=692d6e7b-365e-4317-8359-79bc6a474ae6', icon: 'mdi-lightbulb-on', indicator: 'Childrens protected', value: 1500 },
  { message: 'community-based organisations strengthening ', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/social.jpg?alt=media&token=6211102b-a51c-4639-bc80-291bbb6e7e1c', icon: 'mdi-lightbulb-on', indicator: 'Community Training', value: 1500 },
  { message: 'youth capacity building', src: 'https://firebasestorage.googleapis.com/v0/b/scvg-mm.appspot.com/o/training.jpg?alt=media&token=2be2b1b3-6fe3-40b9-83c1-9dfd991541cc', icon: 'mdi-lightbulb-on', indicator: 'Training', value: 1500 },
],

}

const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  mutations,
}
