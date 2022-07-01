import React, { useEffect, useState } from "react";
import CustomerLayout from "../components/CustomerLayout";
import Link from "next/link";
import Button from "../components/ui/Button";
import styles from "./../styles/cart.module.scss";
import Image from "next/image";
import box1 from "./../assets/emptybox.png";
import box2 from "./../assets/cartoon.png";
import arrow from "./../assets/arrow.svg";
import Activity from "../components/cart/Activity";
import OngoingBid from "../components/cart/OngoingBid";
import BidHistory from "../components/cart/BidHistory";


const Cart = () => {
  const [currentItem, setCurrentItem] = useState(1)
  const [user,setUser] = useState("")
  // console.log("user");
  
  
  useEffect(() => {
    setUser(localStorage.getItem("token"));
  },[])

    return (
      <CustomerLayout>
        <h1>Your Cart</h1>
        {user ? (
          <div className="wrapper flex gap-20 mt-16">
            <div className="bg-white px-10 pt-10 w-full">
              <div className={`${styles.nav} flex gap-60 `}>
                <div onClick={() => setCurrentItem(1)}> <a href="#">Activity</a> </div>
                <div onClick={() => setCurrentItem(2)}> <a href="#"> My ongoing bid</a> </div>
                <div onClick={() => setCurrentItem(3)}> <a href="#">bid history</a> </div>
              </div>
              <hr className="mb-10"/>

              
                {(currentItem === 1)?
                <Activity/>
                :
                (currentItem === 2)
                ?<OngoingBid/>:
                <BidHistory/>}

              
              
            
              
            </div>

            {(currentItem ===1) &&
             
             <div className="bg-white w-1/4 p-10  ">
             <h3>Bid Summary</h3>
 
             <div className="flex justify-between mb-5 mt-16">
               <div>SUBTOTAL</div>
               <div>N5,000</div>
             </div>
 
             <div className="flex justify-between">
               <div>SHIPPING EST</div>
               <div>N2,000</div>
             </div>
             <div className="flex justify-between mt-40">
               <div>Enter code</div>
               <div>
                 <Image src={arrow} />
               </div>
             </div>
             <hr />
             <div className="flex justify-between mt-10">
              <div>TOTAL PRICE</div>
              <div>N <span>7000</span></div>
             </div>
             <div className="mt-6">
                     <Link href="/checkout">
                       <a>
                         <Button
                           name="PROCEED TO CHECKOUT"
                           paddingY="7px"
                           paddingX="30px"
                           fontSize="14px"
                           width="270px"
                         />
                       </a>
                     </Link>
                   </div>
           </div>
           
            }
          

            
          </div>
        ) : (
          <div className="cart-wrapper flex justify-between gap-10 mt-20">
            <div className={` ${styles.cart} bg-white w-2/3`}>
              <div className="flex gap-16 mt-20">
                <div>
                  <Image src={box2} alt="cart" width={200} height={200} />
                </div>
                <div>
                  <h1 className="text-black">Your Zozo cart is empty</h1>
                  <p className={`${styles.purple_text} mt-3`}>
                    Bid on today's deals
                </p>
                <div className="flex gap-10 mt-12">
                  <div className="">
                    <Link href="/login">
                      <a>
                        <Button
                          name="SIGN IN TO YOUR ACCOUNT"
                          paddingY="7px"
                          paddingX="30px"
                          fontSize="14px"
                          width="270px"
                        />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/signup">
                      <a>
                        <Button
                          name="SIGN UP NOW"
                          paddingY="7px"
                          paddingX="30px"
                          fontSize="14px"
                          bgColor="white"
                          color="black"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.white_strip}`}></div>
          <div className="bg-white w-1/3 p-10">
            <h1 className="text-black">Bid Summary</h1>
            <div className="p-20">
              <Image src={box1} width={200} height={200} />
            </div>
            <p className={`${styles.bid_text}`}>
              Don't miss out on great deals! Start shopping or log in to view
              products added.
            </p>
          </div>
        </div>
      )}
    </CustomerLayout>
  );
};







export default Cart;
