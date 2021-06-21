import { verifyCredential } from "didkit-wasm-node";
import { newKit } from "@celo/contractkit";
const kit = newKit("https://baklava-forno.celo-testnet.org");

export const verify = async (credential: any): Promise<boolean> => {
  console.log(
    await (
      await kit.contracts.getAttestations()
    ).getAttestationIssuers(
      JSON.parse(credential).credentialSubject.identifier,
      JSON.parse(credential).credentialSubject.id.split(":").pop()
    )
  );
  const verifyOptionsString = "{}";
  const verifyResult = await verifyCredential(credential, verifyOptionsString);
  const result = JSON.parse(verifyResult);

  if (result.errors.length > 0) {
    return false;
  } else {
    return true;
  }
};
