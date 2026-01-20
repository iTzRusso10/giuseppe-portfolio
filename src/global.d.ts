export {}

declare global {
  interface Window {
    dataLayer?: Array<unknown>
    gtag?: (...args: Array<unknown>) => void
  }
}