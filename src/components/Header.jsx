import React from 'react';

export const Header = () => {
  return (
    <div class="bg-slate-900 p-4 flex items-center justify-between">
  <div class="text-white text-2xl font-bold">DANGER ELEGKTES</div>
  <div class="space-x-4">
    <button class="bg-white text-red-600 px-4 py-2 rounded-full">Favorites</button>
    <button class="border-hwite text-green-400 px-4 py-2 rounded-full">Login</button>
  </div>
</div>

  )
}