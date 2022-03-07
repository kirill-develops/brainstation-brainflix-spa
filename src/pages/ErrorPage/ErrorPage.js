import './ErrorPage.scss'

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1 className='error-page__headline'>404</h1>
      <h2 className='error-page__subheader'>Not Found</h2>
      <p className='error-page__body'>The resource requested could not be found on this server</p>
    </div>
  )
}

export default ErrorPage