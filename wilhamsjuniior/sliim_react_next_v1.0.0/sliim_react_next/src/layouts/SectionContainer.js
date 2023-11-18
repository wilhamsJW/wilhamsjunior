import { useContext } from "react";
import { Context } from "../context/context";

{/**
  Aqui se encontra a lógica usada para alterar de página a cada click do menu
  onde que se nav === sectionName eu mostro o display se não é none ou não mostra
*/}

const SectionContainer = ({ children, sectionName }) => {
  const { nav } = useContext(Context);
  console.log('mav:', nav);
  console.log('sectionName:', sectionName);
  return (
    <div
      className={`section ${sectionName}-section`}
      id={sectionName}
      style={{ display: nav === sectionName ? "block" : "none" }}
    >
      {children}
    </div>
  );
};
export default SectionContainer;
