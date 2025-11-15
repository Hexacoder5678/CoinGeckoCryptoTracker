import { useState } from "react";
import currencyStore from "../../state/store";
import CoinInfo from "./CoinInfo";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistoricData } from "../../Services/fetchCoinHistoricData";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";

function CoinInfoContainer({ coinId }) {
  const [historicData,isError,isLoading,currency,days,setDays,setCoinInterval]=useFetchCoinHistory(coinId);
  if (isLoading) return <PageLoader />;
  if (isError) return <Alert message="Error fetching data" type="error" />;

  return (
    <CoinInfo
      historicData={historicData}
      setDays={setDays}
      setCoinInterval={setCoinInterval}
      days={days}
      currency={currency}
    />
  );
}

export default CoinInfoContainer;
