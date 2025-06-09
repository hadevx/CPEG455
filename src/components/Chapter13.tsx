/* ─── UI ─────────────────────────────────────────────────────────────────── */
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/shadcn/ui/card";
import { Input } from "@/shadcn/ui/input";
import { Button } from "@/shadcn/ui/button";
import { Badge } from "@/shadcn/ui/badge";
import { useState } from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { erlangB, carriedTraffic, efficiency, trafficIntensity } from "@/utils/helper.tsx";

function Chapter13() {
  const [A, setA] = useState("");
  const [N, setN] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [AA, setAA] = useState("");
  const [Pb, setPb] = useState("");
  const [result2, setResult2] = useState<number | null>(null);
  const [Ac, setAc] = useState("");
  const [NN, setNN] = useState("");
  const [result3, setResult3] = useState<number | null>(null);
  const [lambda, setLambda] = useState("");
  const [h, setH] = useState("");
  const [result4, setResult4] = useState<number | null>(null);

  const handleCalc = () => {
    const a = parseFloat(A);
    const n = parseInt(N, 10);
    if (!Number.isFinite(a) || !Number.isFinite(n) || n < 0) return;
    setResult(erlangB(a, n));
  };
  const handleCalc2 = () => {
    const a = parseFloat(AA);
    const pb = parseFloat(Pb);
    if (!Number.isFinite(a) || !Number.isFinite(pb) || pb < 0) return;
    setResult2(carriedTraffic(a, pb));
  };
  const handleCalc3 = () => {
    const ac = parseFloat(Ac);
    const nn = parseFloat(NN);
    if (!Number.isFinite(ac) || !Number.isFinite(nn) || nn < 0) return;
    setResult3(efficiency(ac, nn));
  };
  const handleCalc4 = () => {
    const l = parseFloat(lambda);
    const hh = parseFloat(h);
    if (!Number.isFinite(l) || !Number.isFinite(hh) || hh < 0) return;
    setResult4(trafficIntensity(l, hh));
  };

  return (
    <div className="grid  gap-6  md:grid-cols-2 lg:grid-cols-2">
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Probability of Blocking</CardTitle>
            <Badge variant="secondary">Chapter 13</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-mono">
              <BlockMath math="P(B) = \frac{A^N / N!}{\sum_{X=0}^{N} \frac{A^X}{X!}}" />
            </div>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            A: is the traffic intensity | N: is the number of channels.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg  transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg">Calculate Probability of Blocking</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Inputs */}
          <div className="flex gap-2">
            <Input
              placeholder="A (Erlangs)"
              value={A}
              onChange={(e) => setA(e.target.value)}
              type="number"
              min="0"
            />
            <Input
              placeholder="N (channels)"
              value={N}
              onChange={(e) => setN(e.target.value)}
              type="number"
              min="0"
            />
            <Button onClick={handleCalc}>Calculate</Button>
          </div>
          <Badge variant="secondary" className="text-sm leading-relaxed">
            Everytime you change the values, you need to click "Calculate"
          </Badge>
          {/* Result */}
          {result !== null && (
            <div className="text-center p-4 bg-muted/30 rounded">
              <BlockMath
                math={`P(B)=\\frac{${A}^{${N}}/${N}!}{\\sum_{X=0}^{${N}}\\frac{${A}^X}{X!}} \\;\\approx\\; ${result.toFixed(
                  6
                )}`}
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">The Carried Traffic</CardTitle>
            <Badge variant="secondary">Chapter 13</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-mono">
              <BlockMath math="A_c = A * (1-P(B))" />
            </div>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            A: is the offered traffic | P(B): Probability of blocking
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg  transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg">Calculate The Carried traffic</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Inputs */}
          <div className="flex gap-2">
            <Input
              placeholder="A (Erlangs)"
              value={AA}
              onChange={(e) => setAA(e.target.value)}
              type="number"
              min="0"
            />
            <Input
              placeholder="P(B)"
              value={Pb}
              onChange={(e) => setPb(e.target.value)}
              type="number"
              min="0"
            />
            <Button onClick={handleCalc2}>Calculate</Button>
          </div>
          <Badge variant="secondary" className="text-sm leading-relaxed">
            Everytime you change the values, you need to click "Calculate"
          </Badge>
          {/* Result */}
          {result2 !== null && (
            <div className="text-center p-4 bg-muted/30 rounded">
              <BlockMath math={`A_c = ${AA} * (1 - ${Pb}) = ${result2.toFixed(4)}`} />
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Efficiency of Channel</CardTitle>
            <Badge variant="secondary">Chapter 13</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-mono">
              <BlockMath math="\mu = \frac{A_c}{N}=\frac{A*(1-P(B))}{N}" />
            </div>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            A: is the traffic intensity (offered load) | N: is the number of servers (or channels),
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg  transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg">Calculate Efficiency of Channel</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Inputs */}
          <div className="flex gap-2">
            <Input
              placeholder="Ac (Erlangs)"
              value={Ac}
              onChange={(e) => setAc(e.target.value)}
              type="number"
              min="0"
            />
            <Input
              placeholder="N"
              value={NN}
              onChange={(e) => setNN(e.target.value)}
              type="number"
              min="0"
            />
            <Button onClick={handleCalc3}>Calculate</Button>
          </div>
          <Badge variant="secondary" className="text-sm leading-relaxed">
            Everytime you change the values, you need to click "Calculate"
          </Badge>
          {/* Result */}
          {result3 !== null && (
            <div className="text-center p-4 bg-muted/30 rounded">
              <BlockMath math={`\\mu = \\frac{${Ac}}{${NN}} = ${result3.toFixed(4)}`} />
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Traffic Intensity</CardTitle>
            <Badge variant="secondary">Chapter 13</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-mono">
              <BlockMath math="A_{tot} = \lambda*h" />
            </div>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            <InlineMath math="\lambda" />: calls/hour" | h: call duration
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg  transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg">Calculate Traffic Intensity</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Inputs */}
          <div className="flex gap-2">
            <Input
              placeholder="Lambda (calls/hour)"
              value={lambda}
              onChange={(e) => setLambda(e.target.value)}
              type="number"
              min="0"
            />
            <Input
              placeholder="h (call duration/hour)"
              value={h}
              onChange={(e) => setH(e.target.value)}
              type="number"
              min="0"
            />
            <Button onClick={handleCalc4}>Calculate</Button>
          </div>
          <Badge variant="secondary" className="text-sm leading-relaxed">
            Everytime you change the values, you need to click "Calculate"
          </Badge>
          {/* Result */}
          {result4 !== null && (
            <div className="text-center p-4 bg-muted/30 rounded">
              <BlockMath math={`A_{tot} = ${lambda} * ${h} = ${result4.toFixed(2)}`} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
export default Chapter13;
