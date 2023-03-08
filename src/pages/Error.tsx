import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.error(error);

  const errorMessage = isRouteErrorResponse(error)
    ? `Error ${error.status} : ${error.statusText} - ${error.data}`
    : 'Unknown error';

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}

export default Error;
