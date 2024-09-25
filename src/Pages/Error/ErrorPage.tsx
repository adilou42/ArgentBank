import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="error">
            <h1>404</h1>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
  )
}

export default ErrorPage