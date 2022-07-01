import Link from "next/link";

import styles from "../../styles/cart.module.scss";
import Image from "next/image";

import headphones from "../../assets/headphones.svg";


const Activity = () => {
    return(
      <div className="activity_form">
  
              
  
              <div className="flex justify-between p-20">
                <div>
                  <p>Items in my cart</p>
                </div>
                <div>Bid alerts</div>
              </div>
  
              <div>
                <table className="w-full">
                  <tr>
                    <td>Items</td>
                    <td>Bid price</td>
                    <td>Final price</td>
                    <td>Timer</td>
                    <td>Remove</td>
                  </tr>
  
                  <tr>
                    <td>
                      <Image src={headphones} />
                    </td>
                    <td>
                      # <span>5,000</span>
                    </td>
                    <td>
                      # <span>7,000</span>
                    </td>
                    <td>00:00:00:00</td>
                    <td>x</td>
                  </tr>
                  <tr>
                    <td>
                      <Image src={headphones} />
                    </td>
                    <td>
                      # <span>5,000</span>
                    </td>
                    <td>
                      # <span>7,000</span>
                    </td>
                    <td>00:00:00:00</td>
                    <td>x</td>
                  </tr>
                  <tr>
                    <td>
                      <Image src={headphones} />
                    </td>
                    <td>
                      # <span>5,000</span>
                    </td>
                    <td>
                      # <span>7,000</span>
                    </td>
                    <td>00:00:00:00</td>
                    <td>x</td>
                  </tr>
                  <tr>
                    <td>
                      <Image src={headphones} />
                    </td>
                    <td>
                      # <span>5,000</span>
                    </td>
                    <td>
                      # <span>7,000</span>
                    </td>
                    <td>00:00:00:00</td>
                    <td>x</td>
                  </tr>
                </table>
              </div>
  
        
  
            </div>
    )
  }

 
  
  export default Activity
 
 