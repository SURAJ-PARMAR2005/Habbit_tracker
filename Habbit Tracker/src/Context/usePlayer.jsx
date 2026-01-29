import { useContext } from "react";
import { PlayerContext } from "./PlayerContext";

import React from 'react'

export const usePlayer = () => {
    const context   = useContext(PlayerContext);
  return context;
}

