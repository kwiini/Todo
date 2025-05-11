import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'todo-input': 'px-3 py-2 w-[70%] border border-gray-300 rounded m-2',
      'add-button': 'px-4 py-2 bg-emerald-500 text-white border-none rounded cursor-pointer hover:bg-emerald-600',
      'todo-list': 'list-none p-0 mt-5',
      'todo-item': 'flex justify-between items-center p-2.5 my-2 bg-gray-100 rounded',
      'delete-button': 'px-2 py-1 bg-red-500 text-white border-none rounded cursor-pointer hover:bg-red-600'
    }
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})