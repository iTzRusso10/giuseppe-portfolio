import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface QuoteFormData {
  firstName: string
  lastName: string
  contact: string
  contactMethod: 'email' | 'whatsapp'
  selectedPackage: string
  selectedAddons: Array<string>
  totalPrice: number
  notes?: string
}

export const sendEmail = async (
  formData: FormData,
): Promise<{ success: boolean; error?: string }> => {
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID_EMAILJS,
      import.meta.env.VITE_TEMPLATE_ID_EMAILJS,
      {
        to_email: 'russo.giuseppe.dev@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    )

    if (result.status === 200) {
      return { success: true }
    } else {
      return {
        success: false,
        error: `EmailJS returned status ${result.status}`,
      }
    }
  } catch (err: any) {
    console.error('EmailJS error:', err)
    console.log(process.env.EMAILJS_PUBLIC_KEY)
    return {
      success: false,
      error: err?.text || err?.message || 'Unknown error',
    }
  }
}

export const sendQuoteRequest = async (
  formData: QuoteFormData,
  addonsDetails: Array<{ name: string; price: number }>,
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Formato addons per l'email
    const addonsText =
      addonsDetails.length > 0
        ? addonsDetails
            .map((addon) => `• ${addon.name}: +€${addon.price}`)
            .join('\n')
        : 'Nessuna aggiunta selezionata'

    // Messaggio formattato
    const message = `
🎯 NUOVA RICHIESTA PREVENTIVO

📋 DATI CLIENTE

Nome: ${formData.firstName} ${formData.lastName}
Contatto preferito: ${formData.contactMethod === 'email' ? '📧 Email' : '💬 WhatsApp'}
${formData.contactMethod === 'email' ? 'Email' : 'Telefono'}: ${formData.contact}

──────────────────────

💼 PACCHETTO RICHIESTO
${formData.selectedPackage}

──────────────────────

➕ AGGIUNTE OPZIONALI
${addonsText}

──────────────────────

💰 TOTALE PREVENTIVO
€${formData.totalPrice}
${
  formData.notes
    ? `
──────────────────────
📝 NOTE AGGIUNTIVE
${formData.notes}
`
    : ''
}

⏰ Data richiesta: ${new Date().toLocaleString('it-IT')}
    `.trim()

    const result = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID_EMAILJS,
      import.meta.env.VITE_TEMPLATE_ID_EMAILJS,
      {
        to_email: 'russo.giuseppe.dev@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.contact,
        subject: `🎯 Richiesta Preventivo: ${formData.selectedPackage}`,
        message: message,
      },
    )

    if (result.status === 200) {
      return { success: true }
    } else {
      return {
        success: false,
        error: `EmailJS returned status ${result.status}`,
      }
    }
  } catch (err: any) {
    console.error('EmailJS error:', err)
    return {
      success: false,
      error: err?.text || err?.message || 'Unknown error',
    }
  }
}
