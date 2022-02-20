import Axios from "axios";
import { useState } from "react";
import "../../../sass/NewListingModal.scss";

export default function NewListingModal({ setModalOpen }: any) {
  const [imageSelected, setImageSelected] = useState<File | string>("");

  const submitHandler = (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "b3wyywhu");
    formData.append("folder", "Home/store/products");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dswd5vjd9/image/upload",
      formData
    )
      .then((res: any) => {
        setImageSelected("");
        // get the image url back
        console.log(res.data.secure_url);
      })
      .catch((err: Error) => console.log(err));
  };

  return (
    <div className="newListingModal-background">
      <div className="newListingModal-container">
        <h2 className="newListing-title">New Listing Information</h2>
        <form className="newListing-form" onSubmit={submitHandler}>
          <table>
            {/* Use a third-party library to store uploaded image to cloud and get back the url */}
            <tr>
              <td>
                <label htmlFor="imageUrl">Image URL</label>
              </td>
              <td>
                <input
                  type="file"
                  id="imageUrl"
                  onChange={(event) => {
                    if (event.target.files !== null) {
                      setImageSelected(event.target.files[0]);
                    }
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input type="text" id="name" placeholder="Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="price">Price</label>
              </td>
              <td>
                <input type="text" id="price" placeholder="Price" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="description">Description</label>
              </td>
              <td>
                <textarea id="description" placeholder="Description" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="number">Number In Stock</label>
              </td>
              <td>
                <input type="text" id="number" placeholder="Number" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="genre">Genre</label>
              </td>
              <td>
                <input type="text" id="genre" placeholder="Genre" />
              </td>
            </tr>
          </table>
          <div className="newListing-btnGroup">
            <button
              onClick={() => setModalOpen(false)}
              className="newListing-cancelBtn"
            >
              Cancel
            </button>
            <button className="newListing-addBtn" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
