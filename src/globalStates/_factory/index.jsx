import { useState } from "react";

const Index = () => {
  const [state, setState] = useState(null);

  return { state, setState };
};

export default Index;
