export const useRandomId = () => {
  const usedIds = useState<number[]>('usedIds', () => [])

  const getRandomId = (id: string | undefined, prefix: string): string => {
    if (typeof id !== 'undefined')
      return id

    let randomId = -1

    do {
      randomId = Math.round(Math.random() * 10000)
    } while (usedIds.value.includes(randomId))

    return `${prefix}-${randomId}`
  }

  return {
    getRandomId
  }
}
