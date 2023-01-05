import React from "react";
import { faArrowsDownToLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Address = () => {
  return (
    <div className="container-fluid">
      <div class="row my-5 mx-5 gap-5">
        <div class="col border border-1 py-3 px-3  rounded">
          <h3 className=" fs-5">Biling Address</h3>
          <form>
            <div class="mb-3">
              <label for="attention" class="form-label fs-6">
                Attention
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Personal/Site name"
                id="attention"
              />
            </div>
            <div class="mb-3">
              <label for="country" class="form-label fs-6">
                Country
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Please Search</option>
                <option value="1">Bangladesh</option>
                <option value="2">India</option>
                <option value="3">Finland</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label fs-6">
                Division/Provience/State
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label fs-6">
                District
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label fs-6">
                City/Sub Dictrict/Thana
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label fs-6">
                Unimion/Area
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label fs-6">
                Zipcode
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label fs-6">
                State Address/Village
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="house" class="form-label fs-6">
                House/Apartment no
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter House Number"
                id="house"
              />
            </div>
            <div class="mb-3">
              <label for="attention" class="form-label fs-6">
                phone
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Phone"
                id="phone"
              />
            </div>
            <div class="mb-3">
              <label for="fax" class="form-label fs-6">
                Fax
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Fax"
                id="fax"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
        <div class="col border border-1 py-3 px-3 rounded">
          <div className="d-flex gap-2">
            <h3 className="fs-5">Shiping Address</h3>
            <div>
              <FontAwesomeIcon
                className="text-primary"
                icon={faArrowsDownToLine}
              ></FontAwesomeIcon>
              <a href="#"> Copy Billing Address</a>
            </div>
          </div>
          <form>
            <div class="mb-3">
              <label for="attention" class="form-label">
                Attention
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Personal/Site name"
                id="attention"
              />
            </div>
            <div class="mb-3">
              <label for="country" class="form-label">
                Country
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Please Search</option>
                <option value="1">Bangladesh</option>
                <option value="2">India</option>
                <option value="3">Finland</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label">
                Division/Provience/State
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label">
                District
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label">
                City/Sub Dictrict/Thana
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label">
                Unimion/Area
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label">
                Zipcode
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="country" class="form-label">
                State Address/Village
              </label>
              <select
                class="form-select"
                disabled
                aria-label="Default select example"
              >
                <option selected>Please Search</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="house" class="form-label">
                House/Apartment no
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter House Number"
                id="house"
              />
            </div>
            <div class="mb-3">
              <label for="attention" class="form-label">
                phone
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Phone"
                id="phone"
              />
            </div>
            <div class="mb-3">
              <label for="fax" class="form-label">
                Fax
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Fax"
                id="fax"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
