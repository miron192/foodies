"use client";

import { useRef, useState } from "react";
import styles from "./imagePicker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [image, setImage] = useState();
  const fileInputRef = useRef(null);
  function handleClick() {
    fileInputRef.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {image ? (
            <Image src={image} fill alt="Preview" />
          ) : (
            <p>No image selected</p>
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={fileInputRef}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} onClick={handleClick} type="button">
          Choose Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
