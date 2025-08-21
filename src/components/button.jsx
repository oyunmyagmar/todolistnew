export const Button = (props) => {
  console.log(props);
  return (
    <button className={`rounded-md` + props.className}>{props.name}</button>
  );
};
