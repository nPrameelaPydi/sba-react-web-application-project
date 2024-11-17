import { useEffect } from "react";
import { fetchTriviaData } from "./utils/api";

export default function TestApi() {
  useEffect(() => {
    const testApiCall = async () => {
      const data = await fetchTriviaData("character");
      console.log(data);
    };
    testApiCall();
  }, []);

  return (
    <div>
      <h1>Testing API fetch</h1>
      <p>check the console for fetched data</p>
    </div>
  );
}
