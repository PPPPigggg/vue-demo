// import type { directiveType } from "../directiveType";

import type { directiveType } from '../types'

export const vFocus: directiveType = {
  name: 'focus',
  option: {
    mounted: (el) => el.focus(),
  }
}
