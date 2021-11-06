import React from "react";
import Stadistic from "@components/Stadistic";
import { useStadistics } from "@graphql/stadistics/custom-hook";
import { FiArchive, FiClock, FiTool } from "react-icons/fi";

const Stadistics = () => {
  const { loading, data, error } = useStadistics();

  if (loading) return "loading...";

  return (
    <>
      <Stadistic icon={FiArchive} number={data.getLendsCount} title="Prestamos" />
      <Stadistic icon={FiClock} number={data.getMaterialsCount} title="Reservas" />
      <Stadistic icon={FiTool} number={data.getReservationsCount} title="Materiales" />
    </>
  );
};

export default Stadistics;
