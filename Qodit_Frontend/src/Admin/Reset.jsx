import React from "react";

export default function Reset() {
  return (
    <div id="reset">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="text-center">Change Password</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <form method="post" id="passwordForm">
              <input
                type="password"
                class="input-lg form-control"
                name="password1"
                id="password1"
                placeholder="New Password"
                autocomplete="off"
              /> <br/>
              <input
                type="password"
                class="input-lg form-control"
                name="password2"
                id="password2"
                placeholder="Repeat Password"
                autocomplete="off"
              /> <br/>
              {/* <div class="row">
                <div class="col-sm-12">
                  <span
                    id="pwmatch"
                    class="glyphicon glyphicon-remove"
                  ></span>{" "}
                  Passwords Match
                </div>
              </div> */}
              <input
                type="submit"
                class="col-xs-12 btn btn-primary btn-load btn-lg"
                data-loading-text="Changing Password..."
                value="Change Password"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
