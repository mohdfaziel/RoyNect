import Minds from "./Components/Minds";
import RoyNect from "./Components/RoyNect";
import Welcome from "./Components/Welcome";
import databaseService from "../../Firebase/Services/database";
import { reStock } from "../../Store/Honey/HoneySlice";
import { useDispatch } from "react-redux";
import Legacy from "./Legacy";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
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
      <Welcome />
      <RoyNect />
      <Minds />
      <Legacy />
    </>
  );
}
