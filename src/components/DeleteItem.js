import React from "react";
import classes from "./DeleteItem.module.css";

const DeleteItem = ({ button = "Delete", content = "? Are you sure to delete this record", onBack, onConfrim, title = "Delete the record"}) => {
  return (
    <div
      style={{ backgroundColor: "rgb(0 0 0 / 40%)" }}
      className="fixed w-[100%] h-[100vh] top-0 right-0 z-[10000] flex justify-center items-center"
    >
      <div className={classes.container}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{content}</p>
        </div>
        <div className="w-[35%] flex justify-between items-center mt-5 mx-auto">
          <button
            onClick={onBack}
            className="border border-[var(--dark-color)] px-[30px] py-[8px] outline-none cursor-pointer font-bold rounded-lg text-[var(--dark-color)] "
          >
            Back
          </button>
          <button
            type="submit"
            onClick={onConfrim}
            className="py-[9px] text-[var(--ligth-color)] px-[25px] font-bold bg-[var(--dark-color)] cursor-pointer shadow-lg rounded-lg"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
