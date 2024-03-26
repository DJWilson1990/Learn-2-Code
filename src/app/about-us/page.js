import { style } from "./style.css";
import Image from "next/image";

export default function aboutus() {
  return (
    <>
      <div className="header">
        <img
          src="./aboutus.png"
          width={"500"}
          height={"300"}
          alt="learn2code logo with keyboard"
        ></img>
      </div>
      <div className="flex-container">
        <div class="flex-item-one">
          <div class="icon-container">
            <img
              className="icon"
              src="./giraffe.png"
              width={"100"}
              height={"100"}
              alt="giraffeicon"
            ></img>
          </div>
          Abel
        </div>
        <div class="flex-item-two">
          <div class="icon-container">
            <img
              className="icon"
              src="./sloth.png"
              width={"100"}
              height={"100"}
              alt="slothicon"
            ></img>
          </div>
          Dan
        </div>
        <div class="flex-item-three">
          <div class="icon-container">
            <img
              className="icon"
              src="./foxicon.png"
              width={"100"}
              height={"100"}
              alt="foxicon"
            ></img>
          </div>
          Dante
        </div>
        <div class="flex-item-four">
          <div class="icon-container">
            <img
              className="icon"
              src="./pandaicon.png"
              width={"100"}
              height={"100"}
              alt="pandaicon"
            ></img>
          </div>
          kelly
        </div>
      </div>
    </>
  );
}
