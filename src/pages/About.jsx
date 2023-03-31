import React from 'react'
import { AboutMe, PageHeader } from '../components'

export const About = ({name, location, brand, availability, email}) => {
  return (
    <section className='About'>
      <PageHeader  title="About Me" description="Let me introduce myself" />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability}  />
    </section>
  )
}
