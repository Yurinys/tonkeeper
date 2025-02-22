export interface DetailsProps {
  contractAddress: string;
  tokenId?: number;
  standard?: string;
  chain?: string;
  ownerAddress?: string;
  expiringAt?: number;
}
Revert API - handling edge casesRevert UI - fixing typo