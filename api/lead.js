
export default async function handler(req,res){

if(req.method !== "POST"){
return res.status(405).json({message:"Method not allowed"})
}

const {name,countryCode,phone,email,message}=req.body

console.log("NEW LEAD:",{name,countryCode,phone,email,message})

return res.status(200).json({success:true})
}
