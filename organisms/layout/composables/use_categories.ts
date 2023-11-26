export const useCategories = async () => {
  const categories = useState<Category[]>('categories', () => [])

  const setActiveCategory = (categoryLabel: string) => {
    categories.value.forEach((category) => {
      category.active = category.label == categoryLabel
    })
  }

  if (!categories.value.length) {
    // Category를 받지 않은 경우 Category를 받아옵니다.
    const { data } = await useFetch('/products/categories', {
      key: 'categories',
      baseURL: useRuntimeConfig().public.apiBase,
    })

    categories.value = (data.value as string[]).map((category) => ({
      label: category,
      active: false,
    }))
  }

  return {
    categories,
    setActiveCategory,
  }
}
