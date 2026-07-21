import PageNotFound from "@/pages/404"
import Link from "next/link"
import React, { Fragment } from "react"
import Header from "./layout/header/header"

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
      
      // Define a state variable to track whether is an error or not
      this.state = { 
        hasError: false,
        error:""
       }
    }
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI
   
      return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
      // You can use your own error logging service here
      this.setState({ error: error.message });
      console.log({ error, errorInfo })
    }
    render() {
      // Check if the error is thrown
      const { statusCode } = this.props;

      if (statusCode === 404) {
        return <PageNotFound message="Page not found" />;
      }
 
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
<Fragment>
  {/* <Header /> */}
<section className="font-roboto flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 dark:text-gray-600">
            <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
            <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
            <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
            <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
          </svg>
          {/* <p className="text-3xl">Looks like our services are currently offline</p> */}
          <p className="text-3xl">Terjadi kesalahan,  {this.state.error}</p> 
          
          <Link rel="noopener noreferrer" href="/" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"   onClick={() => this.setState({ hasError: false })}>Back to homepage</Link>
        </div>
    </section>
</Fragment>
        )
      }
   
      // Return children components in case of no error
   
      return this.props.children
    }
  }
   
  export default ErrorBoundary