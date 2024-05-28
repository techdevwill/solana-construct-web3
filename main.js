function detectWallet(){
	const provider = window.phantom?.solana;
	return provider?.isPhantom
}

runOnStartup(runtime => {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/@solana/web3.js@latest/lib/index.iife.js';
    script.onload = function() {
        alert('Solana Web3.js library loaded.');
    };
    document.head.appendChild(script);
});

window.gWalletDetails = async function getWalletDetails(walletAddress) {
    const rpcUrl = 'https://sparkling-still-rain.solana-mainnet.quiknode.pro/5223b0c69cad56a09b342e742fbab803381da561/';
    const connection = new window.solanaWeb3.Connection(rpcUrl, 'confirmed');
    const publicKey = new window.solanaWeb3.PublicKey(walletAddress);
    const balance = await connection.getBalance(publicKey);
    return balance / window.solanaWeb3.LAMPORTS_PER_SOL; // Convert lamports to SOL
}


async function connectWallet(){
	const provider = window.phantom?.solana;
	const address = await window.solana.connect()
	return address.publicKey
}
