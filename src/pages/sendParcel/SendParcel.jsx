import { control } from "leaflet";
import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const axiosSecure = useAxios();
  const {user}= useAuth()

  const serviceCenter = useLoaderData();
  // console.log(serviceCenter)
  const regionDuplicate = serviceCenter.map((service) => service.region);
  const regions = [...new Set(regionDuplicate)];
  const senderRegion = useWatch({control, name:'senderRegion'});
  const receiverRegion = useWatch({control, name:'receiverRegion'});
  
  const districtByRegion = (region)=>{
    const districtRegion = serviceCenter.filter (c => c.region=== region);
    const districts = districtRegion.map(d => d.district);
    return districts;
  }


  const handleSendPercl = (data) => {
const isSameDistrict = data.senderDistrict === data.receiverDistrict;
const isDocument = data.parcelType === "document";
const  parcelWeight = parseFloat(data.parcelWeight);

let cost = 0;

  if(isDocument){
cost  = isSameDistrict? 60: 80 ;
  }else{
    if(parcelWeight <= 3){
      cost = isSameDistrict ? 110 :150;
    }else{
      const minCharge = isSameDistrict ? 110 : 150;
      const extraWeight = parcelWeight - 3;
      const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40 ;

      cost = minCharge+ extraCharge; 
    }
  }
  data.cost = cost;
Swal.fire({
  title: "Agree with the cost ",
  text: `You have to pay ${cost} taka`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "I agree"
}).then((result) => {
  if (result.isConfirmed) {

axiosSecure.post('/percels',data)
.then(res=>{
  console.log('after',res.data)});


    // Swal.fire({
    //   title: "success!",
    //   text: "Your parcel has been successfully.",
    //   icon: "success"
    // });
  }
});
  };
  return (
    <div className="bg-gray-100 max-w-7xl md:max-w-4xl mx-auto p-4 text-black  ">
      <h2 className="text-5xl font-bold mt-10">Send A Parcel</h2>
      <form
        onSubmit={handleSubmit(handleSendPercl)}
        className=" text-black  p-4"
      >
        <h3 className="text-2xl py-3">parcel details</h3>

        <div className="flex gap-10 ">
          <label className="lavel ">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio radio-sm"
              defaultChecked
            />
            Document
          </label>
          <label className="lavel">
            <input
              type="radio"
              {...register("parcelType")}
              value="Nondocument"
              className="radio radio-sm"
            />
            Non Document
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-10 ">
          <fieldset className="fieldset">
            <label className="label text-black font-semibold ">
              parcel Name
            </label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full "
              placeholder="parcel name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-black font-semibold ">
              parcel Weight
            </label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="parcel weight"
            />
          </fieldset>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold py-5">Sender Details</h3>
            <fieldset className="fieldset">
              <label className="label text-black font-semibold ">
                Sender Name
              </label>
              <input
                type="text"
                {...register("senderName")}
                defaultValue={user?.displayName}
                className="input w-full"
                placeholder="Sender Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label text-black font-semibold ">
                Sender Email
              </label>
              <input
                type="email"
                {...register("senderEmail")}
                defaultValue={user?.email}
                className="input w-full"
                placeholder="Sender Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender region</legend>
              <select {...register('senderRegion')} defaultValue="Pick a region" className="select w-full">
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender district</legend>
              <select {...register('senderDistrict')} defaultValue="Pick a district" className="select w-full">
                <option disabled={true}>Pick a district</option>
                {districtByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>


            <fieldset className="fieldset">
              <label className="label text-black font-semibold ">
                Sender Address
              </label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Address"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label text-black font-semibold ">
                Sender Phone number
              </label>
              <input
                type="number"
                {...register("senderPhone")}
                className="input w-full"
                placeholder="Sender Phone number"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label text-black font-semibold ">
                Pickup instruction
              </label>
              <textarea
                type="text"
                {...register("senderPickup")}
                className="input w-full h-20"
                placeholder="Pickup instruction"
              />
            </fieldset>
          </div>

          <div>
            <h3 className="text-xl font-semibold py-5">Receiver Details</h3>
            <fieldset className="fieldset">
              <label className="label text-black font-semibold ">
                Receiver Name
              </label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="Sender Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label text-black font-semibold ">
                Receiver Email
              </label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver region</legend>
              <select {...register('receiverRegion')} defaultValue="Pick a region" className="select w-full">
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver district</legend>
              <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select w-full">
                <option disabled={true}>Pick a district</option>
                {districtByRegion(receiverRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <label className="label text-black font-semibold ">
                Receiver Address
              </label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Receiver address"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label text-black font-semibold ">
                Receiver Phone number
              </label>
              <input
                type="number"
                {...register("receiverPhone")}
                className="input w-full"
                placeholder="Receiver Phone number"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label text-black font-semibold ">
                delivery instriction{" "}
              </label>
              <textarea
                type="text"
                {...register("receiverDelivery")}
                className="input w-full h-20"
                placeholder="delivery instriction "
              />
            </fieldset>
          </div>
        </div>
        <button className="btn btn-primary mt-4">Login</button>
      </form>
    </div>
  );
};

export default SendParcel;
