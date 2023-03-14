export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $msg: string
  }
}
