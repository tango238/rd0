export {}

declare global {
  interface Array<T> {
    countValues(): Map<string, number>
  }
}

Array.prototype.countValues = function() {
  return this.reduce((item, current) => {
      const count = item.get(current) ?? 0
      item.set(current, count + 1)
      return item
    },
    new Map<string, number>()
  )
}