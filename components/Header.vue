<template>
  <header class="absolute flex justify-between items-center fixed  top-0 left-0 right-0 h-85 z-10 lg:ml-[222px] bg-white shadow-[0_3px_2px_0_rgba(0,_0,_0,_0.10)] px-6 py-4">
    <i class="mdi-menu i-mdi-menu h-24 w-24 text-black lg:hidden"></i>
    
    <UserButton user-name="Gennadiy Sinigur" variant="filled">
      <template #circleAvatar>
        <img class="object-cover" src="/public/halloween-evil-pumpkin.svg" h-28 w-28 alt="helloween pumkin" />
      </template>

      <template #secondaryText>
        1 user
      </template>

      <template #additionalIcon>
        <i class="mdi-chevron-down i-mdi-chevron-down h-18 w-18"></i>
      </template>
    </UserButton>

    <div class="flex items-center gap-[18px]">
      <div class="hidden lg:flex items-center">
        <i class="i-ic-baseline-workspace-premium text-primary-blue-4 h-20 w-20"></i>

        <button class="text-xs font-500 ml-1">Top 100 Users</button>
      </div>

      <UserButton user-name="Gennadiy Sinigur" variant="outlined">
        <template #circleAvatar>
          <p class="h-28 w-28 text-white line-height-[1.8]">G</p>
        </template>

        <template #secondaryText>
          gennadiysinigur@gmail.com
        </template>
      </UserButton>

      <div class="absolute lg:static left-[50%] -translate-x-1/2 lg:hidden">
        <Logo />
      </div>
      
      <LanguageButton />
    </div>
  </header>
</template>