import React from "react";

export default function Otp() {
 

  return (
    <div id="otp">
        <div id="dialog">
          <h3>Please enter the 4-digit verification code we sent via SMS:</h3>
          <div id="form">
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <button class="btn btn-primary btn-embossed">Verify</button>
          </div>
        </div>
    </div>
  );
}
