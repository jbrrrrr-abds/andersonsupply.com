const unauthorizedPage = () => {
  return (
    <>
    <h1 className="text-3xl">Unauthorized</h1>
    <p className="mt-4">This account is not connected to an available archive of designs.  Please contact customer support.</p>
    <p className="mt-4 text-sm underline"><a href="./login/">return to login</a></p>
    </>
  )
}

export default unauthorizedPage;
