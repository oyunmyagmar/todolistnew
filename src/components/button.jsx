export const Button = (props) => {
  console.log(props);
  return (
    <div>
      <button className={`rounded-md ` + props.className}>{props.name}</button>
    </div>
  );
};
