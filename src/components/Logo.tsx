interface ILogoProps {
  source: string;
}

export const Logo: React.FC<ILogoProps> = ({ source }) => {
  return <img className="logo" src={source} alt="logo" />;
};
