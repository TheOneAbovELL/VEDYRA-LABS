import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/site/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VEDYRA Labs — Vehicle Health Score Bureau" },
      { name: "description", content: "A neutral, IRDAI-compliant bureau turning OEM telematics into a fair, dynamic Vehicle Health Score (300–850) for India's motor insurance market." },
      { property: "og:title", content: "VEDYRA Labs — VHS Bureau" },
      { property: "og:description", content: "CIBIL-equivalent intelligence for India's connected mobility ecosystem." },
    ],
  }),
  component: Landing,
});
