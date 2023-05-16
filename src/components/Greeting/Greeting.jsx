export default function Greeting(props) {
  return (
    <div>
      <span>Hello, {props.firstName}!</span>
      <span>You have {props.albumCount ?? 0} albums.</span>
    </div>
  );
}
