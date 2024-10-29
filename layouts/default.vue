<template>
  <div class="grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr] min-h-screen">
    <aside class="fixed top-0 left-0 h-full bg-primary-light w-0 lg:w-222">
      Sidebar
    </aside>
    
    <header class="fixed  top-0 left-0 right-0 text-white h-85 z-10 lg:ml-[222px] bg-white shadow-[0_3px_2px_0_rgba(0,_0,_0,_0.10)]">
      Header
    </header>

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