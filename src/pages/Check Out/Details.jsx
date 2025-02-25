import React, { useEffect } from "react";
import { set, useForm } from "react-hook-form";
import Person from "../../assets/Animations/icons/Person";
import Address from "../../assets/Animations/icons/Address";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../Store/OrderDetails/OrderSlice";
function Details({ handleNext }) {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.order.orderDetails);
  const user = useSelector((state) => state.user.userData);
  const [check, setCheck] = React.useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });
  function submit(data) {
    dispatch(setOrder(data));
    handleNext();
  }
  useEffect(() => {
    if (user) {
      setValue("name", user.name);
    }
    if (orderDetails) {
      setValue("phone", orderDetails.phone);
      setValue("houseNo", orderDetails.houseNo);
      setValue("area", orderDetails.area);
      setValue("pincode", orderDetails.pincode);
      setValue("state", orderDetails.state);
      setValue("district", orderDetails.district);
    }
  }, [user, setValue, orderDetails]);
  async function getstateDistrict() {
    setCheck(true);
    const pincode = getValues("pincode");
    const pincodeElement = document.getElementById("pincode");
    if (pincode.length !== 6) {
      pincodeElement.style.border = "2px solid #ef4444";
      setCheck(false);
      return;
    } else {
      pincodeElement.style.border = "2px solid #d1d5db";
    }
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await response.json();
      setValue("state", data[0].PostOffice[0].State);
      setValue("district", data[0].PostOffice[0].District);
    } catch (err) {
      setError("pincode", {
        type: "manual",
        message: "Invalid Pincode",
      });
    } finally {
      setCheck(false);
    }
  }
  return (
    <form
      className="container w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-40 bg-white p-2 md:p-10 rounded-2xl md:rounded-3xl shadow-xl"
      onSubmit={handleSubmit(submit)}
    >
      <div className="contact-details flex flex-col gap-3 md:gap-4">
        <div className="flex justify-start items-center">
          <Person />
          <h1 className="text-lg md:text-xl font-bold">Contact Details</h1>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="name">
            <input
              {...register("name", {
                required: { value: true, message: "This field is required" },
              })}
              className={` font-medium border-[2px] w-full shadow-s hover:border-main text-sm md:text-base md:px-3 px-2 py-2 md:py-3 rounded-xl md:rounded-2xl w-full${
                errors.name ? "border-red-500 bg-red-200 text-white" : ""
              }`}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
            />
            {errors.name && (
              <p className="text-xs md:text-sm px-2 mt-1 font-base font-semibold text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="phone">
            <input
              inputMode="numeric"
              {...register("phone", {
                required: { value: true, message: "This field is required" },
                minLength: { value: 10, message: "Min length is 10" },
                maxLength: { value: 10, message: "Max length is 10" },
              })}
              className={` font-medium border-[2px] shadow-s hover:border-main text-sm md:text-base md:px-3 px-2 py-2 md:py-3 rounded-xl md:rounded-2xl w-full ${
                errors.phone ? "border-red-500 bg-red-200" : ""
              } appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-xs md:text-sm px-2 mt-1 font-base font-semibold text-red-500">
                {errors.phone.message}
              </p>
            )}
            <p className="text-xs md:text-sm px-2 mt-1 font-base font-semibold text-gray-400">
              We'll call this number to coordinate delivery
            </p>
          </div>
        </div>
      </div>
      <div className="address-details flex flex-col gap-3 md:gap-4">
        <div className="flex justify-start items-center">
          <Address />
          <h1 className="text-lg md:text-xl font-bold">Address</h1>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="houseNo">
            <input
              {...register("houseNo", {
                required: { value: true, message: "This field is required" },
              })}
              className={` font-medium border-[2px] shadow-s hover:border-main text-sm md:text-base md:px-3 px-2 py-2 md:py-3 rounded-xl md:rounded-2xl w-full ${
                errors.houseNo ? "border-red-500 bg-red-200" : ""
              }`}
              type="text"
              name="houseNo"
              id="houseNo"
              placeholder="Flat, Housing no, Building, Apartment."
            />
            {errors.houseNo && (
              <p className="text-xs md:text-sm px-2 mt-1 font-base font-semibold text-red-500">
                {errors.houseNo.message}
              </p>
            )}
          </div>
          <div className="area">
            <input
              {...register("area", {
                required: { value: true, message: "This field is required" },
              })}
              className={` font-medium border-[2px] shadow-s hover:border-main text-sm md:text-base md:px-3 px-2 py-2 md:py-3 rounded-xl md:rounded-2xl w-full ${
                errors.area ? "border-red-500 bg-red-200" : ""
              }`}
              type="text"
              name="area"
              id="area"
              placeholder="Area, Colony, Street, Sector, Village."
            />
            {errors.area && (
              <p className="text-xs md:text-sm px-2 mt-1 font-base font-semibold text-red-500">
                {errors.area.message}
              </p>
            )}
          </div>
          <div className="pincode">
            <div className="flex w-full justify-center items-center gap-2 md:gap-4">
              <input
                {...register("pincode", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 6, message: "Min length is 6" },
                  maxLength: { value: 6, message: "Max length is 6" },
                })}
                className={` font-medium border-[2px] shadow-s hover:border-main text-sm md:text-base md:px-3 px-2 py-2 md:py-3 rounded-xl md:rounded-2xl w-full ${
                  errors.pincode ? "border-red-500 bg-red-200" : ""
                }  appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                type="number"
                name="pincode"
                id="pincode"
                placeholder="Pincode"
              />
              <button
                type="button"
                onClick={getstateDistrict}
                className={`bg-main ${
                  check ? "opacity-40" : ""
                } transition-all text-white w-1/2 py-1 md:py-2 rounded-2xl text-lg font-semibold shadow-sm`}
              >
                Check
              </button>
            </div>
            {errors.pincode && (
              <p className="text-xs md:text-sm px-2 mt-1 font-base font-semibold text-red-500">
                {errors.pincode.message}
              </p>
            )}
          </div>
          <div className="state-district flex w-full justify-center items-center gap-4">
            <input
              {...register("district", {
                required: true,
              })}
              className={` font-medium border-[2px] shadow-s hover:border-main text-sm md:text-base md:px-3 px-2 py-2 md:py-3 rounded-xl md:rounded-2xl w-full ${
                errors.pincode ? "border-red-500 bg-red-200" : ""
              }`}
              readOnly
              type="text"
              name="district"
              id="district"
              placeholder="District"
            />
            <input
              {...register("state", {
                required: true,
              })}
              className={` font-medium border-[2px] shadow-s hover:border-main text-sm md:text-base md:px-3 px-2 py-2 md:py-3 rounded-xl md:rounded-2xl w-full ${
                errors.pincode ? "border-red-500 bg-red-200" : ""
              }`}
              readOnly
              type="text"
              name="state"
              id="state"
              placeholder="state"
            />
          </div>
        </div>
      </div>
      <button className="hidden" type="submit"></button>
    </form>
  );
}

export default Details;
