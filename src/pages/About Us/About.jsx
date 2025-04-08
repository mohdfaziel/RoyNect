import Minds from "./Components/Minds";
import RoyNect from "./Components/RoyNect";
import Welcome from "./Components/Welcome";
import databaseService from "../../Firebase/Services/database";
import { reStock } from "../../Store/Honey/HoneySlice";
import { useDispatch } from "react-redux";
import Legacy from "./Legacy";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import SEO from "../../components/SEO/SEO";

export default function About() {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function updateStock() {
      setLoader(true);
      try {
        const stock = await databaseService.getProductStock();
        console.log("Stock fetched:", stock);
        dispatch(reStock(stock));
      } catch (error) {
        console.error("Error fetching stock:", error);
      } finally {
        setLoader(false);
      }
    }
    updateStock();
  }, [dispatch]);

  if (loader) return <Loader />;

  return (
    <>
      <SEO 
        title="Home"
        description="Welcome to RoyNect - Your trusted source for premium Kashmiri honey and Apis Cerana honey from Bhadarwah. Discover our range of pure, natural honey products. Experience the authentic taste of organic honey from the pristine valleys of Kashmir."
        keywords="Roynect, pure honey, natural honey, Kashmiri honey, Apis cerana honey, organic honey online, Bhadarwah honey, premium honey, raw honey, unfiltered honey"
        ogImage="/mainImg2.png"
      />
      <Welcome />
      <RoyNect />
      <Minds />
      <Legacy />
    </>
  );
}
