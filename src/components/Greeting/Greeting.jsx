export default function Greeting({ firstName, albumCount }) {
  return (
    <div>
      <p>
        Hello, {firstName}!
      </p>
      <p>
        You have {albumCount} albums.
      </p>
    </div>
  );
}
