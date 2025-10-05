"use server"

export async function submitInvitation(prevState: any, formData: FormData) {
  const nombre = formData.get("nombre") as string
  const telefono = formData.get("telefono") as string
  const email = formData.get("email") as string

  // Validar campos obligatorios
  if (!nombre || !telefono) {
    return {
      success: false,
      message: "Por favor completa todos los campos obligatorios",
    }
  }

  try {
    // Enviar a Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY, // Necesitas obtener esta key
        subject: "Nueva solicitud de invitación - Yogui",
        from_name: "Yogui Landing Page",
        nombre: nombre,
        telefono: telefono,
        email: email || "No proporcionado",
        to_email: "lanfranconi@gmail.com", // Tu email
      }),
    })

    const data = await response.json()

    if (data.success) {
      return {
        success: true,
        message: "Invitación solicitada",
      }
    } else {
      throw new Error("Error en el envío")
    }
  } catch (error) {
    console.error("Error al enviar:", error)
    return {
      success: false,
      message: "Error al enviar la solicitud. Inténtalo nuevamente.",
    }
  }
}
