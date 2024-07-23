import { tk } from '$wallet';

export function getChainName(): 'mainnet' | 'testnet' {
  return tk.wallet?.isTestnet ? 'testnet' : 'mainnet';
}
Fix dependencies - enhancing logs