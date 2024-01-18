'use client' // Error components must be Client Components
import { useEffect } from "react"
export default function Error({ error, reset }) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])


  return <main className="error">
    <h1>Something went wrong!</h1>
    <p>{error.message}</p>
    <p className="errorbutton">
      <button onClick={() => reset()}>Try again</button>
    </p>

  </main>
}







/* The error component can be added to specific pages 
  that sits in the same folder as the error.js file 
  and it will affect any nested page or layout
  Or you can add it to the root page of the project, you can be as granular as you want 
*/