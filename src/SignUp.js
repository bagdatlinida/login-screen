import React from "react";
import "./SignUp.css";
import photo1 from "./profile.png";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePhoto: null,
    };

    this.previewImage = this.previewImage.bind(this);
    //this.profilePhoto = this.profilePhoto;
  }

  previewImage(event) {
    this.setState({
      profilePhoto: URL.createObjectURL(event.target.files[0]),
    });
  }

  /*profilePhoto(photoFromState) {
    return photoFromState == null ? photo1 : photoFromState;
  }*/

  render() {
    return (
      <div>
        <form className="SignUp">
        <div className="photoContainer">
            <img
              className="profilePhoto"
              id="preview"
              src={
                /*
              this.profilePhoto(this.state.profilePhoto)*/
                this.state.profilePhoto != null
                  ? this.state.profilePhoto
                  : photo1
              }
            />
          </div>
          <label class="header">Profile Photo:</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            onChange={this.previewImage}
          />
          <br />
          <br />
          <label> Full name: </label>
          <input required type="text" />
          <br />
          <br />
          <label> Identification Number: </label>
          <input required type="number" />
          <br />
          <br />
          <label> E-mail: </label>
          <input required type="mail" />
          <br />
          <br />
          <label>
            {" "}
            Cinsiyet:
            <input type="radio" name="cinsiyet" /> Kadın
          </label>
          <label>
            {" "}
            <input type="radio" name="cinsiyet" /> Erkek{" "}
          </label>
          <br />
          <br />
          Birthday: <input type="date" />
          <br />
          <br/>
          <button type="submit" className="submitButton" >
            Submit
            </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
