

export const PageHeader = ({title, description}) => {
  return (
    <>
      <p className="About-description">{description}</p>
      <h3 className="About-title">{title}</h3>
    </>
  )
}
