export default function Completed({ valid }) {
  console.log(valid);
  return <div>{valid && <div>STATUS COMPLETED</div>}</div>;
}
