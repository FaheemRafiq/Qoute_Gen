import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', {
    state: () => ({ 
      name: 'Name',
      username: 'username',
      description: "One kind word can change someone's entire day",
      nameColor: '#000',
      contentColor: '#000',
      innerBackgroundColor: '#fff',
      outerBackgroundColor: '#000',
      usernameColor: '#000',
      imageSource:'',
      socialMedia: 'Twitter'
    }),

    getters:{
      getUserName: (state) => "@" + state.username,
      getImageSource(state){
        if (state.imageSource == '') {
          return state.imageSource = 'https://cdn.statusqueen.com/dpimages/thumbnail/Boy_Stylish__Dp_Image-2277.jpg';
        }
        return state.imageSource
      },
    },

    actions:{
      
    }
})
