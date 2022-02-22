import axios from "axios";
import Cookies from "js-cookie";
import { useState, useRef } from "react";

import "../../../sass/NewListingModal.scss";

export default function NewListingModal({
  setModalOpen,
  email,
  setListings,
}: any) {
  const jwt = Cookies.get("jwt")!;
  const [imageSelected, setImageSelected] = useState<File | string>("");
  const nameRef = useRef(document.createElement("input"));
  const priceRef = useRef(document.createElement("input"));
  const descriptionRef = useRef(document.createElement("textarea"));
  const numberRef = useRef(document.createElement("input"));
  const genreRef = useRef(document.createElement("input"));

  const submitHandler = (e: any) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;
    const number = numberRef.current.value;
    const genre = genreRef.current.value;

    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "b3wyywhu");
    formData.append("folder", "Home/store/products");

    // Post image to Cloudinary
    axios
      .post("https://api.cloudinary.com/v1_1/dswd5vjd9/image/upload", formData)
      .then((res: any) => {
        setImageSelected("");
        // get the image url back
        const imageUrl = res.data.secure_url;

        // PATCH the new listing to the server
        axios({
          url: "https://fierce-spring-store-backend.herokuapp.com/api/user/listing/add",
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            "x-auth-token": jwt,
          },
          data: {
            product: {
              imageUrl,
              name,
              price,
              description,
              numberInStock: number,
              genre,
            },
            email,
          },
        })
          .then((res) => {
            console.log(res);
            // updating the UI

            setModalOpen(false);
            // State updating based on current state
            setListings((state: any) => {
              return [...state, res.data];
            });
            // navigate("/profile", { replace: true });
          })
          .catch((error: Error) => console.log("error from my server", error));
      })
      .catch((err: Error) => console.log("error from cloudinary", err));
  };

  return (
    <div className="newListingModal-background">
      <div className="newListingModal-container">
        <h2 className="newListing-title">New Listing Information</h2>
        <form className="newListing-form" onSubmit={submitHandler}>
          <table>
            {/* Use Cloudinary SaaS cloud service to store uploaded image to cloud and get back the url */}
            <tbody>
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
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    ref={nameRef}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="price">Price</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="price"
                    placeholder="Price"
                    ref={priceRef}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="description">Description</label>
                </td>
                <td>
                  <textarea
                    id="description"
                    placeholder="Description"
                    ref={descriptionRef}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="number">Number In Stock</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="number"
                    placeholder="Number"
                    ref={numberRef}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="genre">Genre</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="genre"
                    placeholder="Genre"
                    ref={genreRef}
                  />
                </td>
              </tr>
            </tbody>
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
