'use client'
import React from "react";
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faTruckFast, faMoneyCheckDollar, faUser, faGear } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const MenuItems = () => {
  const router = useRouter();
  const menuItems = [
    { icon: faChartLine, label: "Dashboard", path: "/" },
    { icon: faTruckFast, label: "CT-e's", path: "/cte_consulta" },
    { icon: faMoneyCheckDollar, label: "Financeiro", path: "/financeiro" },
    { icon: faGear, label: "Configurações", path: "/configuracoes" },
    { icon: faUser, label: "Perfil", path: "/perfil" },
  ];

  return (
    <div className="w-3/4 text-right flex flex-row items-center justify-end">
      {menuItems.map((item, index) => (
        <Tooltip key={index} title={item.label} placement="bottom">
          {/* <Link href={item.path}> */}
            <FontAwesomeIcon onClick={() => router.push(item.path)}
              className="w-6 h-6 mb-2 my-0 text-branco mx-2 cursor-pointer"
              icon={item.icon}
            />
          {/* </Link> */}
        </Tooltip>
      ))}
    </div>
  );
};

export default MenuItems;