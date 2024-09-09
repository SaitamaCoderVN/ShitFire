"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
  useAccount,
  useChainId,
} from "wagmi";
import { abi } from "@/components/abi";
import { erc20Abi } from "@/components/erc20-abi";
import { Badge } from "@/components/ui/badge";
import { Loader2, Check } from "lucide-react";
import { useEffect } from "react";
import {
  CHAINID,
  TOKEN_ADDRESS,
  CONTRACT_ADDRESS_BAOBAB,
  CONTRACT_ADDRESS_CYPRESS,
  CONTRACT_ADDRESS_OPAL,
  CONTRACT_ADDRESS_QUARTZ,
  CONTRACT_ADDRESS_UNIQUE,
  BLOCK_EXPLORER_BAOBAB,
  BLOCK_EXPLORER_CYPRESS,
  BLOCK_EXPLORER_OPAL,
  BLOCK_EXPLORER_QUARTZ,
  BLOCK_EXPLORER_UNIQUE,
} from "../../components/contract";
import cleanImage from "@/assets/shit.gif";

const formSchema = z.object({});

export default function CleanForm() {
  const { toast } = useToast();
  const account = useAccount();
  const chainId = useChainId();

  let contractAddress: `0x${string}`;
  let tokenAddress: `0x${string}`;
  let blockexplorer: string;

  switch (chainId) {
    case CHAINID.BAOBAB:
      contractAddress = CONTRACT_ADDRESS_BAOBAB;
      tokenAddress = TOKEN_ADDRESS;
      blockexplorer = BLOCK_EXPLORER_BAOBAB;
      break;
    case CHAINID.CYPRESS:
      contractAddress = CONTRACT_ADDRESS_CYPRESS;
      tokenAddress = TOKEN_ADDRESS;
      blockexplorer = BLOCK_EXPLORER_CYPRESS;
      break;
    case CHAINID.UNIQUE:
      contractAddress = CONTRACT_ADDRESS_UNIQUE;
      tokenAddress = TOKEN_ADDRESS;
      blockexplorer = BLOCK_EXPLORER_UNIQUE;
      break;
    case CHAINID.QUARTZ:
      contractAddress = CONTRACT_ADDRESS_QUARTZ;
      tokenAddress = TOKEN_ADDRESS;
      blockexplorer = BLOCK_EXPLORER_QUARTZ;
      break;
    case CHAINID.OPAL:
      contractAddress = CONTRACT_ADDRESS_OPAL;
      tokenAddress = TOKEN_ADDRESS;
      blockexplorer = BLOCK_EXPLORER_OPAL;
      break;
    default:
      throw new Error("Network not supported");
  }

  const {
    data: cleanHash,
    error: cleanError,
    isPending: cleanIsPending,
    writeContract: cleanWriteContract,
  } = useWriteContract();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (cleanError) {
      toast({
        variant: "destructive",
        title: "Transaction failed",
        description: `${(cleanError as BaseError).shortMessage || cleanError.message}`,
      });
    }
  }, [cleanError, toast]);

  async function onSubmit() {
    try {
      const amount = BigInt("1000000000000000000000");
      await cleanWriteContract({
        abi: erc20Abi,
        address: tokenAddress,
        functionName: "approve",
        args: [contractAddress, amount],
      });

      await cleanWriteContract({
        abi: abi,
        address: contractAddress,
        functionName: "airdropTokens",
        args: [],
      });

      toast({
        variant: "default",
        className: "bg-white",
        title: "Transaction successful",
        description: "Clean operation completed successfully!",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred during the clean operation",
      });
    }
  }

  function truncateAddress(address: string) {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  }

  const { isLoading: isCleanConfirming, isSuccess: isCleanConfirmed } =
    useWaitForTransactionReceipt({
      hash: cleanHash,
    });

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full text-white"
        >
          {cleanIsPending ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing
            </Button>
          ) : (
            <Button 
            className={`mt-10 text-sm px-20 py-5 font-semibold box`} 
            style={{ 
              width: '6px', 
              height: '6px',
              border: '2px solid #000',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 2,
              transition: 'all 0.3s ease',
            }}
             type="submit">Clean</Button>
          )}
        </form>
      </Form>
      <div className="bg-secondary-bg p-6 mt-10 inline-block w-full lg:w-[70%] rounded-xl">
        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Transaction Status
        </h3>
        {cleanHash ? (
          <div className="flex flex-row gap-2">
            Hash:
            <a
              target="_blank"
              className="text-blue-500 underline"
              href={`${blockexplorer}${cleanHash}`}
            >
              {truncateAddress(cleanHash)}
            </a>
          </div>
        ) : (
          <>
            <div className="flex flex-row gap-2">
              Hash: No transaction hash
            </div>
            <Badge variant="outline" className="border-[#2B233C]">
              No transaction
            </Badge>
          </>
        )}
        {isCleanConfirming && (
          <Badge variant="secondary">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Pending confirmation...
          </Badge>
        )}
        {isCleanConfirmed && (
          <Badge className="flex flex-row items-center w-[40%] bg-green-500 cursor-pointer">
            <Check className="mr-2 h-4 w-4" />
            Transaction confirmed!
          </Badge>
        )}
      </div>
    </>
  );
}