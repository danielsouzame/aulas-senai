import "./Avatar.css";

const Avatar = ({ nome }) => {
    const primeirasLetras = nome.split(" ").map(item => item[0]).join("")
  return <div className="avatar__root">{primeirasLetras}</div>;
};

export default Avatar;