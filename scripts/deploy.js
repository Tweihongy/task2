
const { ethers } = require('hardhat');
const { Core } = require('@quicknode/sdk');

async function main() {


  const quickNodeEndpoint = 'https://serene-prettiest-mansion.quiknode.pro/850ce91d0d36fc65b47a6582a075149870d3a83e/';
  const quickNodePrivateKey = '850ce91d0d36fc65b47a6582a075149870d3a83e';

  const core = new Core({
    endpointUrl: quickNodeEndpoint,
    privateKey: quickNodePrivateKey,
  });

  const currentBlockNumber = await core.client.getBlockNumber();
  console.log('Current Block Number:', currentBlockNumber);


 // const privateKey = '850ce91d0d36fc65b47a6582a075149870d3a83e';
 // const wallet = new ethers.Wallet(privateKey, ethers.provider);
//
//
 // const uniswapRouterAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
//
//
 // const tokenInAddress = 'TOKEN_IN_ADDRESS';
//
//
 // const amountIn = ethers.utils.parseEther('AMOUNT_IN');
//
//
 // const recipientAddress = 'RECIPIENT_ADDRESS';
//
//
 // const amountOutMin = ethers.utils.parseEther('AMOUNT_OUT_MIN');
//
 // const path = [tokenInAddress, ethers.constants.AddressZero];
//
//
 // const deadline = Math.floor(Date.now() / 1000) + 60 * 20; 
//
//
 // const uniswapRouter = new ethers.Contract(uniswapRouterAddress, ['function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory)'], wallet);
//
//
 // const tx = await uniswapRouter.swapExactTokensForETH(amountIn, amountOutMin, path, recipientAddress, deadline);
 // await tx.wait();
//
 // console.log('Swap completed successfully!');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
