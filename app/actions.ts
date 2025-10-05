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
    // Verificar que existe la URL del script
    if (!process.env.GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL no está configurada")
      throw new Error("Configuración incompleta")
    }

    // Obtener la fecha y hora actual
    const fecha = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    })

    console.log("Enviando datos a Google Sheets:", { fecha, nombre, telefono, email })

    // Enviar datos a Google Sheets usando Google Apps Script
    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fecha,
        nombre,
        telefono,
        email: email || "No proporcionado",
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("Respuesta de Google Sheets:", data)

    if (data.result === "success") {
      return {
        success: true,
        message: "Invitación solicitada",
      }
    } else {
      throw new Error(data.error || "Error al registrar")
    }
  } catch (error) {
    console.error("Error al enviar:", error)
    return {
      success: false,
      message: "Error al enviar la solicitud. Inténtalo nuevamente.",
    }
  }
}
