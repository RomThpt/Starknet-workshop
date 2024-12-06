"use client";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
    useAccount,
    useBalance,
    useBlockNumber,
    useContract,
    useReadContract,
    useSendTransaction,
    useTransactionReceipt,
} from "@starknet-react/core";
import { BlockNumber, Contract, RpcProvider } from "starknet";
import { ABI } from "../abis/abi";
import { type Abi } from "starknet";
import { formatAmount, shortenAddress } from "@/lib/utils";
const WalletBar = dynamic(() => import("../components/WalletBar"), {
    ssr: false,
});
const Page: FC = () => {
    // Step 1 --> Read the latest block -- Start
    const {
        data: dataBlockNumber,
        isLoading: isLoadingBlockNumber,
        error: errorBlockNumber,
    } = useBlockNumber({ blockIdentifier: "latest" as BlockNumber });
    const endCourse = 369628;
    // Step 1 --> Read the latest block -- End

    // Step 2 --> Read your balance -- Start
    const { address: userAddress } = useAccount();
    const {
        data: balance,
        isLoading: isLoadingBalance,
        error: balanceError,
    } = useBalance({ address: userAddress });
    // Step 2 --> Read your balance -- End

    // Step 3 --> Read from a contract -- Start
    const contractAdress =
        "0x1c758616421a10f9df071a5d985c72e3907cf98d553204cf8dee354647c736";
    const { data: readData , refetch: dataRefetch} = useReadContract({
        functionName: "get_balance",
        args: [],
        abi: ABI as Abi,
        address: contractAdress,
        watch: true,
        refetchInterval: 1000,
    });
    // Step 3 --> Read from a contract -- End

    // Step 4 --> Write to a contract -- Start

    // Step 4 --> Write to a contract -- End

    // Step 5 --> Reset balance -- Start
    // Step 5 --> Reset balance -- End

    // Step 6 --> Get events from a contract -- Start
    // Step 6 --> Get events from a contract -- End

    return (
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col">
            <h1 className="text-3xl font-bold text-center mb-6">
                Starknet Frontend Workshop
            </h1>

            <div className="flex flex-wrap justify-center gap-4">
                <div className="w-full max-w-md space-y-4">
                    <div className="bg-white p-4 border-black border">
                        <h2 className="text-xl font-bold mb-2">
                            Wallet Connection
                        </h2>
                        <WalletBar />
                    </div>
                    {!isLoadingBlockNumber && !errorBlockNumber && (
                        <div
                            className={`p-4 border-black border ${
                                dataBlockNumber! < endCourse
                                    ? "bg-green-500"
                                    : "bg-red-500"
                            }`}
                        >
                            <h3 className="text-lg font-bold mb-2">
                                Read the Blockchain
                            </h3>
                            <p>Current Block: {dataBlockNumber}</p>
                        </div>
                    )}
                    {!isLoadingBalance && !balanceError && userAddress && (
                        <div className="p-4 bg-white border-black border">
                            <h3 className="text-lg font-bold mb-2">
                                Your Balance
                            </h3>
                            <p>Symbol: {balance?.symbol}</p>
                            <p>Balance: {balance?.value}</p>
                        </div>
                    )}
                    <div className="w-full max-w-md space-y-4">
                        <div className="p-4 bg-white border-black border">
                            <h3 className="text-lg font-bold mb-2">
                                Contract Balance
                            </h3>
                            <p>Balance: {readData?.toString()}</p>
                            <button
                                onClick={() => dataRefetch()}
                                className="mt-2 border border-black text-black font-regular py-1 px-3 bg-yellow-300 hover:bg-yellow-500"
                            >
                                Refresh
                            </button>
                        </div>
                    </div>

                    {/* Step 5 --> Reset balance by owner only -- End */}
                    {/* <div className="p-4 bg-white border-black border">
            <h3 className="text-lg font-bold mb-2">Contract Balance</h3>
            <p>Balance: 0</p>
            <button
              onClick={() => console.log("Refreshing...")}
              className="mt-2 border border-black text-black font-regular py-1 px-3 bg-yellow-300 hover:bg-yellow-500"
            >
              Refresh
            </button>
          </div> */}
                    {/* Step 3 --> Read from a contract -- End */}

                    {/* Step 4 --> Write to a contract -- Start */}
                    {/* <form className="bg-white p-4 border-black border">
            <h3 className="text-lg font-bold mb-2">Write to Contract</h3>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount:</label>
            <input
              type="number"
              id="amount"
              className="block w-full px-3 py-2 text-sm leading-6 border-black focus:outline-none focus:border-yellow-300 black-border-p"
            />
            <button
              type="submit"
              className="mt-3 border border-black text-black font-regular py-2 px-4 bg-yellow-300 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Send
            </button>
            <a
              href={`https://sepolia.voyager.online/tx/`}
              target="_blank"
              className="block mt-2 text-blue-500 hover:text-blue-700 underline"
              rel="noreferrer"
            >
              Check TX on Sepolia
            </a>
          </form> */}
                    {/* Step 4 --> Write to a contract -- End */}

                    {/* Step 6 --> Get events from a contract -- Start */}
                    {/* <div className="p-4 bg-white border-black border">
            <h3 className="text-lg font-bold mb-2">
              Contract Events (X)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b border-gray-300 text-left p-2 font-semibold">Sender</th>
                    <th className="border-b border-gray-300 text-right p-2 font-semibold">Added</th>
                    <th className="border-b border-gray-300 text-right p-2 font-semibold">New Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={0}>
                    <td className="border-b border-gray-200 p-2">0xNestor</td>
                    <td className="border-b border-gray-200 p-2 text-right">1</td>
                    <td className="border-b border-gray-200 p-2 text-right">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
                    {/* Step 6 --> Get events from a contract -- End */}
                </div>
            </div>
        </div>
    );
};

export default Page;
