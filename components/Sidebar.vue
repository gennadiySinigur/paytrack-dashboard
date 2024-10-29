<template>
  <aside class="fixed top-0 left-0 h-full bg-[#f7f2e8] hidden lg:block w-0 lg:w-222">
    <div class="flex items-center justify-center gap-1 p-6 mb-2">
      <img src="/public/sirius_logo_halloween.png" h-44 w-44 />
      <p class="font-900 text-xl">SIRIUS</p>
    </div>

    <nav>
      <ul>
        <li v-for="(menuItem, index) in sidebarMenu" class="flex items-center first:bg-[#8a6a50] hover:bg-[#ead8c6] h-52 p-[14px_24px] first:mb-6 last:mt-6 rounded-tl-lg rounded-bl-lg">
          <NuxtLink 
            :to="menuItem.path" 
            class="flex text-[#8a6a50]"
            :style="{color: index === 0 ? 'white' : ''}"
          >
            <i :class="menuItem.iconClass"></i>
            <span class="font-500 ml-2 text-3.5 line-height-6">{{ menuItem.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
interface SidebarMenu {
  title: string;
  path: string;
  iconClass: string;
}

const sidebarMenu: Array<SidebarMenu> = [
  {
    title: "Dashboard",
    path: "#",
    iconClass: "i-ic-outline-dashboard block h-24 w-24 min-w-24",
  },
  {
    title: "Invoices",
    path: "#",
    iconClass: "i-ic-baseline-list-alt block h-24 w-24 min-w-24",
  },
  {
    title: "Payments",
    path: "#",
    iconClass: "i-ic-outline-payments block h-24 w-24 min-w-24",
  },
  {
    title: "Settings",
    path: "#",
    iconClass: "i-ic-outline-settings block h-24 w-24 min-w-24",
  },
];
</script>