import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useCounterStore } from "../stores/counterStore";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Button onClick={increment} variant="contained" sx={{ m: 1 }}>
        Increment
      </Button>
      <Button onClick={decrement} variant="contained" sx={{ m: 1 }}>
        Decrement
      </Button>
      <Button onClick={reset} variant="contained" color="error" sx={{ m: 1 }}>
        Reset
      </Button>
    </Box>
  );
};

export default Counter;
