<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <UHeader>
      <template #title>Journalr</template>
    </UHeader>
    <UMain>
      <NuxtPage />
    </UMain>
    <UFooter>
      <template #default>
        <div class="text-center text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} <ULink to="https://github.com/rasliche">@rasliche</ULink>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
