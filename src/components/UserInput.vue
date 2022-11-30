<script setup>
import {useDataStore} from '../stores/DataStore'

let data = useDataStore();

function uploadFile(e){
    const files = e.target.files
    if (!files.length) return

    const reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = () => (data.imageSource = reader.result)
}
</script>

<template>
    <div>
        <!-- ? user Information -->
        <section class="">
          <h1 class="text-2xl font-bold">User Information</h1>
          <div class="mt-2">
              <label for="name" class="text-xl font-medium">Name</label>
              <input type="text" id="name" placeholder="Name" v-model="data.name"
                  class="block p-2 border-2 border-gray-400 rounded-md w-9/12"
                  >
          </div>
          <div class="mt-3">
              <label for="username" class="text-xl font-medium">Username</label>
              <input type="text" id="username" placeholder="@username" v-model.trim="data.username"
                  class="block p-2 border-2 border-gray-400 rounded-md w-9/12"
                  >
          </div>
          <div class="mt-3">
              <label for="content" class="text-xl font-medium">Username</label>
              <textarea id="content" placeholder="Description..." v-model="data.description"
                  class="block p-2 border-2 border-gray-400 rounded-md w-9/12 h-32"
                  ></textarea>
          </div>
        </section>
        
        <!-- ? Image Section -->
        <section class="mt-8">
            <h1 class="text-2xl font-bold">Display Picture(Dp)</h1>
            <div class="mt-2">
                <label for="image" class="text-xl font-medium">Username</label>
              <input type="file" id="image" @change="uploadFile"
                  class="block border-2 border-gray-400 rounded-md w-9/12"
                  >
          </div>
        </section>
        <!-- ? Color Section -->
        <section class="mt-8">
            <h1 class="text-2xl font-bold">Post Colors</h1>
            <div class="flex w-full justify-around">
                <span>
                    <br><label for="nameColor" class="text-xl font-medium">Name</label><br>
                    <input type="color" id="nameColor" v-model="data.nameColor">
                </span>
                <span>
                    <br><label for="contentColor" class="text-xl font-medium">Content</label><br>
                    <input type="color" id="contentColor" v-model="data.contentColor">
                </span>
                <span>
                    <br><label for="usernameColor" class="text-xl font-medium">Username</label><br>
                    <input type="color" id="usernameColor" v-model="data.usernameColor">
                </span>
                <span>
                    <br><label for="innerColor" class="text-xl font-medium">Inner Background</label><br>
                    <input type="color" id="innerColor" v-model="data.innerBackgroundColor">
                </span>
                <span>
                    <br><label for="outerColor" class="text-xl font-medium">Outer Background</label><br>
                    <input type="color" id="outerColor" v-model="data.outerBackgroundColor">
                </span>
            </div>
        </section>
        <!-- todo Social Media Section -->
        <section class="mt-8">
            <h1 class="text-2xl font-bold">Social Media</h1>
            <select class="px-4 w-44 py-1 mt-3 border-2 border-black" v-model="data.socialMedia" >
                <option value="none" disabled>Select One</option>
                <option value="Twitter">Twitter</option>
                <option value="Instagram">Instagram</option>
                <option value="Linkedin">Linkedin</option>
            </select>
        </section>
    </div>
</template>