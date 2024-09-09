"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
  useAccount,
} from "wagmi";
import { parseEther } from "viem";
import { Badge } from "@/components/ui/badge";
import { Loader2, Check } from "lucide-react";
import { useChainId } from "wagmi";
import { erc20Abi } from "@/components/erc20-abi";
import { Label } from "@/components/ui/label";
import {
  BLOCK_EXPLORER_BAOBAB,
  BLOCK_EXPLORER_CYPRESS,
  BLOCK_EXPLORER_OPAL,
  BLOCK_EXPLORER_QUARTZ,
  BLOCK_EXPLORER_UNIQUE,
  CHAINID,
  CONTRACT_ADDRESS_BAOBAB,
  CONTRACT_ADDRESS_CYPRESS,
  CONTRACT_ADDRESS_OPAL,
  CONTRACT_ADDRESS_QUARTZ,
  CONTRACT_ADDRESS_UNIQUE,
} from "../../components/contract";
import Stepbox from "@/components/stepbox";

const setAllowanceFormSchema = z.object({
  amount: z.string(),
});

function Airdrop() {
  const { toast } = useToast();
  const account = useAccount();
  let chainId = useChainId();

  let contractAddress: any;
  let blockexplorer: string;
  
  // ... (giữ nguyên phần switch cho contractAddress và blockexplorer)

  const [erc20TokenAddress, setErc20TokenAddress] = useState<string>("");
  const [erc20TokenSymbol, setErc20TokenSymbol] = useState<string>("");
  const {
    data: approveHash,
    error: approveError,
    isPending: approveIsPending,
    writeContract: approveWriteContract,
  } = useWriteContract();

  const setAllowanceForm = useForm<z.infer<typeof setAllowanceFormSchema>>({
    resolver: zodResolver(setAllowanceFormSchema),
  });

  useEffect(() => {
    if (approveError) {
      toast({
        variant: "destructive",
        title: "Transaction reverted",
        description: `${(approveError as BaseError).shortMessage || approveError.message}`,
      });
    }
  }, [approveError, toast]);

  function onApprove(values: z.infer<typeof setAllowanceFormSchema>) {
    const amount: bigint = parseEther(values.amount.toString());
    approveWriteContract({
      abi: erc20Abi,
      address: erc20TokenAddress as `0x${string}`,
      functionName: "approve",
      args: [contractAddress, amount],
    });
  }

  function truncateAddress(address: string) {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  }

  const { isLoading: isApproveConfirming, isSuccess: isApproveConfirmed } =
    useWaitForTransactionReceipt({
      hash: approveHash,
    });

  return (
    <div className="bg-gradient-bg pb-20 w-full row-start-2">
      <div className="h-full text-[#101010] pt-20">
        <div className="flex flex-row items-center justify-center">
          <Card className="bg-dark-bg text-white w-full border-0 shadow-lg lg:max-w-3xl">
            <CardHeader>
              <CardTitle className="text-4xl text-">
                Approve ERC20 Token For Contract
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-5 items-center">
                  <Stepbox>Step 1</Stepbox>
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Enter token address
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="tokenAddress">ERC20 Token address</Label>
                  <Input
                    required
                    name="tokenAddress"
                    type="text"
                    className="bg-secondary-bg text-dark-text border-none focus:outline-none placeholder-dark-text"
                    placeholder="Paste address of the token here"
                    value={erc20TokenAddress}
                    onChange={(e) => setErc20TokenAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex flex-row gap-5 items-center">
                  <Stepbox>Step 2</Stepbox>
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Set approval amount
                  </h3>
                </div>
                <div className="">
                  <Form {...setAllowanceForm}>
                    <form
                      onSubmit={setAllowanceForm.handleSubmit(onApprove)}
                      className="space-y-8"
                    >
                      <FormField
                        control={setAllowanceForm.control}
                        name="amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Approval amount</FormLabel>
                            <FormControl>
                              <Input
                                required
                                type="text"
                                className="bg-secondary-bg text-dark-text border-none focus:outline-none placeholder-dark-text"
                                placeholder="Enter the amount to be approved"
                                {...field}
                                value={field.value ?? ""}
                              />
                            </FormControl>
                            <FormDescription>
                              This allows the contract to transfer your tokens on your behalf.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {approveIsPending ? (
                        <Button disabled>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Please wait
                        </Button>
                      ) : (
                        <Button
                          variant="default"
                          size="default"
                          className="bg-primary text-white rounded-xl"
                          type="submit"
                        >
                          Approve
                        </Button>
                      )}
                    </form>
                  </Form>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 items-start h-fit">
              <div className="flex flex-row gap-5 items-center">
                <Stepbox>Step 3</Stepbox>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Check approval status
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {approveHash ? (
                  <div className="flex flex-row gap-2">
                    Hash:
                    <a
                      target="_blank"
                      className="text-blue-500 underline"
                      href={`${blockexplorer + approveHash}`}
                    >
                      {truncateAddress(approveHash)}
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-row gap-2">
                      Hash: no transaction hash until after submission
                    </div>
                    <Badge className="w-fit" variant="outline">
                      No approval yet
                    </Badge>
                  </>
                )}
                {isApproveConfirming && (
                  <Badge className="w-fit" variant="secondary">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Waiting for confirmation...
                  </Badge>
                )}
                {isApproveConfirmed && (
                  <Badge className="flex flex-row items-center w-fit bg-green-500 cursor-pointer">
                    <Check className="mr-2 h-4 w-4" />
                    Approval confirmed!
                  </Badge>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Airdrop), {
  ssr: false,
});