import React, { useState } from 'react';
import { themes } from "themes";

export const useTheme = () => {
  const [context, setContext] = useState(themes.light);
  return [context, setContext];
}
