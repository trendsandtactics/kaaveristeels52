"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SteelCalculator() {

  const [activeTab, setActiveTab] = useState<"construction" | "weight">("construction");

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");

  const [structureType,setStructureType] = useState("residential");
  const [area,setArea] = useState("");
  const [floors,setFloors] = useState("1");
  const [estimatedSteel,setEstimatedSteel] = useState<number | null>(null);

  const [diameter,setDiameter] = useState("8");
  const [length,setLength] = useState("12");
  const [quantity,setQuantity] = useState("");
  const [estimatedWeight,setEstimatedWeight] = useState<number | null>(null);
  const [bundleCount,setBundleCount] = useState<number | null>(null);

  const validateLead = () => {
    if(!name || !phone){
      alert("Please enter your Name and Phone Number");
      return false;
    }
    return true;
  };

  const calculateConstruction = () => {

    if(!validateLead()) return;

    let multiplier = 4;

    if(structureType === "commercial") multiplier = 5;
    if(structureType === "infrastructure") multiplier = 6;

    const totalArea = Number(area) * Number(floors);

    if(totalArea > 0){
      setEstimatedSteel(totalArea * multiplier);
    }

  };

  const calculateWeight = () => {

    if(!validateLead()) return;

    const d = Number(diameter);
    const l = Number(length);
    const q = Number(quantity);

    if(d > 0 && l > 0 && q > 0){

      const weightPerBar = ((d*d)/162)*l;
      const totalWeight = weightPerBar*q;

      setEstimatedWeight(totalWeight);

      const barsPerBundle = d <= 10 ? 10 : d <= 16 ? 5 : 3;
      setBundleCount(Math.ceil(q / barsPerBundle));

    }

  };

  return (

    <motion.section
      initial={{opacity:0,y:15}}
      animate={{opacity:1,y:0}}
      className="mx-auto w-full max-w-6xl rounded-xl border border-gray-200 bg-white shadow-lg"
    >

      {/* Header */}

      <div className="border-b border-gray-200 p-5 text-center">

        <h2 className="text-2xl font-bold">
          Steel <span className="text-red-600">Calculator</span>
        </h2>

      </div>


      {/* Lead Inputs */}

      <div className="grid md:grid-cols-2 gap-3 p-4 border-b border-gray-200">

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          className="border p-3 rounded-lg"
        />

      </div>


      {/* Tabs */}

      <div className="flex border-b border-gray-200">

        <button
          onClick={()=>setActiveTab("construction")}
          className={`flex-1 py-3 font-semibold ${
            activeTab==="construction"
            ? "bg-black text-white"
            : "bg-gray-100 text-gray-600"
          }`}
        >
          Construction Steel
        </button>

        <button
          onClick={()=>setActiveTab("weight")}
          className={`flex-1 py-3 font-semibold ${
            activeTab==="weight"
            ? "bg-black text-white"
            : "bg-gray-100 text-gray-600"
          }`}
        >
          Weight & Bundle
        </button>

      </div>


      <div className="p-5">

        <AnimatePresence mode="wait">

        {/* Construction Calculator */}

        {activeTab==="construction" && (

          <motion.div
            key="construction"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="space-y-4"
          >

            <div className="grid md:grid-cols-3 gap-3">

              <select
                value={structureType}
                onChange={(e)=>setStructureType(e.target.value)}
                className="border p-3 rounded-lg"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="infrastructure">Infrastructure</option>
              </select>

              <input
                type="number"
                placeholder="Area (sq.ft)"
                value={area}
                onChange={(e)=>setArea(e.target.value)}
                className="border p-3 rounded-lg"
              />

              <input
                type="number"
                placeholder="Floors"
                value={floors}
                onChange={(e)=>setFloors(e.target.value)}
                className="border p-3 rounded-lg"
              />

            </div>

            <button
              onClick={calculateConstruction}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold"
            >
              Calculate Steel
            </button>

            {estimatedSteel && (

              <div className="bg-gray-100 p-5 rounded-lg text-center">

                <p className="text-gray-500">
                  Estimated Steel
                </p>

                <p className="text-3xl font-bold">
                  {estimatedSteel.toLocaleString()} kg
                </p>

              </div>

            )}

          </motion.div>

        )}


        {/* Weight Calculator */}

        {activeTab==="weight" && (

          <motion.div
            key="weight"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="space-y-4"
          >

            <div className="grid md:grid-cols-4 gap-3">

              <select
                value={diameter}
                onChange={(e)=>setDiameter(e.target.value)}
                className="border p-3 rounded-lg"
              >
                {[8,10,12,16,20,25,32].map(d=>(
                  <option key={d} value={d}>{d} mm</option>
                ))}
              </select>

              <input
                type="number"
                value={length}
                onChange={(e)=>setLength(e.target.value)}
                className="border p-3 rounded-lg"
              />

              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}
                className="border p-3 rounded-lg"
              />

              <button
                onClick={calculateWeight}
                className="bg-black text-white rounded-lg"
              >
                Calculate
              </button>

            </div>

            {estimatedWeight && (

              <div className="grid md:grid-cols-2 gap-3">

                <div className="bg-gray-100 p-5 rounded-lg text-center">

                  <p className="text-gray-500">
                    Total Weight
                  </p>

                  <p className="text-3xl font-bold">
                    {estimatedWeight.toFixed(2)} kg
                  </p>

                </div>

                <div className="bg-gray-100 p-5 rounded-lg text-center">

                  <p className="text-gray-500">
                    Bundles
                  </p>

                  <p className="text-3xl font-bold">
                    {bundleCount}
                  </p>

                </div>

              </div>

            )}

          </motion.div>

        )}

        </AnimatePresence>

      </div>

    </motion.section>

  );

}
