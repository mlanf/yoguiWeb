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
    // Guardar en Google Sheets
    const response = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        telefono: telefono,
        email: email || "No proporcionado",
        fecha: new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" }),
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.result === "success") {
      return {
        success: true,
        message: "Invitación solicitada",
      }
    } else {
      throw new Error(data.error || "Error desconocido")
    }
  } catch (error) {
    console.error("Error al guardar en Google Sheets:", error)
    return {
      success: false,
      message: "Error al enviar la solicitud. Inténtalo nuevamente.",
    }
  }
}
