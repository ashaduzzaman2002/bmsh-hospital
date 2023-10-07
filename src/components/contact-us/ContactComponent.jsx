import { CallerLogoLight, FbLogoLight, GoogleLogoLight, LinkedInLogoLight, LocationLogoLight, MailLogoLight } from '../../assets/svg/SVGIcon'
import './contact.css'

const ContactComponent = () => {
  return (
    <div className='container contact-us-wrapper py-4 fs-6'>

      <div className='left '>
        
        <div className='top'>
          <h5>Contact</h5>
          <div className='mt-3'>

            <div className='d-flex gap-2 justify-content-start align-items-center'>
              <div className='logos'><LocationLogoLight /></div> <p className='m-0'>4th floor, Atlanta Shopping Mall, Althan Chokdi Vesu, Althan-Bhimrad canal Road, Surat-395017</p>
            </div>
            <div className='d-flex gap-2 justify-content-start align-items-center'>
            <div className='logos'><CallerLogoLight/></div> <p className='m-0'>+91 9227928283</p>
            </div>
            <div className='d-flex gap-2 justify-content-start align-items-center'>
            <div className='logos'><MailLogoLight/></div> <p className='m-0'>bmsh.surat@gmail.com</p>
            </div>

          </div>
        </div>

        <div className='botton mt-3'>
          <h5>Social Media</h5>
          <div className="logos d-flex gap-3">
            <div className="fb-logo">
              <FbLogoLight/>
            </div>
            <div className="linkedin-logo">
              <LinkedInLogoLight/>
            </div>
            <div className="google-logo">
              <GoogleLogoLight/>
            </div>
          </div>
        </div>

      </div>

      <div className='right g-col-6'>
        <h5>Get In Touch</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='d-flex flex-wrap gap-2'>
          <input className='col col-md-0' type="text" placeholder='Name' />
          <input className='col col-md-0' type="number" placeholder='Number' />
          <input className='col col-md-0' type="email" placeholder='Email' />
          <input className='col col-md-0' type="text" placeholder='Subject' />
          <textarea className='col col-12' type="textbox" placeholder='Reason of Appointment' />
          <div className='col col-12 text-center btn-primary'>Submit</div>
        </div>
      </div>

    </div>
  )
}

export default ContactComponent