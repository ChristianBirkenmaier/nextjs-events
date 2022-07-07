import Button from "./button";
import ErrorAlert from "./error-alert";

const ErrorRedirect: React.FC<{
  redirect: string;
  redirectMsg: string;
  message: string;
}> = (props) => {
  return (
    <>
      <div className="center">
        <ErrorAlert>
          <Button link={props.redirect}>{props.redirectMsg}</Button>
        </ErrorAlert>
        <p>{props.message}</p>
      </div>
    </>
  );
};

export default ErrorRedirect;
