const ContactButton = () => {

  const ipKey = import.meta.env.VITE_IPDATA_API_KEY

  const contact = async () => {
    const ip = await retrieveIp()
    const url = "https://webhook.site/cac7d88b-e709-433d-988b-f73b531eafe5"
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Juan Vinueza",
        date: new Date().toUTCString(),
        ip
      })
    }
    return await fetch(url, init)
  }

  const retrieveIp = async () => {
    return fetch(`https://api.ipdata.co?api-key=${ipKey}`)
      .then(res => res.json()
                     .then(x => x.ip)
           )
      .catch(err => err)
  }

  return (
    <button onClick={() => contact()}>
      <span className="contact-button-copy">
      Contact Us
      </span>
    </button>
  )
}

export default ContactButton
