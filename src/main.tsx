import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import theme from "./theme";
import "./index.css";
import Test from "./components/Test";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {RouterProvider} from "react-router-dom";
import routers from "./routers";

const queryClient = new QueryClient();
// {
//   defaultOptions:{
//     queries:{
//       retry:3,
//       cacheTime:300_000,
//       staleTime:10*1000,
//       refetchOnReconnect:true,
//       refetchOnWindowFocus:true,
//       refetchOnMount:true
//     }
//   }
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={routers}/>
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
