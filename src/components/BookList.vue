<template>
    <div class="p-8 max-w-3xl mx-auto">
      <!-- Titre -->
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">📚 Liste des Livres</h1>
  
      <!-- Liste des livres -->
      <div class="space-y-4">
        <div
          v-for="book in books"
          :key="book._id"
          class="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div>
            <h2 class="text-lg font-semibold text-gray-900">{{ book.title }}</h2>
            <p class="text-sm text-gray-500">{{ book.author }}</p>
          </div>
          <button
            @click="deleteBook(book._id)"
            class="text-sm text-red-600 hover:text-red-800 transition"
          >
            Supprimer
          </button>
        </div>
      </div>
  
      <!-- Formulaire d'ajout stylé -->
      <div class="mt-10 bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 class="text-xl font-semibold mb-6 text-gray-800 text-center">➕ Ajouter un nouveau livre</h2>
  
        <form @submit.prevent="addBook" class="space-y-4">
          <div class="flex flex-col sm:flex-row sm:space-x-4">
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-1">Titre</label>
              <input
                v-model="title"
                type="text"
                placeholder="Ex: Le Petit Prince"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
  
            <div class="flex-1 mt-4 sm:mt-0">
              <label class="block text-sm font-medium text-gray-700 mb-1">Auteur</label>
              <input
                v-model="author"
                type="text"
                placeholder="Ex: Antoine de Saint-Exupéry"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
          </div>
  
          <div class="text-right">
            <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
            >
              Ajouter le livre
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  // Références pour les données
  const books = ref([])
  const title = ref('')
  const author = ref('')
  
  // Récupération des livres à l'initialisation
  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/api/books')
    books.value = res.data
  }
  
  // Ajout d'un livre
  const addBook = async () => {
    if (!title.value || !author.value) return
    await axios.post('http://localhost:5000/api/books', {
      title: title.value,
      author: author.value
    })
    title.value = ''
    author.value = ''
    fetchBooks()
  }
  
  // Suppression d’un livre
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`)
    fetchBooks()
  }
  
  onMounted(fetchBooks)
  </script>
  