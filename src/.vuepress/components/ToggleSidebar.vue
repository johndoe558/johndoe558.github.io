<script setup>
const toggleSidebar = () => {
  const html = document.documentElement
  const isOpen = html.getAttribute("data-sidebar") === "open"

  html.setAttribute("data-sidebar", isOpen ? "close" : "open")
}
</script>

<template>
  <button @click="toggleSidebar">
    ☰ Buka Sidebar
  </button>
</template>