import { useState } from "react"
import { GluestackUIProvider, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"
import Title from "./components/Title";
import Goal from "./components/Goal";
import WaterImage from "./components/WaterImage";
import Controls from "./components/Controls";


export default function App() {
  const [volume, setVolume] = useState(0)


  return (
    <GluestackUIProvider config={config}>
      <Box
        w="100%"
        h="$full"
        justifyContent="center"
        alignItems="center"
        bgColor="$blue200">
        <Title />
        <Goal volume={volume} />
        <WaterImage />
        <Controls setVolume={setVolume} volume={volume} />
      </Box>

    </GluestackUIProvider>

  )
}

