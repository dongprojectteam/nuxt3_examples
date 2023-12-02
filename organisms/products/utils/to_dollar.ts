export default (price: number | string): string => {
  const priceAsNumber: number =
    typeof price === 'string' ? parseFloat(price) : price
  return `$${priceAsNumber.toLocaleString()}`
}
