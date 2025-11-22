import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
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
