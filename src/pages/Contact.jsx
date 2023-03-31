import { ContactInfo, Form, PageHeader, SocialIcons } from "../components"

export const Contact = ({name,email,location}) => {
  return (
    <div className="Contact">
      <PageHeader title="Contact" description="Get in touch"/>
      <div className="Wrapper">
        <div className="Contact-form">
          <Form />
        </div>
        <div className="Contact-information">
          <ContactInfo email={email} location={location} name={name} />
        </div>
      </div>
      <SocialIcons />

    </div>
  )
}
