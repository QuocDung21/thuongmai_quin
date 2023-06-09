import React, { useEffect } from "react";
import { backend_url } from "../../server";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("data", data);
  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };
  return (
    // <div
    //   className={`w-full flex items-center justify-around container mx-auto  bg-white rounded-lg   ${
    //     active ? "unset" : "mb-12"
    //   } lg:flex p-2`}
    // >
    //   <div className="w-full  lg:-w[50%] m-auto">
    //     {/* <div className="w-full lg:-w[50%] m-auto"> */}
    //     <img
    //       className="w-[280px] h-[220px] rounded"
    //       src={`${backend_url}${data?.images[0]}`}
    //       alt=""
    //     />
    //   </div>

    //   {data != undefined ? (
    //     <>
    //       <div className="w-full lg:[w-50%] flex flex-col justify-center">
    //         <h2 className={`${styles.productTitle}`}>{data?.name}</h2>
    //         <p>{data?.description}</p>
    //         <div className="flex py-2 justify-between">
    //           <div className="flex">
    //             <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
    //               {data?.originalPrice}$
    //             </h5>
    //             <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
    //               {data?.discountPrice}$
    //             </h5>
    //           </div>
    //           <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
    //             {data?.sold_out} sold
    //           </span>
    //         </div>
    //         <CountDown data={data} />
    //         <br />
    //         <div className="flex items-center">
    //           <Link to={`/product/${data?._id}?isEvent=true`}>
    //             <div className={`${styles.button} text-[#fff]`}>
    //               See Details
    //             </div>
    //           </Link>
    //           <div
    //             className={`${styles.button} text-[#fff] ml-5`}
    //             onClick={() => addToCartHandler(data)}
    //           >
    //             Add to cart
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : (
    //     <>
    //       <div className="w-full lg:[w-50%] flex flex-col justify-center">
    //         <div className="flex py-2 ">
    //           <div className="flex">
    //             <h1 className="text-2xl">No products Found!</h1>
    //           </div>
    //         </div>
    //         <br />
    //       </div>
    //     </>
    //   )}
    // </div>

    <div
      className={`w-full flex items-center justify-around   mx-auto  bg-white rounded-lg   ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <Card className="flex-row w-full max-w-[48rem]">
        <CardHeader
        shadow={false}
          floated={true}
          className="w-2/5 shrink-0 m-0 rounded-r-none"
        >
          <img
            src={`${backend_url}${data?.images[0]}`}
            alt="image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <CountDown data={data} />
          <Typography variant="h4" color="blue" className="uppercase mb-4">
            {data?.name}
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            {data?.originalPrice}$
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            {data?.discountPrice}$
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            {data?.sold_out} sold
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            {data?.description}
          </Typography>
          <Link
            to={`/product/${data?._id}?isEvent=true`}
            className="inline-block"
          >
            <Button variant="text" className="flex items-center gap-2">
              See Details
            </Button>
          </Link>
          <div className="inline-block">
            <Button
              onClick={() => addToCartHandler(data)}
              variant="text"
              className="flex items-center gap-2"
            >
              Add to cart
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventCard;
