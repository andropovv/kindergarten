type Mods = Record<string, string|boolean>

export function classNames(cls: string, mods: Mods ={}, additional:Array<string|undefined>=[]): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([k,v]) => Boolean(v))
      .map(([k,v]) => k),
    ...additional.filter(Boolean)
  ].join(' ')
}