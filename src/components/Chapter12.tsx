import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/shadcn/ui/card";
import { Input } from "@/shadcn/ui/input";
import { Button } from "@/shadcn/ui/button";
import { Badge } from "@/shadcn/ui/badge";
import { useState } from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { piconetProbability1, piconetProbability2, numberOfPiconets } from "../utils/helper";
import { toast } from "react-toastify";

function Chapter12() {
  const [N, setN] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [NN, setNN] = useState("");
  const [result2, setResult2] = useState<number | null>(null);
  const [P, setP] = useState("");
  const [result3, setResult3] = useState<number | null>(null);

  const handleCalc = () => {
    let n = parseInt(N);
    if (!Number.isFinite(n) || n < 0) {
      toast.error("Please enter a valid number");
      return;
    }
    setResult(piconetProbability1(n));
  };
  const handleCalc2 = () => {
    let nn = parseInt(NN);
    if (!Number.isFinite(nn) || nn < 0) {
      toast.error("Please enter a valid number");
      return;
    }
    setResult2(piconetProbability2(nn));
  };
  const handleCalc3 = () => {
    let p = parseFloat(P);
    if (!Number.isFinite(p) || p < 0) {
      toast.error("Please enter a valid number");
      return;
    }
    setResult3(numberOfPiconets(p));
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
      <Card className="hover:shadow-lg  transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              Probability that one piconet transmits successfully
            </CardTitle>
            <Badge variant="secondary">Chapter 12</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-mono">
              <BlockMath math="P = (1-1/79)^{n-1}" />
            </div>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            n: The number of piconets.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg  transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg">
            Calculate Probability that one piconet transmits successfully
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Inputs */}
          <div className="flex gap-2">
            <Input
              placeholder="n"
              value={N}
              onChange={(e) => setN(e.target.value)}
              type="number"
              min="0"
            />

            <Button onClick={handleCalc}>Calculate</Button>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            Everytime you change the values, you need to click "Calculate"
          </CardDescription>
          {/* Result */}
          {result !== null && (
            <div className="text-center p-4 bg-muted/30 rounded">
              <BlockMath math={`P = (1 - 1/79^{${N}-1}) =  ${result.toFixed(6)}`} />
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg  transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              Probability that the master can transmit and receive without collisions in both slots.
            </CardTitle>
            <Badge variant="secondary">Chapter 12</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-mono">
              <BlockMath math="P = (1-1/79)^{2n-2}" />
            </div>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            n: The number of piconets.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg  transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg">
            Calculate probability that the master can transmit and receive without collisions in
            both slots.
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Inputs */}
          <div className="flex gap-2">
            <Input
              placeholder="n"
              value={NN}
              onChange={(e) => setNN(e.target.value)}
              type="number"
              min="0"
            />

            <Button onClick={handleCalc2}>Calculate</Button>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            Everytime you change the values, you need to click "Calculate"
          </CardDescription>
          {/* Result */}
          {result2 !== null && (
            <div className="text-center p-4 bg-muted/30 rounded">
              <BlockMath math={`P = (1 - 1/79^{2*${NN}-2}) =  ${result2.toFixed(6)}`} />
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg  transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              Number of piconets coexisting knowing P loss of packets
            </CardTitle>
            <Badge variant="secondary">Chapter 12</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-mono">
              <BlockMath math="n = \frac{log(P)}{2log(1-1/79)} + 1" />
            </div>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            n: The number of piconets.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg  transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg">
            Calculate number of piconets coexisting knowing P loss of packets
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Inputs */}
          <div className="flex gap-2">
            <Input
              placeholder="P (Probability)"
              value={P}
              onChange={(e) => setP(e.target.value)}
              type="number"
              min="0"
            />

            <Button onClick={handleCalc3}>Calculate</Button>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            Everytime you change the values, you need to click "Calculate"
          </CardDescription>
          {/* Result */}
          {result3 !== null && (
            <div className="text-center p-4 bg-muted/30 rounded">
              <BlockMath
                math={`n = \\frac{log(${P})}{2log(1-1/79)} + 1 =  ${result3.toFixed(4)}`}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Chapter12;
