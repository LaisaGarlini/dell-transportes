import React from "react";
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faTruckFast, faMoneyCheckDollar, faUser, faGear } from "@fortawesome/free-solid-svg-icons";

const MenuItems = () => {
  const menuItems = [
    { icon: faChartLine, label: "Dashboard" },
    { icon: faTruckFast, label: "CT-e's" },
    { icon: faMoneyCheckDollar, label: "Financeiro" },
    { icon: faGear, label: "Configurações" },
    { icon: faUser, label: "Perfil" },
  ];

  return (
    <div className="w-3/4 text-right flex flex-row items-center justify-end">
      {menuItems.map((item, index) => (
        <Tooltip key={index} title={item.label} placement="bottom">
          <FontAwesomeIcon className="w-6 h-6 mb-2 my-0 text-branco mx-2" icon={item.icon} />
        </Tooltip>
      ))}
    </div>
  );
};

export default MenuItems;