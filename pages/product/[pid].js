import CustomerLayout from "../../components/CustomerLayout";
import BreadCrumb from "../../components/bread-crumb";
import ProductInfo from "../../components/product-info";
import ProductsSection from "../../components/products-section";
import AdsSlider from "../../components/ads-slider";
import Slide1 from "../../public/images/slider-image-1.jpg";

export default function Product() {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Product",
    },
    {
      text: "Iphone 13pro max",
    },
  ];

  const product = {
    images: Array(4).fill(Slide1),
    productName: `Yellow Headphones`,
    description: `iPhone 13 Pro and iPhone 13 Pro Max introduce the most advanced display ever on iPhone, Super Retina XDR with ProMotion, supporting an adaptive refresh rate from 10Hz to 120Hz.`,
    price: 10000,
    time: "2022-06-28T22:38:00.000Z",
    bidders: Array(5).fill({
      image: Slide1,
      name: `Akinpelumi Akinlade`,
      bid: 20000,
    }),
  };

  const products = Array(8).fill({
    image: Slide1,
    productName: `Yellow Headphones`,
    price: 10000,
    time: "2022-06-28T22:38:00.000Z",
  });

  const ads = Array(5).fill({
    image: Slide1,
    title: `Exciting auctions you should win this week`,
    text: `They've always got a lot of super exciting items on auctions and you can win so much more on Zozo by shearing your wins on instagram or facebook also one thing you can count on is that the enjoyment in zozo is nonstop`,
    cta: `start selling`,
  });

  return (
    <CustomerLayout>
      <section className="mb-6">
        <BreadCrumb data={breadCrumb} />
        <ProductInfo data={product} />
      </section>
      <section className="mb-6">
        <ProductsSection products={products} title="similar products" />
      </section>
      <section>
        <AdsSlider data={ads} />
      </section>
    </CustomerLayout>
  );
}
