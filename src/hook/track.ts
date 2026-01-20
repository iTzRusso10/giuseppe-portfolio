const track = (name: string, params?: Record<string, any>) => {
    if (window.gtag) window.gtag('event', name, params)
    else window.dataLayer?.push({ event: name, ...params })
  }