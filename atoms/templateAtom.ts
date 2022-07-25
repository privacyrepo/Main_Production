// templateAtom
import { atom } from 'recoil'

export const templateAtom = atom({
  key: 'templateAtom', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
