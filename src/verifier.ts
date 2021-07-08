import { verifyCredential } from "didkit-wasm-node";
import { newKit } from "@celo/contractkit";

const networks = {
  alfajores: "https://alfajores-forno.celo-testnet.org",
  baklava: "https://baklava-forno.celo-testnet.org",
  main: "https://forno.celo.org",
};

const kit = newKit(networks.baklava);

export const verify = async (credential: any): Promise<string> => {
  const validators = await kit.contracts.getValidators();

  // get current signers
  const signerAdresses = await validators.currentSignerSet();

  // get credential's issuer address
  const issuerAddress = credential.issuer.split(":").pop();

  // checks if the issuer is a current signer
  const isIssuerSigner = signerAdresses.includes(issuerAddress);

  if (!isIssuerSigner) {
    throw new Error("Issuer is not a valid validator address");
  }

  // checks if the credential is cryptographically correct
  const verifyResult = await verifyCredential(JSON.stringify(credential), "{}");
  const result = JSON.parse(verifyResult);

  // checks for errors
  if (result.errors.length > 0) {
    throw new Error(result.errors.join(", "));
  } else {
    return "This is a valid credential.";
  }
};
