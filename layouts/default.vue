<template>
  <div class="grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr] min-h-screen">
    <Sidebar />
    
    <Header />

    <main class="row-span-2 col-span-2 mt-[150px] lg:ml-[222px]">
      <div class="max-w-920 xl2:max-w-1000 xl3:max-w-1600 mx-auto w-full">
        <slot />
      </div>
    </main>

    <footer class="row-span-1 col-span-2 bg-primary-dark text-white h-156 lg:h-108">
      Footer
    </footer>
  </div>
</template>