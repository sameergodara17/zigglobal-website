
import React, { useState, useEffect } from "react";

const blogPosts = [
  {
    slug: "how-to-start-business-uae",
    title: "How to Start a Business in UAE: Complete Guide for International Founders",
    excerpt: "Step‑by‑step guide for global entrepreneurs planning to launch a company in the UAE.",
    content: `Starting a business in the UAE has become one of the most attractive opportunities for global entrepreneurs.`
  },
  {
    slug: "free-zone-vs-mainland-uae",
    title: "Free Zone vs Mainland Company in UAE",
    excerpt: "Understand the key differences between free zone and mainland companies in UAE.",
    content: `Free Zone companies allow 100% ownership while mainland companies allow local market access.`
  },
  {
    slug: "cost-of-company-formation-uae",
    title: "Cost of Company Formation in UAE (2026 Guide)",
    excerpt: "Breakdown of costs involved in setting up a UAE company.",
    content: `The cost of setting up a UAE company varies depending on jurisdiction and visa requirements.`
  },
  {
    slug: "uae-corporate-tax-guide",
    title: "UAE Corporate Tax Guide for New Businesses",
    excerpt: "Understand how the UAE corporate tax system impacts businesses.",
    content: `Corporate tax in UAE is 9% on profits above the threshold.`
  },
  {
    slug: "open-corporate-bank-account-uae",
    title: "How to Open a Corporate Bank Account in UAE",
    excerpt: "Key requirements for opening a UAE corporate bank account.",
    content: `Banks require trade license, passports and proof of business activity.`
  }
];

function HomeLeadForm() {
  const [submitted,setSubmitted]=useState(false)
  const [loading,setLoading]=useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    const form=e.target

    const data={
      name:form.name.value,
      countryCode:form.countryCode.value,
      phone:form.phone.value,
      email:form.email.value,
      message:form.message.value
    }

    try{
      setLoading(true)
      await fetch("/api/lead",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      })
      setSubmitted(true)
    }catch(err){
      alert("Submission failed")
    }
    setLoading(false)
  }

  if(submitted){
    return(
      <div className="text-center space-y-6">
        <div className="text-green-400">Thank you. Our team will contact you shortly.</div>
        <a href="https://wa.me/971521250169" target="_blank">Continue on WhatsApp</a>
      </div>
    )
  }

  return(
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Full Name" required/>
      <div>
        <input name="countryCode" placeholder="+971"/>
        <input name="phone" placeholder="Phone Number" required/>
      </div>
      <input name="email" placeholder="Email" required/>
      <textarea name="message" placeholder="Message"/>
      <button>{loading?"Submitting...":"Submit Inquiry"}</button>
    </form>
  )
}

export default function ZigGlobalPreview(){
  const [page,setPage]=useState("home")

  return(
    <div style={{fontFamily:"Arial",padding:40}}>
      <h1>Zig Global</h1>

      {page==="home" && (
        <>
          <h2>Build Your Business in the UAE</h2>
          <button onClick={()=>document.getElementById("leadform").scrollIntoView()}>
            Get Free Setup Consultation
          </button>

          <h3 id="leadform">Start Your UAE Company Today</h3>
          <HomeLeadForm/>
        </>
      )}

      {page==="blogs" && (
        <div>
          {blogPosts.map(b=>(
            <div key={b.slug}>
              <h3>{b.title}</h3>
              <p>{b.excerpt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
