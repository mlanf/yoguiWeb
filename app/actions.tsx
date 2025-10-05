"use server"

import { sendEmail } from "./emailService" // Declare or import the sendEmail variable

export async function submitInvitation(prevState: any, formData: FormData) {
  // Obtener los datos del formulario
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
    // Simular envío de email (aquí integrarías con un servicio real como Resend, SendGrid, etc.)
    console.log("Enviando email a lanfranconi@gmail.com con los datos:")
    console.log({
      nombre,
      telefono,
      email: email || "No proporcionado",
    })

    // Simular delay de envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // En producción, aquí enviarías el email real:
    await sendEmail({
      to: "lanfranconi@gmail.com",
      subject: "Nueva solicitud de invitación - Yogui",
      html: `
        <h2>Nueva solicitud de invitación</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email || "No proporcionado"}</p>
      `,
    })

    return {
      success: true,
      message: "Invitación solicitada",
    }
  } catch (error) {
    console.error("Error al enviar:", error)
    return {
      success: false,
      message: "Error al enviar la solicitud. Inténtalo nuevamente.",
    }
  }
}
