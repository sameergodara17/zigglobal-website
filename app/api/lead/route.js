export async function POST(req) {

  try {

    const body = await req.json()

    const { name, countryCode, phone, email, message } = body

    console.log("NEW LEAD:", {
      name,
      countryCode,
      phone,
      email,
      message
    })

    return Response.json({
      success: true,
      message: "Lead received"
    })

  } catch (error) {

    console.error("Lead API error:", error)

    return Response.json({
      success: false
    }, { status: 500 })

  }

}
