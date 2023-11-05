import { AvatarBox } from "../../Components/Avatar/Avatar";
import "./Avatar.css";

const Avatar = () => {
  return (
    <main>
      <h1>Avatar Component</h1>
      <p>
        The avatar component displays an image representing user or entity,
        along with name.
      </p>

      <div className="avatarbox-wrapper">
        <AvatarBox
          image={
            "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530827853?k=6&m=530827853&s=612x612&w=0&h=FYnhkmLYaHjYSyTva1A72eDj5yu3sU7TUXg_BsH1Dfw="
            // "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829125?k=6&m=530829125&s=612x612&w=0&h=Z76VH4c_W2aJ6UdUnjuCtLssjlFVNwNEns5VVNpH1Mg="
          }
          alt={"Avatar Component"}
          size={"xs"}
        />
        <AvatarBox
          image={
            "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530827853?k=6&m=530827853&s=612x612&w=0&h=FYnhkmLYaHjYSyTva1A72eDj5yu3sU7TUXg_BsH1Dfw="
          }
          alt={"Avatar Component"}
          size={"s"}
        />
        <AvatarBox
          image={
            "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530827853?k=6&m=530827853&s=612x612&w=0&h=FYnhkmLYaHjYSyTva1A72eDj5yu3sU7TUXg_BsH1Dfw="
          }
          alt={"Avatar Component"}
          size={"m"}
        />
        <AvatarBox
          image={
            "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530827853?k=6&m=530827853&s=612x612&w=0&h=FYnhkmLYaHjYSyTva1A72eDj5yu3sU7TUXg_BsH1Dfw="
          }
          alt={"Avatar Component"}
          size={"l"}
        />
        <AvatarBox
          image={
            "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530827853?k=6&m=530827853&s=612x612&w=0&h=FYnhkmLYaHjYSyTva1A72eDj5yu3sU7TUXg_BsH1Dfw="
          }
          alt={"Avatar Component"}
          size={"xl"}
        />
      </div>
      <br />

      <h3>How to use Avatar Component?</h3>
      <iframe
        title="avatar-components"
        src="https://carbon.now.sh/embed/fsc4bJzRs44g8CEPDTbz"
        sandbox="allow-scripts allow-same-origin"
        className="avatar-iframe-component"
      ></iframe>
    </main>
  );
};
export default Avatar;
