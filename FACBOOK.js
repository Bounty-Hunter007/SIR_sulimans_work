import FbImageLibrary from "react-fb-image-grid";

function FACEBOOK(props) {
  const { title, username, image } = props;
  return (
    <div className="data">
      <div className="main">
        <div className="profile">
          <img
            className="avatar"
            src="https://th.bing.com/th/id/OIP.tw6U3gB3k88XJjnyg5PPcgAAAA?pid=ImgDet&rs=1"
            alt="Post"
            width={60}
            height={60}
          />
          <p>{username}</p>
        </div>
        <div className="post">
          <p> {title}</p>
        </div>
        <div classname="images-post">
          <div width={260} height={260}>
            <FbImageLibrary images={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FACEBOOK;
