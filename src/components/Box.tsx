interface IBoxProps {
  isChecked: boolean;
  onClick: () => void;
}
export const Box: React.FC<IBoxProps> = ({ isChecked, onClick }) => {
  let classes = "box";
  if (isChecked) classes = classes.concat(" boxChecked");
  return <div className={classes} onClick={onClick} />;
};
