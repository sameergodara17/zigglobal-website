export async function POST(req) {

  const body = await req.json()

  const { name, countryCode, phone, email, message } = body

  console.log("NEW LEAD:", {
    name,
    countryCode,
    phone,
    email,
    message
  })

  return Response.json({ success: true })

}
