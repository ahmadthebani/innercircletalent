import React , {useEffect} from 'react'

const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = '//js.hsforms.net/forms/embed/v2.js'
        document.body.appendChild(script)
    
        script.onload = () => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              region: 'na1',
              portalId: '45596133',
              formId: 'e3cb84c4-8417-478e-a833-7d4069e28de0'
            })
          }
        }
    
        return () => {
          document.body.removeChild(script)
        }
      }, [])
  return (
    <div>  
        <div className="hbspt-form">
            {/* The form will be inserted here */}
        </div>
    </div>
  )
}

export default HubspotContactForm